// Shared tool navigation data — single source of truth for every "tool card" grid site-wide
// (currently used by / and /tools/, and by any future page that lists the calculators).
//
// To add a new tool:
//   1. Add one entry below. Omit `url` until the page is actually live — it will render
//      as a non-clickable "Coming Soon" card everywhere this file is included.
//   2. Once the page is built, add `url` pointing to it.
//   3. Run `node scripts/check-nav-data.js` before publishing — it verifies every url
//      here actually resolves (not a 404) and is present in sitemap.xml.
//
// Do not duplicate this list inside individual page <script> blocks — every page should
// read from TOOL_NAV_DATA instead.
var TOOL_NAV_DATA = [
  {name:'Paint Calculator', desc:'Free paint calculator — get instant gallon estimates.', url:'/'},
  {name:'Tile Calculator', desc:'Estimate tiles needed for floors and walls by room size.', url:'/tools/tile-calculator/'},
  {name:'Concrete Calculator', desc:'Calculate concrete volume for slabs, footings, and columns.', url:'/tools/concrete-calculator/'},
  {name:'Drywall Calculator', desc:'Estimate drywall sheets needed for your renovation.', url:'/tools/drywall-calculator/'},
  {name:'Flooring Calculator', desc:'Determine how much flooring material you need to buy.'},
  {name:'Gravel Calculator', desc:'Calculate gravel volume for driveways and walkways.'},
  {name:'Mulch Calculator', desc:'Estimate mulch needed for garden beds and landscaping.'},
  {name:'Sod Calculator', desc:'Calculate sod needed to cover your lawn area.'},
  {name:'Window Calculator', desc:'Estimate window replacement costs and measurements.'},
  {name:'Door Calculator', desc:'Measure and estimate interior and exterior door sizes.'},
  {name:'Bathroom Remodel', desc:'Estimate bathroom renovation costs and materials.'}
];
