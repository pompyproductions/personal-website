# Personal Website

Personal website to display my profile, works, and external links. Simple React app (_without_ using create-react-app), different pages handled with React Router and Netlify's own "_redirects" feature.

Please let me know if you have any feedback or notice any issues!

## News/Updates

### 2022-11-03 Released v1.0

The website is online! [Click here to view it.](https://erengazioglu.com)

## Roadmap

_Note: unticked boxes mean they haven't been done yet; ticked boxes mean they have been done, but not yet part of the "netlify deploy"._

This roadmap broadly follows a **"NOW/NEXT/LATER"** format, with an additional 3-letter prefix to summarize the nature of the alteration. However, please note that this does not translate immediately to a Semantic Versioning scheme.

The items in **"NOW"** patch the current version for instant improvements. Mostly intended as fixes, minor retouches in style, content updates, and overall refactoring of potentially messy code.

The **"NEXT"** section is to plan the next minor update. This can mean adding/removing/modifying features and content, as well as changing the overall feel of the page.

While the first two appear to mirror the "MAJOR/MINOR/PATCH" model, **"NEXT"** breaks with this scheme: it is intended less as a "next major version" roadmap and more as a tracker for plans and ideas for future versions, MAJOR and MINOR alike. In other words, it acts as a pool of ideas and improvements to cherry-pick from, to simplify planning the next update.

Prefix reference:

- **REF:** Refactor the code (improve performance, readability, or make future-proof) without altering its functionality;
- **FIX:** Correct parts of the program that are behaving incorrectly;
- **MOD:** Modify existing feature, altering its functionality;
- **ADD:** Add new feature to the program;
- **DEL:** Delete existing functionality.


### NOW

- [x] **FIX:** Correct the "Last Updated" dates on the portfolio page.
- [x] **FIX:** Portfolio, "Codepens" and "Project Euler" have different `<h2>` stylings because of the `<section>` element.
- [x] **MOD:** Make header link also clickable (erengazioglu.com).
- [x] **MOD:** Header nav styling, change the "current" element and the hsep to "text-faded".
- [x] **MOD:** Footer ul styling, add hover effects to SVG buttons (background-color and color transition).


### NEXT

v1.1: Accomodate changes in CV:

- [ ] **ADD:** "./the-odin-project": simple page that displays links to all exercises; github repos and their relative Github Pages.
- [ ] **ADD:** "./landing": a barebones "bio link" page that takes you to the website or to other pages.

### LATER

v1.2: Overall page content improvements.

- [ ] **REF:** Create a new react component for content cards, and use that instead of manually typing them out.
- [ ] **ADD:** Create a collapsible section for content cards, and implement for the "Passions" section in "About Me".
- [ ] **MOD:** Make clickable images more evident. (`cursor: pointer` and hover effects)
- [ ] **MOD:** Make clickable links (anchor styling) more evident.

Background canvas.

- [ ] **MOD:** Bubbles behavior. Improve scale coefficient so that it looks good on huge and tiny cards (it was originally configured to take up the whole window.)
- [ ] **ADD:** Edge bubbles. New type that draws bubbles starting from one edge, and gradually disappears toward the other edge.
- [ ] **ADD:** Homepage canvas customizer.

Themes.

- [ ] **ADD:** New color scheme for the page (themes). Consider the `useContext` hook. Start simple (a single toggle button).
- [ ] **ADD:** Theme knob for switching color schemes.
- [ ] **ADD:** Theme knob for homepage canvas customizer.

Portfolio content.

- [ ] **ADD:** Make actual content pages for portfolio (not just external links).
- [ ] **ADD:** ISSUU and The Odin Project cards.
- [ ] **MOD:** Make the "portfolio" link on the header nav collapse and expand, revealing portfolio content pages.
- [ ] **MOD:** If you have more collapsing main pages, add a "Expand All" checkbox.

Tooltips.

- [ ] **ADD:** Create a div that holds the tooltip element. Store tooltips in a json file and have elements append and remove elements on the tooltip div.

