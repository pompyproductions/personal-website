# Version History

## v1.2 patch 1: 100vh issue

Bundled a tiny new js script (`resize-window.js`) to set window height dynamically on resize. Uses a CSS variable (`--doc-height`) which the styles access to set the height of `html, body, #root`.

## v1.2: Restyling and Scrolling Sections

### Scrollbars

In the previous versions, the entire HTML had the `overflow: auto` property. Now the webpage is `100vh`, and the `.page-container` elements (the main page content, outside of header and footer) has its own scrollbar that appears only when its own content overflows. Header and footer stay fixed. Scrollbars are also styled, both with `::-webkit-scrollbar` pseudo-elements and `scrollbar-width` and `scrollbar-color` standard properties.

### Theme

Colors are now more neutral, following a dark-scheme: anthracite for background, more icy blue for accents. Some highlights (e.g. hover effects) are yellow.

### Typography

Replaced Space Grotesk with Archivo. Used variable font properties for special titles and hover effects (`font-variation-settings`). Applied very subtle `letter-spacing`.

### Content

Added new cards to front page: a "latest news" card for updates, and a "what next" card for page navigation.

Created a "WIP" page for `./aoc2022` (the Advent of Code 2022 event). Will be updating regularly.

## v1.1: ContentCard and IconButton overhaul

- [X] **ADD:** WIP page for "./landing": short text, links, and "Download CV".
- Link to website home
- Link to GitHub
- Link to ISSUU
- Link to download CV
- [X] **ADD:** WIP page for "./the-odin-project": short text, links to github repos and preview.
- [X] **MOD:** Change overall feel of ContentCard images, with animations and an optional "hidden" attribute.
- [X] **MOD:** Change overall feel of IconButton components: lighter border that becomes solid on hover.
- [X] **REF:** Make reusable ContentCard elements instead of manually typing them out.
- [X] **REF:** Remove unnecessary section elements from ContentCards.
- [X] **REF:** Make IconButtons more flexible through various custom attributes.
- [X] **ADD:** Make a "banner" version for ContentCard.
- [X] **ADD:** Make a "strip" version for IconButton.
- [X] **ADD:** Create ExpandSection component, used in the "Passions" card in "/about-me".

## v1.0 patch 1

- [x] **FIX:** Correct the "Last Updated" dates on the portfolio page.
- [x] **FIX:** Portfolio, "Codepens" and "Project Euler" have different `<h2>` stylings because of the `<section>` element.
- [x] **MOD:** Make header link also clickable (erengazioglu.com).
- [x] **MOD:** Header nav styling, change the "current" element and the hsep to "text-faded".
- [x] **MOD:** Footer ul styling, add hover effects to SVG buttons (background-color and color transition).