# 21-PROMPT-LIBRARY.md

Ready-to-paste prompts for Antigravity. Paste one at a time. Start every new conversation with Prompt 1 so the agent loads the rules first.

---

## Prompt 1 — Start or resume a session
```
Read AGENT-RULES.md fully, then build-specs/16-BUILD-PLAN-AND-TASKS.md. Also read 05-DESIGN-SYSTEM.md, 19-IMAGERY-AND-MOCKUPS-GUIDE.md and 20-QUALITY-BAR-AND-ANTI-SLOP.md. Tell me in five bullet points how you will follow them. Then continue with the next unfinished task. Follow the autonomy and hard-stop rules exactly.
```

## Prompt 2 — Source real photography
```
Follow 19-IMAGERY-AND-MOCKUPS-GUIDE.md. Using the built-in browser, find and download real photographs of real people (not AI-generated) from Unsplash or Pexels for every section listed in the guide, unless I have supplied an image in src/assets/img/. Show a balanced mix of Black African and white people across the site, in professional technology and entrepreneurship settings. Check each site's licence page, record every image in src/assets/img/CREDITS.md, optimise to AVIF, WebP and JPG at the sizes in the guide, and write alt text. Do not repeat any photo. Do not attach names, quotes or titles to stock people. If you cannot download an image, add it to IMAGE-TODO.md with search terms and use a gradient placeholder. Report what you used and where.
```

## Prompt 3 — Build the mockups
```
Build the code-based UI mockups listed in 19-IMAGERY-AND-MOCKUPS-GUIDE.md section 7 in HTML, CSS and SVG. Each must carry a "Preview" chip, use initials avatars and no invented data, follow the active theme, sit on the correct gradient-family backdrop, and be wrapped in aria-hidden with real text alongside. Add the entrance and in-screen animations from 08-ANIMATION-AND-MOTION.md section 11, paused when off-screen and under reduced motion. Keep each under 15 KB. Show me screenshots in light and dark.
```

## Prompt 4 — Build a page (template)
```
Build the page [PAGE NAME] at route [ROUTE]. Use the copy in [COPY FILE PATH] without rewriting it. Use the layout in 07-PAGE-LAYOUT-SPECS.md, components from 06-COMPONENT-LIBRARY.md, tokens only, and the gradient family rules for this section. Add the images and mockups assigned to this page in 19-IMAGERY-AND-MOCKUPS-GUIDE.md. Add the animations from 08-ANIMATION-AND-MOTION.md. Then run the critique loop in 20-QUALITY-BAR-AND-ANTI-SLOP.md section 10 and fix what you find. Finish with the task report.
```

## Prompt 5 — Design polish pass
```
Do a design polish pass on the whole site. Open every page in the built-in browser and take screenshots at 360, 768, 1280 and 1920px in light and dark. For each page list what looks generic, unbalanced, cramped, inconsistent or off-brand. Check spacing rhythm, hierarchy, alignment, contrast, gradient family rules, image quality and animation. Fix the issues you find, keeping tokens and components as the only source of styling. Re-screenshot and show me before and after for the three biggest improvements.
```

## Prompt 6 — Anti-slop audit
```
Audit the entire project against section 9 (banned patterns) and section 8 (copy quality) of 20-QUALITY-BAR-AND-ANTI-SLOP.md. List every violation with file and line. Fix them all. Confirm there are no AI-generated images, no invented statistics, partners, testimonials or member counts, no unlabeled mockups, no filler or AI-sounding phrases, no emoji icons, and no gradients outside the approved families. Give me a pass or fail summary.
```

## Prompt 7 — Dark and light mode QA
```
Test every page in light mode and dark mode, including the theme switch on desktop and mobile. Confirm no flash of wrong theme on load, the choice persists, system preference is respected on first visit, logos swap correctly, images and shadows look right, gradient text meets contrast, and every text and button pair passes WCAG AA. Fix tokens rather than individual components. Report any pair that needed a change.
```

## Prompt 8 — Performance pass
```
Run the performance pass using section 11 of 20-QUALITY-BAR-AND-ANTI-SLOP.md. Measure Lighthouse mobile on Home, Join and one inner page. Check image weights, font loading, layout shift, JS size and animation frame rate with CPU throttled 4x. Fix anything below 90 or outside budget. Report before and after numbers.
```

## Prompt 9 — Animation pass
```
Implement and tune the animations in 08-ANIMATION-AND-MOTION.md, including the text animation library (section 10) and image and mockup motion (section 11). Keep one effect per element, use transform and opacity only, make everything work without JavaScript and with prefers-reduced-motion, and pause ambient motion off-screen. Remove anything that feels busy. Record a short list of the effects you used per page.
```

## Prompt 10 — Accessibility pass
```
Run axe and Lighthouse accessibility on every page in both themes. Walk every user journey by keyboard only. Check focus order and focus visibility, form labels and errors, aria-live messages, heading order, alt text, contrast and reduced-motion behaviour. Fix every critical and serious issue and report the rest.
```

## Prompt 11 — Copy fidelity check
```
Compare every page's text with the copy files in phase-1-launch/. List any differences, invented text or missing sections. List every unfilled [PLACEHOLDER] still visible to visitors. Do not invent replacements. Add them to OPEN-QUESTIONS.md and hide any section that depends on missing content.
```

## Prompt 12 — "It feels generic" fix
```
This section feels generic: [SECTION OR PAGE]. Do not add more effects. Instead: tighten the hierarchy, vary the layout from neighbouring sections, improve spacing and type scale, use a better-suited real photo or a labelled mockup, keep gradients to the section's single family, and make the main action clearer. Show before and after screenshots in light and dark.
```

## Prompt 13 — Pre-launch review
```
Run the full checklist in 17-QA-AND-DEPLOYMENT.md on the preview build. Add the per-page checklist in 20-QUALITY-BAR-AND-ANTI-SLOP.md section 12. Produce a pass or fail table with notes. Do not deploy to production. Wait for my approval.
```

## Prompt 14 — Hand-off summary
```
Write HANDOFF.md: what was built, how to edit content, how to add images, events, articles and opportunities, how to run and build locally, environment variables needed (names only), open questions, and the Phase B and C task list. Keep it clear for a non-developer.
```
