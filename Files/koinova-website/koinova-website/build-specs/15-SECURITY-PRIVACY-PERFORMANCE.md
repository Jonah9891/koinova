# 15-SECURITY-PRIVACY-PERFORMANCE.md

## 1. Security checklist
- HTTPS everywhere (Vercel default) and HSTS.
- Security headers via `vercel.json`: Content-Security-Policy (restrict scripts to self, GSAP source if from CDN, Turnstile and analytics), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (disable camera, microphone, geolocation), `X-Frame-Options: DENY` (or `frame-ancestors 'none'`).
- Pin and self-host third-party scripts where practical, or use Subresource Integrity for CDN files.
- Secrets only in Vercel environment variables. `.env.local` git-ignored. Never in client code.
- Service-role key used only in `/api`, never exposed.
- Supabase RLS enabled on every table; no public policies in Phase A.
- Validate and sanitise all input server-side. Parameterised queries only. Escape output.
- Rate limiting and spam protection on every endpoint.
- Request size limits, method checks, safe error messages (no stack traces).
- Dependency hygiene: minimal dependencies, `npm audit` in CI, Dependabot or Renovate.
- Admin accounts: strong passwords and two-factor authentication.
- Backups: enable Supabase backups or schedule exports.

## 2. Privacy and compliance
- Collect the minimum data. Mark sensitive fields (denomination) optional.
- Privacy Policy and cookie banner live before launch. Lawyer review of legal pages.
- Consent captured and stored with timestamp (`created_at`, `marketing_opt_in`).
- Data subject requests: documented process to export and delete a member's data within the legal timeframe.
- Hash IPs for rate limiting; do not store raw IPs.
- Do not send personal data to analytics.
- Children: site is not directed at children; age statement in the privacy policy.
- Be mindful of regional laws (GDPR, UK GDPR, NDPR, POPIA, CCPA) based on where members live.
- Religious belief is special-category data in some jurisdictions. Keep it optional, explain why it is requested, and limit access.

## 3. Performance budget
| Metric | Target |
|---|---|
| Lighthouse (mobile) | 90+ in all four categories |
| LCP | under 2.5s |
| INP | under 200ms |
| CLS | under 0.1 |
| JS (initial, compressed) | under 150 KB excluding GSAP; GSAP only where needed |
| CSS (compressed) | under 60 KB |
| Hero image | under 150 KB (WebP/AVIF) |
| Fonts | 2 families, under 100 KB total, preloaded |

## 4. Reliability
- Graceful fallback if JavaScript fails.
- Forms degrade to standard POST.
- Custom 404 and 500 pages.
- Uptime monitoring (free tier of any monitor).
- Error logging for `/api` functions without personal data.

## 5. Incident basics
- Know how to rotate keys (Supabase, Resend, Turnstile).
- Know how to roll back a Vercel deployment (instant rollback).
- Keep a short contact list: owner, developer, domain registrar.
