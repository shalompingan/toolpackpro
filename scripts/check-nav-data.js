#!/usr/bin/env node
// Pre-publish check for nav-data.js.
// Run with: node scripts/check-nav-data.js
//
// Verifies:
//   1. Every tool with a `url` in TOOL_NAV_DATA has a real page file on disk.
//   2. Every live tool's url is present in sitemap.xml.
//   3. No "Coming Soon" entry (no `url`) already has a built page sitting on disk
//      unlinked (i.e. someone built the page but forgot to add its url).

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const navDataPath = path.join(ROOT, 'nav-data.js');
const sitemapPath = path.join(ROOT, 'sitemap.xml');

function loadNavData() {
  const code = fs.readFileSync(navDataPath, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  if (!Array.isArray(sandbox.TOOL_NAV_DATA)) {
    throw new Error('TOOL_NAV_DATA not found in nav-data.js');
  }
  return sandbox.TOOL_NAV_DATA;
}

function urlToFilePath(url) {
  const rel = url.replace(/^\//, '').replace(/\/$/, '');
  if (rel === '') return path.join(ROOT, 'index.html');
  return path.join(ROOT, rel, 'index.html');
}

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function main() {
  const tools = loadNavData();
  const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
  let errors = 0;

  for (const t of tools) {
    if (!t.url) continue;
    const filePath = urlToFilePath(t.url);
    if (!fs.existsSync(filePath)) {
      console.error(`[MISSING PAGE] "${t.name}" -> ${t.url} has no file at ${path.relative(ROOT, filePath)}`);
      errors++;
      continue;
    }
    const fullUrl = 'https://toolpackpro.com' + t.url;
    if (!sitemap.includes(fullUrl)) {
      console.error(`[NOT IN SITEMAP] "${t.name}" -> ${fullUrl} is live but missing from sitemap.xml`);
      errors++;
    }
  }

  for (const t of tools) {
    if (t.url) continue;
    const slug = slugify(t.name);
    const guessPath = path.join(ROOT, 'tools', slug, 'index.html');
    if (fs.existsSync(guessPath)) {
      console.warn(`[UNLINKED PAGE] "${t.name}" is marked Coming Soon in nav-data.js, but tools/${slug}/index.html already exists. Did you forget to add its url?`);
      errors++;
    }
  }

  if (errors === 0) {
    console.log(`OK - checked ${tools.length} entries in nav-data.js, no issues found.`);
  } else {
    console.error(`\n${errors} issue(s) found. Fix before publishing.`);
    process.exit(1);
  }
}

main();
