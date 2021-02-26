# Description of Changes

Please provide a short summary of the changes introduced by this pull request and reference the GitHub issue # (if applicable). Examples with potential change categories are listed below. Please change the item content as needed.

1. BUGFIX - Example bugfix description (#Issue_ID_Here)
2. IMPROVEMENT - Example improvement description (#Issue_ID_Here)
3. MAINTENANCE - Example maintenance description (#Issue_ID_Here)
4. FEATURE - Example feature description (#Issue_ID_Here)
5. REFACTORING - Example refactoring description (#Issue_ID_Here)

# Accessibility Checklist:

The following are general checks to ensure that new content/functionality added to the All Purpose website is accessible. The new content could be a component, content section, etc. Refer to the developer checklist in Notion for more comprehensive testing. If any of the below checks are not applicable to the work, add `[N/A]` next to the check item.

- [ ] All text against background meets WCAG 2.1 Level AA colour contrast requirements: minimum 4.5:1 for small text (below 18pt regular or 14pt bold) and 3:1 for larger text
- [ ] Colour is not the only method used to convey information in the design
- [ ] Link and button text is discernable from the surrounding text
- [ ] Informative images added to Prismic have the appropriate `alt` text
- [ ] Captions have been created and uploaded to Vimeo multimedia
- [ ] Embedded video iframe code added to Prismic has a `title` attribute and value describing the content
- [ ] Multimedia has a text transcript created and added in Prismic
- [ ] All controls, links be accessed by keyboard only
- [ ] The tabbing order makes sense
- [ ] Keyboard focus is not lost or trapped as you tab through the page
- [ ] Link/button text can be read out of context
- [ ] Content is hidden so it does not exclude particular users
- [ ] All `id` attribute values on a page are unique
- [ ] Icon-only buttons/links have an associated text label
- [ ] Custom components such as tab panels, collapsible panels have the appropriate markup pattern and expected keyboard functionality
- [ ] New pages have a page title (i.e. `<title>`)
- [ ] Content section titles are marked up with the appropriate headings levels
- [ ] All content resizes proportionally when the page is zoomed in/magnified
- [ ] There are no console errors from `eslint-plugin-jsx-a11y`
- [ ] Running browser accessibility checkers (e.g Axe, IBM Equal Access Accessibility Checker, Lighthouse) does not produce errors on pages where changes were made 

# Pre-deployment Checklist:

- [ ] A self-review of the code was performed
- [ ] Code has comments, particularly in hard-to-understand areas
- [ ] Development code (e.g. `console.log`s, commented out areas not required for production) have been removed
- [ ] There are no console errors when running `gatsby develop`
- [ ] The changes have been tested across different browsers and mobile devices
- [ ] Running `gatsby build` leads to successful build with no errors