# 20-QUALITY-BAR-AND-ANTI-SLOP.md

The standard for how KOINOVA looks, feels and performs. The target is the calm, confident craft of top-tier product and brand sites. Take the quality bar from them, never their layouts or assets.

## 1. Principles
1. **Restraint.** Fewer elements, better made. If it does not help the visitor understand or act, remove it.
2. **Clear hierarchy.** One main idea and one main action per screen. The eye should land on the right thing in a second.
3. **Consistency.** The same spacing, radii, shadows, button styles and motion everywhere. Tokens only.
4. **Rhythm.** Alternate dense and airy sections, light and tinted backgrounds, text-led and visual-led layouts, so the page does not feel like one repeated block.
5. **Honesty.** Real copy, real imagery, truthful previews. Nothing invented.
6. **Speed is design.** A fast site feels premium.

## 2. Layout craft
- 8px spacing grid. Use spacing tokens only.
- Consistent section padding. Generous whitespace; let content breathe.
- Align to the grid. Left-aligned text for reading; centre only short headings and CTAs.
- Do not use the same card grid for every section. Mix split layouts, large statements, timelines, tiles and mockup sections.
- Maximum reading width of about 70 characters.
- Cards: consistent padding, one radius, one border style, subtle elevation only on hover.

## 3. Typography craft
- Two families only (see design system). Clear scale: eyebrow, H1, H2, H3, body, caption.
- Tight, confident headlines (slightly negative tracking at large sizes). Comfortable body (1.65 line height).
- Use weight and size for hierarchy, not many colours. No all-caps paragraphs. Small caps and uppercase only for short eyebrows.
- Orphans and widows: use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs.
- Numerals: tabular for counters and dates.

## 4. Colour management
- Use only the official palette and its documented derived shades.
- **Light theme:** white and soft grey surfaces, navy text, blue links, one gold CTA per view, emerald for success and growth details.
- **Dark theme:** deep navy surfaces (never pure black), off-white text, lighter blue links, gold for highlights and CTA.
- Gradients follow the strict rules in `05-DESIGN-SYSTEM.md`: one colour family each, headings emphasised sparingly, gradient buttons for CTAs only, flat cards.
- Text contrast is verified in both themes. Fix tokens, not individual pages.
- Accent colours are rare: gold appears roughly once per viewport.

## 5. Components
- Buttons, inputs, chips and cards come from the component library only. No one-off styles.
- Every interactive element has hover, focus-visible, active, disabled and loading states.
- Icons come from one consistent line set. No emoji as icons.

## 6. Motion
- Follow `08-ANIMATION-AND-MOTION.md`. Motion supports meaning: reveal, guide, confirm.
- One entrance style per type of element across the site.
- No looping decoration except subtle ambient hero motion and paused-off-screen mockups.
- Everything works without animation and with reduced motion.

## 7. Imagery
- Follow `19-IMAGERY-AND-MOCKUPS-GUIDE.md`. Real photos, honest mockups, consistent treatment.

## 8. Copy quality
- Use the supplied copy. Keep it direct and specific.
- No filler openers ("Welcome to our website", "In today's fast-paced world").
- **Avoid AI-sounding words and phrases:** delve, unlock, unleash, elevate, seamless, seamlessly, leverage (as filler), revolutionise, game-changer, cutting-edge, next-level, tapestry, landscape (as filler), journey (as filler), embark, harness the power, in the realm of, it's important to note, a testament to.
- Prefer concrete verbs (build, connect, train, mentor, fund, publish).
- No fake urgency, no exaggerated claims, no unverifiable numbers.

## 9. Banned patterns (the "no AI slop" list)
**Visual**
- AI-generated images of people, places or abstract art
- Purple, pink or rainbow gradients; neon glows; mesh blobs on every section
- Gradient on every heading, every card border or every button
- Glassmorphism on everything (allowed only on header and small floating elements, with a solid fallback)
- Floating 3D shapes or random geometry with no meaning
- Repeating three-identical-cards rows as the only layout
- Heavy drop shadows, thick borders, inconsistent corner radii
- Emoji as icons or bullets
- Centre-aligned long paragraphs
- Low-contrast grey text on white or navy

**Content**
- Lorem ipsum, "John Doe", "Company Name", or placeholder numbers
- Fake testimonials, fake partner logos, fake member counts, fake ratings, fake press logos
- Stock clichés (handshakes, thumbs-up crowds, glowing brain, praying silhouettes over circuit boards)
- Generic hero lines that could belong to any organisation

**Behaviour**
- Auto-playing carousels, auto-playing sound or video
- Pop-ups on page load, newsletter modals before the visitor has read anything, live chat widgets
- Scroll-jacking that fights the user, endless parallax, horizontal scroll traps
- Cursor trails, confetti on load, bouncing elements
- Infinite looping animations that never stop

## 10. Critique loop (every page, before marking a task done)
1. Open the page in the built-in browser. Take screenshots at **360, 768, 1280 and 1920px**, in **light and dark** (8 screenshots).
2. Run the **squint test**: blur or squint. Is the hierarchy clear? Is there one main action?
3. Run the **consistency test**: do spacing, radii, shadows, buttons and type match other pages?
4. Run the **rhythm test**: does the page vary in layout and background, or does it feel like one repeated block?
5. Run the **contrast test**: text, buttons, focus rings, and gradient text, in both themes.
6. Run the **slop test**: check section 9 line by line.
7. Run the **honesty test**: any invented content? Any mockup without a "Preview" label?
8. Write a short list of at least three things that could be better. Fix them. Re-screenshot.
9. Record the result in `CHANGELOG.md`.

## 11. Speed rules (fast and clean)
- **Budgets:** initial HTML + CSS + JS under 200 KB compressed (excluding images and GSAP loaded after first paint); hero image 150 KB or less; whole home page under 1.5 MB on first load.
- **Fonts:** self-host, WOFF2, subset to Latin, two families, preload the main text and heading files, `font-display: swap`, size-adjusted fallback to avoid layout shift.
- **CSS:** critical CSS inlined; the rest loaded without blocking; no unused CSS; use `content-visibility: auto` with `contain-intrinsic-size` for below-the-fold sections.
- **JS:** ES modules with `defer`; no JS needed for first paint; GSAP and ScrollTrigger load after first paint and only on pages that use them; lightweight reveals use `IntersectionObserver`; cap canvas hero animation at 30fps on low-power devices and pause when hidden.
- **Images:** AVIF/WebP, responsive `srcset`, explicit dimensions, lazy-load except the LCP image, `fetchpriority="high"` on the LCP image.
- **Icons:** one inline SVG sprite, no icon fonts.
- **Network:** `preconnect` only to origins actually used; prefetch the likely next page (the Join page) with speculation rules where supported; long cache for hashed assets.
- **Rendering:** animate `transform` and `opacity` only; avoid layout thrash; no `will-change` except during animation.
- **Respect user settings:** `prefers-reduced-motion`, `prefers-reduced-data` (skip heavy imagery and canvas), `prefers-color-scheme`.
- **Measure:** Lighthouse mobile 90+ in every category on Home, Join and one inner page, re-run after each major change.

## 12. Per-page checklist
- [ ] One clear H1 and one main action
- [ ] Gradients obey the family and usage rules
- [ ] Real images (or labelled mockups) that fit the section
- [ ] Motion subtle, purposeful and reduced-motion safe
- [ ] Looks equally polished in light and dark
- [ ] No banned patterns
- [ ] Copy matches content files and sounds human
- [ ] Fast: no layout shift, no oversized images
- [ ] Critique loop completed and recorded
