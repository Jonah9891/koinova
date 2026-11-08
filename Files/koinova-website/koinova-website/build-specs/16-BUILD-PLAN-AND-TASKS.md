# 16-BUILD-PLAN-AND-TASKS.md

Work through tasks in order, one at a time. Follow the workflow in `AGENT-RULES.md` section 10. Each task ends with a short report and a commit. Stop at tasks marked **HUMAN** and wait for approval.

Legend: **Done when** = acceptance criteria.

---

## Phase A — Launch build

### Task 1 — Project scaffold
Create the folder structure from `02-TECH-STACK-AND-ARCHITECTURE.md`, `package.json`, `scripts/build.js` (partials injection, copies assets to `dist/`), `vercel.json`, `.gitignore`, `.env.example`, `DECISIONS.md`, `OPEN-QUESTIONS.md`, `CHANGELOG.md`, ESLint and Prettier config, `npm run dev` (local server with watch) and `npm run build`.
**Done when:** `npm run build` outputs a working `dist/` with a placeholder home page; `npm run dev` serves it locally.

### Task 2 — Design tokens, base styles and theme
Implement `tokens.css` (light and dark), `base.css` (reset, typography, fluid scale), `layout.css` (container, grid, section spacing). Add the inline theme bootstrap script in the head partial and `theme.js` with the switch logic.
**Done when:** toggling `data-theme` changes every colour; no flash on reload; the choice persists; system preference is respected on first visit.

### Task 3 — Brand assets
Add logo files (or flagged placeholders), favicon set, social share image, self-hosted fonts. Check every item in `18-IMAGE-MANIFEST.md` and log missing items in `OPEN-QUESTIONS.md`.
**Done when:** logo displays correctly in both themes; favicons and fonts load.

### Task 4 — Global partials: header, footer, mobile menu, cookie banner
Build per `06-COMPONENT-LIBRARY.md` and navigation from `phase-1-launch/00-global/navigation-and-footer.md`. Include the theme switch, skip link and JOIN KOINOVA button.
**Done when:** desktop dropdowns and mobile menu work with mouse, touch and keyboard; focus trap and Escape close behave; theme switch works in both places.

### Task 5 — Component library and style guide
Build components in `components.css` and an internal `_styleguide.html` showing every component in both themes.
**Done when:** every component in the library has default, hover, focus, disabled and (where relevant) loading and error states.

### Task 5A — Imagery sourcing
Follow `19-IMAGERY-AND-MOCKUPS-GUIDE.md`: use client images first; source licensed real-people stock photos (balanced mix of Black African and white people) for the remaining slots; optimise, add alt text, record licences in `CREDITS.md`, log gaps in `IMAGE-TODO.md`.
**Done when:** every image slot has a client image, a licensed stock photo or a labelled placeholder; no repeats; no AI-generated images; `CREDITS.md` complete.

### Task 5B — UI mockups
Build the code-based mockups listed in the guide, with "Preview" labels, theme-aware screens and no invented data.
**Done when:** each mockup renders in light and dark, is under 15 KB, is `aria-hidden`, and has real text beside it.

### Task 6 — Home page (static, no animation yet)
Build all nine sections from `home.md` per `07-PAGE-LAYOUT-SPECS.md`.
**Done when:** all copy is present; layout is correct at 360, 768, 1280 and 1920px in both themes; Lighthouse accessibility 95+.

### Task 7 — About pages
`/about`, Our Story, Vision & Mission, Values & Faith, Leadership.
**Done when:** copy matches the files; legal and scripture accordion accessible; leadership fallback works.

### Task 8 — Ecosystem pages
Overview plus five component pages.
**Done when:** each page has hero, offer cards, audience chips, status chip and CTA.

### Task 9 — Programmes, events, resources and opportunities
Pages driven by `content/` files with honest empty states. Build step generates listings.
**Done when:** with empty content the empty states show; adding a sample JSON file in `content/events/` makes it appear after rebuild (remove the sample afterwards).

