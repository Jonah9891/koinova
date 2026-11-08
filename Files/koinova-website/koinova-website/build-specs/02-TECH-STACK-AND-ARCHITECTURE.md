# 02-TECH-STACK-AND-ARCHITECTURE.md

## 1. Stack
| Layer | Choice | Reason |
|---|---|---|
| Markup | HTML5 | Simple, fast, SEO-friendly |
| Styles | CSS3 with custom properties, modern CSS (grid, flexbox, clamp, `:has`, container queries where supported) | No framework needed; supports dark and light theming cleanly |
| Scripts | Vanilla JavaScript (ES modules) | Required by the project |
| Animation | GSAP + ScrollTrigger (pinned version), optional Lenis | Powerful, reliable scroll animation |
| Build | One small Node script (`scripts/build.js`) | Injects shared header/footer partials into every HTML page, generates sitemap |
| Hosting | Vercel | As requested |
| Backend | Vercel serverless functions in `/api` (Node) | Handles form submissions securely |
| Database and auth | Supabase (Postgres, Row Level Security, Auth later) | Free tier, ready for Phase B login |
| Email | Resend (or alternative) | Welcome and notification emails |
| Spam protection | Cloudflare Turnstile or hCaptcha, plus honeypot field and rate limiting | Protects forms |
| Analytics | Plausible or Google Analytics 4 (with consent) | Decide later |

> Why a tiny build script: copy-pasting the header and footer into 30+ pages is error-prone, and loading them with JavaScript hurts SEO and flickers. The script assembles static HTML at build time and keeps the output framework-free.

## 2. Folder structure
```
koinova-website/
├── AGENT-RULES.md
├── build-specs/                 (these spec files)
├── content/                     (copy and data)
│   ├── pages/                   (copy from phase folders, as needed)
│   ├── articles/                (one .md or .json per article)
│   ├── events/                  (one .json per event)
│   └── opportunities/           (one .json per opportunity)
├── src/
│   ├── pages/                   (HTML pages, mirrors route structure)
│   │   ├── index.html
│   │   ├── about/
│   │   ├── ecosystem/
│   │   ├── programmes/
│   │   ├── resources/
│   │   ├── get-involved/
│   │   └── ...
│   ├── partials/                (header.html, footer.html, head.html, cta.html)
│   ├── css/
│   │   ├── tokens.css           (design tokens, light and dark)
│   │   ├── base.css             (reset, typography)
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── animations.css
│   │   └── pages/               (page-specific styles only if needed)
│   ├── js/
│   │   ├── main.js              (entry)
│   │   ├── theme.js             (theme switch)
│   │   ├── nav.js
│   │   ├── animations.js        (GSAP setup)
│   │   ├── forms.js             (validation, submit)
│   │   └── utils.js
│   └── assets/
│       ├── brand/               (logo files)
│       ├── img/
│       ├── icons/               (SVG sprite)
│       └── fonts/
├── api/                         (Vercel serverless functions)
│   ├── join.js
│   ├── newsletter.js
│   ├── contact.js
│   ├── volunteer.js
│   ├── partner.js
│   ├── interest.js
│   ├── submit-opportunity.js
│   └── _lib/                    (validation, supabase client, email, ratelimit)
├── scripts/build.js
├── supabase/
│   ├── schema.sql
│   └── policies.sql
├── dist/                        (build output, git-ignored)
├── vercel.json
├── package.json
├── .env.example
├── .gitignore
├── DECISIONS.md
├── OPEN-QUESTIONS.md
└── CHANGELOG.md
```

## 3. Architecture
```
Browser ── static HTML/CSS/JS (Vercel CDN)
   │
   └── fetch POST /api/* ──► Vercel serverless function
                               ├── validate + sanitise
                               ├── verify spam token
                               ├── rate limit
                               ├── write to Supabase (service role key, server only)
                               └── send email (Resend)
```
- The browser never holds the Supabase service-role key.
- Phase B adds Supabase Auth on the client using the public anon key with strict Row Level Security.

## 4. Theme architecture
- Tokens defined in `tokens.css` under `:root` (light) and `[data-theme="dark"]`.
- A tiny inline script in `<head>` sets `data-theme` before first paint to avoid a flash.
- `theme.js` handles the switch, `localStorage` (`koinova-theme`) and system-preference changes.
- Images and logo swap per theme (use `<picture>` with `prefers-color-scheme` only as fallback; the explicit switch controls final state).

## 5. Environment variables
```
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=      (server only)
RESEND_API_KEY=                 (server only)
TURNSTILE_SECRET_KEY=           (server only)
TURNSTILE_SITE_KEY=             (public)
NOTIFY_EMAIL=                   (admin notifications)
SITE_URL=
```
Provide `.env.example` with empty values only. Never commit real values.

## 6. Vercel config
- Build command: `npm run build`. Output directory: `dist`.
- Clean URLs on, trailing slash consistent.
- Security headers: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS.
- Cache static assets long-term with hashed filenames; HTML short.
- Custom 404 page.

## 7. Dependencies (keep minimal)
- `gsap` (core + ScrollTrigger), optionally `lenis`
- `@supabase/supabase-js` (server)
- `resend` (server)
- Dev: `prettier`, `eslint`, `html-validate` or similar, `sharp` (image optimisation)

## 8. Coding standards
- BEM-style class names, or a consistent utility-light scheme. Pick one and stay consistent.
- Mobile-first media queries. Use `clamp()` for fluid type and spacing.
- One responsibility per JS module. No globals.
- Comment the "why", not the "what".
- No inline styles except the theme bootstrap script.

## 9. Hand-off to Phase B
Design the database now (see `10-DATA-MODEL-AND-API.md`) so adding login, profiles and a directory means adding pages and policies, not migrating data.
