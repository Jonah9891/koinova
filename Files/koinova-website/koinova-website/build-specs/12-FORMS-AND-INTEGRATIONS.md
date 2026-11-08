# 12-FORMS-AND-INTEGRATIONS.md

## 1. Membership form fields (`/get-involved/become-a-member`)
| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | text | Yes | 2 to 100 chars |
| Email address | email | Yes | validate and lower-case |
| Country | select with search | Yes | full country list |
| City | text | No | |
| Membership category | radio cards | Yes | Student · Technology professional · Entrepreneur/Founder · Researcher/Academic · Technology leader/Executive · Organisation/Institution |
| Areas of interest | multi-select chips | No | Software · AI & emerging tech · Entrepreneurship · Research · Career development · Leadership · Other |
| Church or denomination | text | No | helper: "Optional. Used only to understand our community." |
| LinkedIn or portfolio | url | No | |
| What do you hope to gain or contribute? | textarea | No | max 1000 chars |
| I agree with KOINOVA's Statement of Faith and values | checkbox | Yes | link to `/about/values-and-faith` |
| I would like to receive updates by email | checkbox | No | unchecked by default |
| I have read the Privacy Policy | checkbox | Yes | link to `/privacy-policy` |

Layout: required fields first, "Tell us more" collapsible group for optional fields.

## 2. Other forms
**Newsletter:** email only.
**Contact:** name, email, subject (select), message, privacy checkbox.
**Volunteer:** full name, email, country, skills (multi-select: technology and development, design and branding, writing and editing, social media and communications, events, research, partnerships, mentorship, leadership), hours per week, short note, link (optional), privacy checkbox.
**Partner:** organisation, organisation type, your name and role, email, country, area of interest, message, privacy checkbox.
**Founder or investor interest:** kind (toggle), name, email, country, stage or focus, sector, message.
**Idea:** name, email, area of interest, idea summary.
**Opportunity submission:** title, organisation, type, link, deadline, your name and email.

Use the exact labels, helper text, success and error messages in the copy files in `phase-1-launch/06-get-involved/`, `04-programmes/` and `05-resources/`.

## 3. Front-end form behaviour (`forms.js`)
- Progressive enhancement: works without JavaScript via normal POST and redirect.
- Real-time inline validation on blur, full validation on submit.
- Focus moves to the first invalid field; errors announced with `aria-live="polite"`.
- Submit button shows a loading spinner and is disabled while sending.
- Preserve entered values on error.
- Show success inline or redirect to `/thank-you?type=...`.
- Use `autocomplete` attributes (name, email, country-name) for faster completion.
- Hidden honeypot field named `website` (must remain empty).
- Cloudflare Turnstile widget (invisible or managed mode), theme-aware (`data-theme` follows light and dark).

## 4. Email (Resend or alternative)
### Emails to send
| Trigger | To | Template |
|---|---|---|
| Member joined | Member | Welcome to KOINOVA |
| Member joined | Team (`NOTIFY_EMAIL`) | New member alert (name, category, country) |
| Newsletter | Subscriber | Confirmation (double opt-in link where required) |
| Contact | Sender | Auto-reply "We received your message" |
| Contact | Team | Message copy |
| Volunteer | Applicant and team | Receipt and alert |
| Partner enquiry | Enquirer and team | Receipt and alert |
| Opportunity or idea | Team | Review alert |

### Email design
- Plain-text version always included.
- Branded HTML: logo, brand colours, simple single-column layout, readable in dark mode (use transparent logo PNG and avoid pure black or white blocks).
- Footer: contact address, unsubscribe or reason received, registered entity name.
- Sender: `KOINOVA <hello@yourdomain>`; SPF, DKIM and DMARC configured on the domain.

### Welcome email copy
Use the draft in `phase-1-launch/06-get-involved/become-a-member.md`.

## 5. Spam protection
Layered: honeypot, Turnstile (or hCaptcha), server-side rate limiting, validation, and basic content checks (reject obvious link spam). Never show detailed error reasons to bots.

## 6. Analytics and tracking
- Prefer privacy-friendly analytics (Plausible) or GA4 behind consent.
- Events: `join_started`, `join_completed`, `newsletter_subscribed`, `contact_sent`, `volunteer_sent`, `partner_sent`, `cta_click` (with location), `theme_switched`.
- No tracking pixels or advertising scripts without explicit decision and consent.

## 7. Third-party integrations (later)
- CRM or email marketing (for example Mailchimp, Brevo, HubSpot): sync members who opt in.
- Calendar: add-to-calendar links for events.
- Payments: none at launch.
