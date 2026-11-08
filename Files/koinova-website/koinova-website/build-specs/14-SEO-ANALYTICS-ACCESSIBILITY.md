# 14-SEO-ANALYTICS-ACCESSIBILITY.md

## 1. SEO fundamentals
- Unique `<title>` (under 60 chars) and `<meta name="description">` (under 160 chars) per page, taken from the front matter of each copy file.
- One `<h1>` per page. Logical heading order.
- Canonical URL on every page. Clean URLs. Consistent trailing slash policy.
- `sitemap.xml` (generated) and `robots.txt` (allow all public pages; disallow `/api/` and `/admin`).
- Open Graph and Twitter card tags, with a branded 1200x630 share image per section.
- Hidden Phase B and C routes: `noindex` and excluded from the sitemap until live.
- Internal linking: ecosystem pages link to the join page and each other.
- Descriptive link text (no "click here").
- Image `alt` text, descriptive file names, WebP/AVIF.

## 2. Structured data (JSON-LD)
- `Organization` (name, url, logo, sameAs social links, description).
- `WebSite` with `SearchAction` only if search exists.
- `BreadcrumbList` on inner pages.
- `Article` for articles, `Event` for events, `FAQPage` for the contact FAQ.

## 3. Performance (also helps SEO)
- Core Web Vitals targets: LCP under 2.5s, INP under 200ms, CLS under 0.1.
- Preload hero font and LCP image. Self-host fonts, subset, `font-display: swap`.
- Inline critical CSS for above-the-fold, defer the rest.
- Load JS as modules with `defer`. Load GSAP only on pages that animate. Load Turnstile only on pages with forms.
- Responsive images (`srcset`, `sizes`), explicit width and height.
- Compress with Brotli (Vercel default). Long cache for hashed assets.

## 4. Accessibility (WCAG 2.2 AA)
**Structure:** landmarks (`header`, `nav`, `main`, `footer`), skip link, language attribute (`lang="en"`).
**Keyboard:** all functionality operable, logical tab order, no keyboard traps, visible focus on every control, Escape closes menus and modals.
**Screen readers:** meaningful `aria-label`s, `aria-expanded` on toggles, `aria-live` for form messages, decorative SVGs `aria-hidden="true"`.
**Colour and contrast:** 4.5:1 text, 3:1 UI and large text, in both themes.
**Motion:** `prefers-reduced-motion` honoured; no flashing content.
**Forms:** visible labels, error identification and suggestions, `autocomplete`, clear required indication.
**Targets:** 44px minimum touch targets.
**Zoom and reflow:** usable at 200% zoom and 320px width without horizontal scrolling.
**Theme switch:** accessible name and state, works by keyboard, announces change.

## 5. Analytics and consent
- Cookie banner: consent for analytics or marketing cookies only. Essential cookies need no consent.
- Prefer cookieless analytics (Plausible) to simplify compliance.
- Track events listed in `12-FORMS-AND-INTEGRATIONS.md`.
- Review dashboards monthly: sign-up conversion, top pages, country mix, form drop-off.

## 6. Testing tools
Lighthouse, axe DevTools, WAVE, keyboard-only walkthrough, screen reader spot check (VoiceOver and NVDA), Google Rich Results test, PageSpeed Insights.
