# Personal Website

Personal website to display my profile, works, and external links. Simple React app (_without_ using create-react-app), different pages handled with React Router and Netlify's own "_redirects" feature.

Please let me know if you have any feedback or notice any issues!

## News/Updates

### 2022-11-03 Released v1.0

The website is online! [Click here to view it.](https://erengazioglu.com)

## Roadmap

_Note: unticked boxes mean they haven't been done yet; ticked boxes mean they have been done, but not yet part of the "netlify deploy". Alterations that have been merged are transferred to the "./version-history.md" file._

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

Continuous development: Advent of Code 2022 solutions.

v1.2 patch 1:
- [ ] Delete the "Passions" component, write it directly inside "About Me" page.

v1.2 patch 2:
- [ ] Implement JS solution for the `100vh` issue on mobile.

v1.2 patch 3:
- [ ] Work on ContentCard images to have better display.


### NEXT

To be decided.

- [ ] **MOD:** Rework grid layout to have fixed footer and header, and scrolling main container.

Full-fledged landing page.

- [ ] **ADD:** "./landing": a page with greeting, scrolls down to a link carousel, and then to "download cv" link.

Full-fledged landing page.

- [ ] **ADD:** "./landing": a page with greeting, scrolls down to a link carousel, and then to "download cv" link.

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


## Workflow

1. Plan out the work in the Roadmap section of _README.md_. **(Always on main branch!)**
2. Switch to the development branch (`git checkout development`). Work with atomic commits.
3. When the patch is done and ready to merge, update _version-history.md_ and _README.md_. Commit again.
4. Squash commits:
   - `git checkout main`
   - `git merge --squash development`
   - `git commit -m "v#.# patch #` (replace #'s with versions)
   - `git push`
5. Update the deployment branch:
   - `git checkout netlify-deploy`
   - `git merge main`
   - `git push`

Rinse & repeat.
