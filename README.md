# GM Ware House — Warehouse Space Website (15 Practicums)

GM Ware House is a customer-facing warehouse space website for businesses looking to lease or purchase warehouse property and related storage services. It now uses multiple focused pages instead of a single long page: Home, Spaces, Services, Facilities, Inventory, Enquire and Operations (introduced to navigation with the API stage). The design uses an edge-to-edge layout, a bold warehouse-photo hero, burnt orange, cobalt blue, lime and charcoal. The navigation is never sticky. A small sticky availability note appears only in the Facilities content from Practicum 06 to demonstrate the required CSS positioning property.

## Run instructions
Each `Practicum_01` through `Practicum_15` is an independent website. Open its `index.html` in a modern browser. For localStorage and API use, serve the project root: `python3 -m http.server 8000`, then browse to `http://localhost:8000/Practicum_15/`. Navigate among pages using the site menu. Practicum 01–15 each include complete HTML page files and their own stylesheet, assets and JavaScript when introduced. No framework or package install is required. Internet is needed for the Pexels video and map embed. Images and narration audio are included locally.

## Page map
- `index.html`: customer-focused hero and main calls to action.
- `spaces.html`: example units for lease or sale and comparison table.
- `services.html`: storage, fulfilment and logistics services; Practicum 14 adds search, filters and FAQs.
- `facilities.html`: features, positioning examples, gallery and media tour as stages introduce them.
- `inventory.html`: sample property-space availability and later planning notes.
- `contact.html`: warehouse enquiry and viewing form.
- `operations.html`: warehouse planning utilities; later stages add weather and a CRUD task board.

## Practicum progression

01. Semantic multi-page website foundation for GM Ware House warehouse sales and leasing.
02. Adds real warehouse photos, an appropriate forklift-operations video, spoken warehouse tour audio, captions and facility map.
03. Adds an HTML5 enquiry form with the requested field types and native validation.
04. Applies the distinctive orange, cobalt and charcoal visual design with edge-to-edge sections.
05. Adds responsive Flexbox navigation without sticky menu behavior.
06. Demonstrates static, relative, absolute, fixed and sticky positioning inside facility content; the navigation is never sticky.
07. Adds a CSS Grid facility image gallery.
08. Adds tablet and mobile media queries, fluid images and accessible table scrolling.
09. Adds a user-triggered animated leasing availability notification.
10. Adds customer space-planning notes using live DOM methods.
11. Adds advanced enquiry validation with inline errors and success feedback.
12. Adds live Open-Meteo forecast JSON to support logistics planning.
13. Adds a warehouse operations task CRUD board backed by Local Storage.
14. Adds service search/category filtering and relevant FAQ accordions.
15. Adds a persistent compact-layout preference with a custom checkbox toggle.

## Implementation notes
- Listing figures and availability are sample content for a student demonstration; no real estate inventory backend is connected.
- The enquiry form does not submit to a server. The PIN field is included only to meet the practicum input-type exercise. Do not enter a real password or sensitive data.
- The live weather panel in Practicum 12+ calls Open-Meteo for a Chicago-area forecast as a logistics planning aid; it is not an inventory feed.
- Practicum 13+ task data and Practicum 15 compact preference are stored locally in the browser.
- The warehouse video is deliberately displayed at a moderate maximum width (800 px) so it supports the page without dominating it. It is a forklift-in-warehouse clip by Paul Cruz, sourced from [Pexels](https://www.pexels.com/video/a-man-operating-a-forklift-4477603/); the source page indicates a free license. The audio is a generated short GM Ware House tour introduction. Image files were collected from warehouse-themed image search results and copied to each practicum's assets folder.
- Responsive styles are added at Practicum 08. Before that stage, media queries are intentionally absent to keep the staged learning progression clear.

## Checklist
- [x] Semantic, multi-page information architecture.
- [x] Relevant warehouse photos, forklift video, spoken tour audio and location map.
- [x] Enquiry form with text, email, password, number, date, radio, checkbox, select, textarea, file, submit and reset controls.
- [x] Bold hero, full-width layout, familiar navigation without sticky-nav behavior.
- [x] Flexbox navigation, visible positioning examples, Grid gallery and responsive media queries.
- [x] Animated notification and dynamic customer planning notes.
- [x] Advanced validation, API weather JSON, persistent CRUD tasks, service filtering and FAQ, custom persistent compact-view toggle.

