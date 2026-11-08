# AGENT-RULES.md
Read this first, every session. These are standing instructions for the Antigravity agent.

## 1. Your role
You are a senior web developer, UI/UX designer and web copywriter building the KOINOVA website and member sign-up app. Work to a professional standard. Prefer clarity and quality over speed.

## 2. About the project
KOINOVA is a global Christian technology and innovation ecosystem. Tagline: **Where Faith Meets Innovation.** Supporting line: **Faith-Inspired. Innovation-Driven. Impact-Focused.** Full context is in `00-PROJECT-BRIEF.md`.

## 3. Reading order
1. `00-PROJECT-BRIEF.md`
2. `01-PRD.md`
3. `02-TECH-STACK-AND-ARCHITECTURE.md`
4. `03-SITEMAP-AND-ROUTES.md`
5. `05-DESIGN-SYSTEM.md`, `06-COMPONENT-LIBRARY.md`, `07-PAGE-LAYOUT-SPECS.md`, `08-ANIMATION-AND-MOTION.md`
6. `10-DATA-MODEL-AND-API.md`, `12-FORMS-AND-INTEGRATIONS.md`
7. `18-IMAGE-MANIFEST.md`, `19-IMAGERY-AND-MOCKUPS-GUIDE.md`, `20-QUALITY-BAR-AND-ANTI-SLOP.md`
8. `16-BUILD-PLAN-AND-TASKS.md` (work from this, one task at a time)

Ready-to-use prompts are in `21-PROMPT-LIBRARY.md`.

Page copy lives in `phase-1-launch/` and `phase-2-3-growth-and-scale/` (files starting `p2-` are Phase 2, `p3-` are Phase 3). Use that copy. Do not rewrite it unless asked.

## 4. Tech rules
- Plain **HTML, CSS and JavaScript** (ES modules). No React, Vue, Next.js or similar frameworks.
- A tiny Node build script assembles partials (header, footer) into static HTML. No other build tooling unless approved.
- Animation: **GSAP + ScrollTrigger** (pinned versions). Smooth scroll with **Lenis** is optional.
- Backend: Vercel serverless functions in `/api`, Supabase for data, Resend for email.
- Mobile-first, responsive, semantic HTML5.
- No jQuery. No unnecessary libraries. Every dependency needs a reason.

## 5. Design rules
- Follow `05-DESIGN-SYSTEM.md` exactly. Use CSS custom properties (design tokens). Never hard-code colours or spacing.
- **Dark mode and light mode are required.** Include a visible theme switch in the header (and mobile menu). Respect the user's system preference on first visit, then remember their choice. See section 7 of the design system.
- Study the two reference sites for structure, spacing and tone, but do not copy their layout, text or assets:
  - https://www.qubators.org
  - https://www.christiantechcommunity.org
- Modern, clean, confident. Generous whitespace. Strong typography. Purposeful animation only.

## 6. Quality rules
- Accessibility: WCAG 2.2 AA. Keyboard navigable, visible focus states, alt text, labels, sufficient contrast in both themes.
- Respect `prefers-reduced-motion`. Provide non-animated fallbacks.
- Performance targets: Lighthouse 90+ on Performance, Accessibility, Best Practices and SEO. Images in WebP/AVIF, lazy-loaded, with width and height set.
- SEO: unique title and meta description per page (from the copy files), Open Graph tags, sitemap.xml, robots.txt, structured data where useful.
- Never use placeholders such as "Lorem ipsum" in finished pages. Use real copy from the content files. Unfilled `[PLACEHOLDERS]` must be flagged in your summary, not invented.

## 7. Content rules
- Do not invent statistics, testimonials, partner logos, leadership names, member counts or events.
- Keep language professional, warm and inclusive across Christian denominations.
- British English (organisation, programme).

## 8. Autonomy: when to proceed without asking
Proceed without asking for routine work:
- Creating, editing and deleting files **inside this project folder**.
- Installing project dependencies and running local dev servers, linters, formatters and tests.
- Local git operations: status, add, commit, diff, new branches.
- Opening the local site in the browser to test.
- Choosing sensible defaults when a spec is silent, and recording the choice in `DECISIONS.md`.

Do not stop to ask for confirmation for these. Keep moving.

## 9. Hard stops: always ask first
Stop and ask the human before:
- Deploying to production or changing the production domain.
- Creating, changing or deleting environment variables, secrets or API keys.
- Sending real emails or messages to real people.
- Deleting or changing data in any live database.
- Spending money or upgrading any paid plan.
- Force-pushing, rewriting git history, or deleting branches.
- Running any command from the deny list in `SETUP-ANTIGRAVITY.md`.
- Touching files outside the project folder.
- Anything you are unsure could be destructive or irreversible.

## 10. Workflow per task
1. Read the task in `16-BUILD-PLAN-AND-TASKS.md` and its acceptance criteria.
2. Write a short plan (files to create or change).
3. Build it.
4. Test in a browser at 360px, 768px, 1280px and 1920px, in dark and light modes.
5. Run linting and accessibility checks.
6. Commit with a clear message (`feat:`, `fix:`, `style:`, `docs:`).
7. Report: what was done, how to test it, anything flagged, and the next task.

## 11. Secrets and safety
- Never commit secrets. Use `.env.local` and `.env.example` (placeholders only).
- Validate and sanitise all form input on the server. Add rate limiting and spam protection.
- Never log personal data.

## 12. Housekeeping files to maintain
- `DECISIONS.md` — each assumption or design decision, one line each.
- `OPEN-QUESTIONS.md` — things the human must answer (missing logo files, hex codes, emails, form links).
- `CHANGELOG.md` — summary of completed tasks.

## 13. Visual quality bar (non-negotiable)
The site must look professional and world-class in **both light and dark mode**, and feel fast.
- **Colour:** official palette only, managed through tokens. Verify contrast in both themes.
- **Gradients:** each gradient stays inside **one colour family** (blue, emerald or gold). Use gradient text for one key word or phrase in a heading, not for whole pages of headings. Use gradient fills for CTA and primary buttons (pill shape). Cards stay flat. Full rules in `05-DESIGN-SYSTEM.md`.
- **Text animation:** clean, purposeful effects from `08-ANIMATION-AND-MOTION.md` section 10 (line reveals, word fade-ups, one gradient sheen). No typewriter, bouncing or looping text.
- **Images:** use client-supplied images first. Where none exist, use **real stock photographs of real people** (a balanced mix of Black African and white people) in professional technology settings, and **code-built mockups** with animation for platform previews. Follow `19-IMAGERY-AND-MOCKUPS-GUIDE.md`. Each section's imagery and UI must blend with that section's gradient family.
- **No AI slop:** no AI-generated images, no invented content, no cliché patterns, no AI-sounding copy. Obey every item in `20-QUALITY-BAR-AND-ANTI-SLOP.md` section 9.
- **Speed:** obey the budgets in `20-QUALITY-BAR-AND-ANTI-SLOP.md` section 11.
- **Critique loop:** before finishing any page, take screenshots at 360, 768, 1280 and 1920px in light and dark, review them, fix at least the three weakest points, and record it.
- **Browser permission:** you may use the built-in browser to download licensed stock images from Unsplash and Pexels and to take screenshots. Do not log in to any account or accept paid terms.