### Task 10 — Get Involved pages and form front-end
Membership, volunteer and partner pages with forms, inline validation, loading and success states, honeypot, Turnstile placeholder.
**Done when:** forms validate correctly, are keyboard accessible, show errors with `aria-live`, and work as plain POST with JavaScript disabled (mock endpoint acceptable at this stage).

### Task 11 — Backend: Supabase and API functions
Write `supabase/schema.sql` and policies, `/api/*` functions with shared validation, rate limit, Turnstile check, Supabase insert and Resend email. Use test credentials only.
**Done when:** each endpoint returns the standard responses; duplicates handled; RLS blocks direct browser access; emails render correctly in a test inbox.
**HUMAN:** create Supabase, Resend and Turnstile accounts and add keys to Vercel environment variables. Agent must not create or change production secrets.

### Task 12 — Contact, legal, thank-you and 404 pages
**Done when:** legal pages use the draft copy with the draft banner visible; thank-you page varies by `type`; 404 has buttons.

### Task 13 — Animations
Implement `08-ANIMATION-AND-MOTION.md`: hero, scroll reveals, interactions, theme-switch animation, form micro-moments, with reduced-motion fallbacks.
**Done when:** 60fps on a throttled mid-range profile; reduced motion shows fades only; content readable with JavaScript disabled.

### Task 13A — Design critique and polish pass
Run Prompts 5 and 6 from `21-PROMPT-LIBRARY.md`: screenshot every page at four widths in both themes, critique against `20-QUALITY-BAR-AND-ANTI-SLOP.md`, fix issues, audit banned patterns and copy quality.
**Done when:** every page passes the per-page checklist in section 12 of the quality bar, and gradients obey the one-family rule everywhere.

### Task 14 — SEO, structured data and analytics
Meta tags, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`, analytics events with consent.
**Done when:** every page has unique title and description; sitemap lists only live pages; Rich Results test passes for Organization and FAQ.

### Task 15 — Accessibility pass
Run axe and Lighthouse; fix issues; complete keyboard and screen reader walkthrough in both themes.
**Done when:** zero critical axe issues; all journeys completable by keyboard only; contrast verified for all token pairs.

### Task 16 — Performance pass
Optimise images, fonts, CSS and JS; defer scripts; lazy-load.
**Done when:** Lighthouse mobile 90+ across categories; LCP, INP and CLS meet targets.

### Task 17 — Security hardening
Headers, CSP, dependency audit, input fuzz tests on forms, rate limit tests.
**Done when:** checklist in `15-SECURITY-PRIVACY-PERFORMANCE.md` is complete.

### Task 18 — QA and preview deployment
Run `17-QA-AND-DEPLOYMENT.md` checklist on a Vercel **preview** URL.
**HUMAN:** review preview, approve or list changes.

### Task 19 — Production launch
Connect domain, set production environment variables, deploy.
**HUMAN:** only the human triggers production deployment and approves DNS changes.

---

## Phase B — Growth tasks (after launch)
- B1 Publish Phase 2 pages from `phase-2-3-growth-and-scale/` (`p2-` files). Check each file's `publish_when` line first.
- B2 Supabase Auth with magic link; login page; session handling.
- B3 Member profile page and edit form; link existing `members` rows by email.
- B4 Member directory with opt-in visibility, filters and introduction requests.
- B5 Opportunities hub from database with filters.
- B6 Mentor and mentee sign-up and admin matching.
- B7 Admin interface (if not already built).

## Phase C — Scale tasks
- C0 Publish Phase 3 pages from `phase-2-3-growth-and-scale/` (`p3-` files), one at a time, checking each `publish_when` line.
- C1 Member dashboard.
- C2 Chapters pages and coordinator roles.
- C3 Institutional partner portal.
- C4 Fellowships, conferences, resource library, news feed.
- C5 Pillar pages and sub-brand sections.

---

## Definition of done (every task)
- Works at 360, 768, 1280 and 1920px in light and dark modes.
- Passes the critique loop and the banned-pattern check in `20-QUALITY-BAR-AND-ANTI-SLOP.md`.
- Keyboard accessible, visible focus, no console errors.
- Copy matches the content files; no invented content.
- Lint passes; build passes.
- `CHANGELOG.md` updated; open questions logged.
- Committed with a clear message.
