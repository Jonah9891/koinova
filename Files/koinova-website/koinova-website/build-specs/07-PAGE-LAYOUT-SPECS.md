# 07-PAGE-LAYOUT-SPECS.md

Layout guidance per page. Copy comes from the content files. Use components from `06-COMPONENT-LIBRARY.md`. Always design mobile first, then enhance for tablet and desktop. All pages need both themes.

## Shared page structure
Skip link → Header → `<main>` → CTA band (most pages) → Footer. Inner pages start with the Page header component and breadcrumb.

---

## Home (`/`)
Copy: `phase-1-launch/01-home/home.md`

1. **Hero** (full viewport height, min 640px)
   - Animated blue-family gradient glow and node-network background (see animation spec), optionally with a floating collage of two or three real photos and small preview cards.
   - H1: "Where Faith Meets Innovation." Sub-headline, tagline, two buttons.
   - Subtle scroll cue. Mobile: stacked, buttons full width.
2. **About strip** — large statement text, short paragraph, link to story. Text reveals word by word on scroll.
3. **Ecosystem** — five cards. Desktop: horizontal scroll-pinned or 3 + 2 grid. Mobile: stacked or snap carousel. Each card has icon, tagline, status chip.
4. **Eight pillars** — 4 x 2 grid of tiles on desktop, 2 x 4 on tablet, single or 2-column on mobile. Staggered fade-up.
5. **Programmes and events** — event cards or an honest "launching soon" empty state with email capture.
6. **Join the community** — split section: who can join (chips) and a strong JOIN button. Optional inline mini-form (name and email) leading to the full form.
7. **Values** — horizontal marquee or chip cloud of eight values.
8. **Partners** — invitation text and button (no fake logos).
9. **Final CTA band** — gradient background, headline, three buttons.

---

## About pages
**`/about`** — overview with four large link cards (Story, Vision & Mission, Values & Faith, Leadership).
**`/about/our-story`** — Page header, then long-form sections with a sticky side title on desktop. Highlighted closing quote.
**`/about/vision-and-mission`** — Vision as oversized statement, Mission and Purpose as two cards, Promise as quote, pathway as a five-step timeline.
**`/about/values-and-faith`** — Eight value cards in a grid, philosophy as a list with large numerals, Statement of Faith as a bordered card, biblical foundation as an accordion of seven passages.
**`/about/leadership`** — built around a featured leader profile, then optional team sections.
   1. **Featured leader:** two-column layout on desktop (large portrait on the left, sticky while scrolling; name, headline and full biography on the right). On mobile the photo sits first, then name, headline and bio. Below or beside the bio: highlights panel, expertise chips, and three venture cards (NETICOX HUB LTD, FOUNDA360, NETICOX AfriNGO Network).
   2. **Leadership team:** person-card grid (3 columns desktop, 2 tablet, 1 mobile). Hidden when empty.
   3. **Advisory board:** person-card grid. Hidden when empty.
   4. **Volunteer team and contributors:** compact list. Hidden when empty.
   5. **Call to serve:** CTA band with "Express interest to serve" button.
   - Portrait style: rounded `--radius-lg`, subtle gold border accent, soft shadow, works in both themes. Photo reveals with a gentle fade and slight scale on load (reduced motion: no animation).
   - Biography text uses the reading width (about 70 characters per line) and a larger base size for comfort.
   - Add `Person` JSON-LD for the featured leader once the client confirms the details.

## Ecosystem pages
**`/ecosystem`** — five large alternating split sections, each with icon, description and link.
**Each component page** (Community, Academy, Innovation, Ventures, Global): hero with tagline, "what it offers" cards, "who it is for" chips, status block, CTA. Each has a subtle accent variation of the brand colours (same tokens, different glow angle).

## Programmes
**`/programmes`** — "Open now" cards (or hidden if empty), "Coming soon" cards, feedback survey form.
**`/programmes/events`** — event list with filter by format, calendar-style date blocks, empty-state email capture, event types grid.

## Resources
**`/resources`** — two large cards (Articles, Opportunities) and a "coming later" strip.
**`/resources/articles`** — featured article, category tabs, article grid, empty state if fewer than three articles.
**`/resources/opportunities`** — list with type filter, submission form in a side panel or modal, disclaimer.

## Get Involved
**`/get-involved`** — three large cards.
**`/get-involved/become-a-member`** — the most important page.
   - Left: headline, who can join, what to expect. Right: the sign-up form in a raised card (stacked on mobile, form first on mobile after a short intro).
   - Reduce friction: required fields minimal, optional fields grouped under "Tell us more".
   - Clear success state with confirmation, next steps and share buttons.
**`/get-involved/volunteer`** — role cards plus form.
**`/get-involved/partner-with-us`** — partner types, ways to partner, form, direct email.

## Contact and legal
**`/contact`** — form beside contact details; FAQ accordion below.
**Legal pages** — reading-width layout (720px), sticky table of contents on desktop, last-updated date, "draft" banner removed only after legal review.

## Utility pages
**`/thank-you`** — personalised by query param (member, newsletter, contact, volunteer, partner), with next steps.
**`/404`** — friendly message, buttons, small animation.

---

## Responsive rules
- 360px: single column, 16px side padding, tap targets 44px.
- 768px: two columns where appropriate.
- 1024px and up: full multi-column layouts, dropdown navigation.
- 1920px and up: content stays within the max container, backgrounds extend full width.

## Image placement
Art-directed hero and section imagery, lazy-loaded below the fold, with explicit dimensions. Provide dark and light hero variants if the artwork needs it.

## Page-level checklist
Unique H1, logical heading order, meta title and description from copy file, canonical URL, Open Graph tags, breadcrumb on inner pages, visible focus, works in both themes, works with reduced motion.

---

## Imagery, mockups and gradient family by page
Use client images first. Otherwise use stock photos and mockups as defined in `19-IMAGERY-AND-MOCKUPS-GUIDE.md`. Each page uses one gradient family. Gradient headings and CTA buttons follow `05-DESIGN-SYSTEM.md`.

| Page | Gradient family | Photography | Mockup |
|---|---|---|---|
| Home | Blue (gold CTA button) | Hero collage (optional), About photo, Join band | Join flow on a phone, platform preview strip |
| About: Story, Vision, Values | Blue | One wide photo on Story | None |
| About: Leadership | Blue | Client portraits only (no stock) | None |
| Ecosystem overview | Blue | None (icons and gradients) | None |
| Community | Blue | Group photo | Directory preview |
| Academy | Blue | Workshop or learning photo | Course card and progress |
| Innovation | Emerald | Brainstorm or prototyping photo | None |
| Ventures | Emerald | Founder photo | Venture progress board |
| Global | Blue | International team photo | Network or globe SVG |
| Programmes, Events | Blue | Event photo | Events calendar widget |
| Opportunities | Blue | Optional | Opportunities list |
| Join, Volunteer, Partner | Blue with gold button | One photo per page | Join flow on a phone (Join page) |
| Contact, Legal, 404 | Blue | None | None |

Rules: each photo is used once; never attach names or quotes to stock people; never stack more than two visual types in one section.
