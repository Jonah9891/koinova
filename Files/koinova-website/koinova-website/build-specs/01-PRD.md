# 01-PRD.md — Product Requirements

## 1. Overview
Two parts delivered together:
- **Website:** public marketing and information pages.
- **Member sign-up app:** forms and data capture that lead to a member platform later.

## 2. Release phases
### Phase A — Launch (build now)
- All Phase 1 pages (see `03-SITEMAP-AND-ROUTES.md`)
- Dark and light mode with user switch
- Member sign-up (free), with confirmation email
- Newsletter sign-up
- Contact, volunteer, partner, opportunity-submission and idea-submission forms
- Animations and polished UI
- SEO, analytics and accessibility baseline
- Admin view of sign-ups (see below)

### Phase B — Growth (design for it now, build later)
- Member login (Supabase Auth, email magic link)
- Member profile (view and edit)
- Member directory (opt-in visibility)
- Opportunities hub with filters
- Mentor and mentee sign-up
- Phase 2 pages

### Phase C — Scale (design for it now, build later)
- Member dashboard (alerts, learning access, networking)
- Chapters and regional pages
- Institutional partner portal
- Fellowships, conferences, resource library, news feed
- Phase 3 pages

## 3. User roles
| Role | Description | Phase |
|---|---|---|
| Visitor | Anonymous browser | A |
| Member | Registered founding member | A (record only), B (login) |
| Admin | KOINOVA team | A (basic), B |
| Partner | Organisation contact | B/C |

## 4. Core user stories (Phase A)
1. As a visitor, I can understand what KOINOVA is within seconds of landing.
2. As a visitor, I can join KOINOVA by completing a short form and receive a confirmation.
3. As a visitor, I can toggle between dark and light mode and my choice is remembered.
4. As a visitor, I can subscribe to the newsletter.
5. As a founder or investor, I can register interest in KOINOVA Ventures.
6. As an organisation, I can send a partnership enquiry.
7. As a volunteer, I can apply to help.
8. As a member of the public, I can submit an opportunity or an idea for review.
9. As an admin, I can see and export new sign-ups and enquiries.
10. As a user on a phone with a slow connection, the site still loads quickly and works.

## 5. Functional requirements
**FR-1 Theme switch.** Header toggle (sun/moon icon, accessible label). Defaults to system preference, saves to localStorage, no flash of wrong theme on load.

**FR-2 Membership form.** Fields and validation per `12-FORMS-AND-INTEGRATIONS.md`. Server-side validation, duplicate-email handling, spam protection, success and error states, welcome email.

**FR-3 Other forms.** Newsletter, contact, volunteer, partner, founder/investor interest, idea, opportunity submission.

**FR-4 Navigation.** Sticky header with dropdowns on desktop, full-screen menu on mobile, prominent JOIN KOINOVA button.

**FR-5 Content pages.** Built from the copy files. Reusable components.

**FR-6 Articles and events.** Content-file driven (see `13-CMS-AND-CONTENT-MODEL.md`). Show "coming soon" states when empty.

**FR-7 Admin access.** Phase A: a protected admin page or Supabase dashboard access with CSV export. No public access to personal data.

**FR-8 Animations.** Per `08-ANIMATION-AND-MOTION.md`, with reduced-motion fallback.

**FR-9 SEO.** Meta tags, Open Graph, sitemap, robots, structured data.

**FR-10 Analytics.** Privacy-respecting analytics with consent where required.

## 6. Non-functional requirements
- **Performance:** Lighthouse 90+; LCP under 2.5s on mid-range mobile; total JS as small as practical.
- **Accessibility:** WCAG 2.2 AA in both themes.
- **Security and privacy:** HTTPS, input validation, rate limiting, no secrets in the repository. Religious belief data is sensitive; keep optional fields optional.
- **Browser support:** latest two versions of Chrome, Safari, Firefox, Edge; iOS Safari and Android Chrome.
- **Responsiveness:** 360px to 1920px and up.
- **Maintainability:** readable code, consistent naming, comments where non-obvious.

## 7. Out of scope for Phase A
Payments, login, public member directory, messaging, native apps, multi-language support (design so it can be added).

## 8. Open decisions
Launch date, team, legal entity details, membership fee changes later, final logo and hex codes, contact emails, analytics provider, custom domain.
