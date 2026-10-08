# CLAUDE.md

Guidance for working on toolpackpro.com.

## Site architecture

Static site, no build framework. toolpackpro.com is the studio site for ToolPack Pro's iOS
apps. Each page is a self-contained HTML file (inline CSS), no shared data files or build
step. Each app gets its own directory holding its page, privacy policy, support page and
images.

Current pages:

- `/` — studio homepage. While there are fewer than about three apps it features AquaLog
  directly; after that it becomes an app directory.
- `/aqualog/` — AquaLog page. Images live in `/aqualog/img/` (the homepage uses them too).
- `/aqualog/privacy/` — AquaLog privacy policy (real content, not a template — keep it
  accurate to what the app actually collects; Apple checks this against the App Privacy
  nutrition label in App Store Connect on every submission)
- `/aqualog/support/` — Support page (routes to support@toolpackpro.com)
- `404.html` — generic not-found page
- `_redirects` — Cloudflare Pages redirects from the old `/privacy/`, `/contact/` and
  `/support/` paths to the pages above

Shared look: warm off-white `#f7f5f0`, ink `#1f2a33`, Georgia headings, dashed footer rule,
text-only "ToolPack Pro" logo. Each app page has one accent colour taken from its icon
(AquaLog: `#124759`). Illustrations belong to an app's own pages.

The site previously carried an unrelated set of home-improvement calculator tools and blog
posts (`/tools/`, `/blog/`, `/about/`, `/disclaimer/`, `/terms/`, plus `nav-data.js` /
`articles-data.js` and their shared "tool card" grid pattern) left over from an earlier,
different project. That content was removed since it had nothing to do with AquaLog or
ToolPack Pro and was actively confusing for anyone (including Apple's review process)
landing on the site. Don't reintroduce that pattern for AquaLog content — if a future
ToolPack Pro app needs its own page, give it its own self-contained page under a clear path
and add it to `sitemap.xml`, rather than reviving the old shared-data-file grid system.

## Adding a new page

1. Build the page as a self-contained `index.html` under its own directory (matches the
   existing `/aqualog/`, `/aqualog/privacy/` pattern).
2. Add it to `sitemap.xml`.
3. Keep footer/company-info text (operating entity: 温州美伊文化用品有限公司) consistent
   across pages when adding new ones.
