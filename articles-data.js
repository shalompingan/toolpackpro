// Shared blog article data — single source of truth for the article list, used by
// /blog/ and any other page that lists articles (e.g. a future homepage "latest posts"
// section). Same pattern as /nav-data.js — see CLAUDE.md.
//
// To add a new article:
//   1. Write the page at /blog/<slug>/index.html.
//   2. Add its entry below.
//   3. Add the page to sitemap.xml.
//   4. Run `node scripts/check-nav-data.js` before publishing.
//
// Do not duplicate this list inside individual page <script> blocks.
var ARTICLES_DATA = [
  {
    title: 'How Many Coats of Paint Do I Need?',
    desc: 'The short answer is two coats — but some jobs need one, three, or even four. Here’s how to tell which applies to your project.',
    url: '/blog/how-many-coats-of-paint-do-i-need/',
    date: '2026-07-21'
  }
];
