# CLAUDE.md

Guidance for working on toolpackpro.com.

## Site architecture

Static site, no build framework. Each page is a self-contained HTML file (inline CSS + JS),
with one deliberate exception:

- `/nav-data.js` is the single source of truth for the "tool card" grid shown on `/` and
  `/tools/`. Both pages load it via `<script src="/nav-data.js">` and render from the
  `TOOL_NAV_DATA` array. **Never hand-copy tool entries into a page's inline script.** That's
  exactly what caused a real bug: the homepage's copy of the tool list drifted out of sync
  with /tools/'s copy, so 3 already-live tools (Paint, Concrete, Drywall) showed up as
  "Coming Soon" with no link on the homepage.

## Adding a new tool

1. Build the tool's page at `/tools/<slug>/index.html`.
2. Add its entry to `nav-data.js` with a `url` pointing to the new page. Entries without
   `url` render as a non-clickable "Coming Soon" card.
3. Add the page to `sitemap.xml`.
4. Run `node scripts/check-nav-data.js` before publishing. It verifies every url in
   nav-data.js resolves to a real file, is listed in sitemap.xml, and flags any
   "Coming Soon" entry that already has a built page sitting on disk unlinked.

## Adding a blog article (once /blog exists)

Follow the same pattern as nav-data.js: put the article list in a shared
`articles-data.js` file rather than duplicating it in `blog/index.html` and anywhere
else articles are listed (e.g. a homepage "latest posts" section). Extend
`scripts/check-nav-data.js` (or add a sibling script) to validate it the same way.
