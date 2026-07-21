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
    title: 'How Much Concrete Do I Need for a 10x10 Patio?',
    desc: 'A standard 4-inch patio needs about 1.25 cubic yards of concrete — here’s the breakdown by thickness, plus bags vs. delivery.',
    url: '/blog/how-much-concrete-for-a-10x10-patio/',
    date: '2026-07-21'
  },
  {
    title: 'How Many Bags of Concrete Do You Need for a Fence Post?',
    desc: 'Most fence posts need 1-2 bags — but post size, hole depth, and soil all change the number. Here’s how to get an exact count.',
    url: '/blog/how-many-bags-of-concrete-for-a-fence-post/',
    date: '2026-07-21'
  },
  {
    title: 'How Many Coats of Paint Do I Need?',
    desc: 'The short answer is two coats — but some jobs need one, three, or even four. Here’s how to tell which applies to your project.',
    url: '/blog/how-many-coats-of-paint-do-i-need/',
    date: '2026-07-21'
  }
];
