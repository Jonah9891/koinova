# 17-QA-AND-DEPLOYMENT.md

## 1. QA checklist

### Content
- [ ] All copy matches the files in `phase-1-launch/`
- [ ] No Lorem ipsum, no unfilled `[PLACEHOLDERS]` visible to users
- [ ] No invented statistics, partners, testimonials or leaders
- [ ] Spelling and British English checked
- [ ] Legal pages reviewed by a lawyer; draft banners removed only after review

### Design and theme
- [ ] Light and dark mode correct on every page
- [ ] Theme switch works on desktop and mobile, persists, no flash on load
- [ ] Logo, images and shadows look right in both themes
- [ ] Consistent spacing, type and components
- [ ] Layout correct at 360, 414, 768, 1024, 1280, 1536, 1920px

### Functionality
- [ ] Navigation: dropdowns, mobile menu, active states, JOIN button
- [ ] All links work (internal and external); no broken anchors
- [ ] Cookie banner works; analytics only after consent where required
- [ ] 404 page works; hidden routes not reachable from navigation
- [ ] Empty states appear correctly where content is missing

### Forms (test each of the eight)
- [ ] Valid submission succeeds; data appears in Supabase; emails arrive
- [ ] Each required field validates; messages are clear
- [ ] Invalid email, very long text, HTML or script input are rejected or sanitised
- [ ] Duplicate email handled gracefully
- [ ] Honeypot and Turnstile block bots
- [ ] Rate limiting triggers after repeated submissions
- [ ] Works without JavaScript
- [ ] Success and error messages announced to screen readers

### Animation
- [ ] Hero and scroll animations smooth at 60fps
- [ ] Reduced motion setting removes large movement
- [ ] No content hidden if JavaScript fails
- [ ] No layout shift from animations

### Accessibility
- [ ] axe: zero critical or serious issues
- [ ] Keyboard-only walkthrough of every flow
- [ ] Screen reader spot check (VoiceOver and NVDA)
- [ ] 200% zoom and 320px reflow
- [ ] Contrast verified in both themes

### Performance and SEO
- [ ] Lighthouse mobile 90+ in all categories on key pages
- [ ] Core Web Vitals in target range
- [ ] Meta titles and descriptions unique; Open Graph previews correct
- [ ] `sitemap.xml` and `robots.txt` correct
- [ ] Structured data valid

### Security
- [ ] Security headers present (check with securityheaders.com)
- [ ] No secrets in repository or client bundle
- [ ] Supabase tables not readable with the anon key
- [ ] `npm audit` clean or exceptions documented

### Browser and device matrix
Chrome, Safari, Firefox, Edge (latest two); iOS Safari; Android Chrome; at least one low-end Android device or throttled profile.

## 2. Deployment steps (Vercel)
1. Push the repository to GitHub.
2. Import the repository into Vercel. Framework preset: Other. Build command `npm run build`, output directory `dist`.
3. Add environment variables for Preview and Production (values entered by the human).
4. Deploy a **preview**. Run the QA checklist on the preview URL.
5. Human approves.
6. Add the custom domain in Vercel; update DNS at the registrar (human).
7. Configure email domain records (SPF, DKIM, DMARC) for Resend.
8. Add the production Turnstile site key for the live domain.
9. Deploy to production (human triggers).
10. Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
11. Set up uptime monitoring.

## 3. Launch-day checks
- [ ] Submit a real test sign-up on production and confirm the data and email
- [ ] Test the theme switch on production
- [ ] Check HTTPS and redirects (www to apex or the reverse)
- [ ] Check social sharing previews (WhatsApp, LinkedIn, X, Facebook)
- [ ] Remove test data from Supabase

## 4. Rollback
Use Vercel's instant rollback to the previous deployment. If the issue is data-related, pause form endpoints by returning a maintenance message from `/api` and fix before re-enabling.

## 5. Post-launch (first 30 days)
- Monitor Supabase sign-ups and email deliverability
- Review analytics weekly and fix drop-off points
- Collect feedback from first members
- Update copy where reality has changed (programmes, events, partners)
- Plan Phase B work based on real usage
