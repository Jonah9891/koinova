# 09-USER-FLOWS.md

## 1. Join KOINOVA (primary conversion)
```
Landing (any page)
  └─ Click JOIN KOINOVA (header, hero, CTA band)
       └─ /get-involved/become-a-member
            ├─ Reads short intro
            ├─ Completes form (required fields first, optional under "Tell us more")
            │    ├─ Validation error → inline message, focus moves to first error
            │    └─ Valid → submit
            ├─ Loading state on button
            ├─ Server: validate → spam check → save → send welcome email
            │    ├─ Duplicate email → friendly message: "You are already on the list."
            │    └─ Server error → retry message, data preserved
            └─ Success → /thank-you?type=member
                  ├─ Welcome message and next steps
                  ├─ Share buttons
                  └─ Links: Explore ecosystem, Follow us
```
**Required fields:** name, email, country, category, Privacy consent, Statement of Faith agreement.
**Optional:** city, interests, church or denomination, link, motivation, email-updates consent.

## 2. Newsletter
Footer or inline form → email only → validate → save → toast "Thank you. You are on the list." Double opt-in by email where required by local law.

## 3. Contact
`/contact` → form → validate → send to team inbox and store → success message and auto-reply.

## 4. Volunteer
`/get-involved/volunteer` → form with skills multi-select → submit → success → team reviews → reply.

## 5. Partner enquiry
`/get-involved/partner-with-us` → form → submit → team email notification → auto-reply.

## 6. Founder or investor interest (Ventures)
`/ecosystem/ventures` → "I am a founder" or "I am an investor" → short form (modal or page) → submit → success.

## 7. Submit an opportunity or idea
Opportunity form on `/resources/opportunities`; idea form on `/ecosystem/innovation`. Both go to a review queue, never published automatically.

## 8. Theme switch
Header toggle at any time → theme changes instantly → saved → persists across visits and pages.

## 9. Admin: review sign-ups (Phase A)
Admin signs in to Supabase dashboard (or `/admin` page protected by authentication) → views sign-ups → filters by country or category → exports CSV → marks enquiries as handled.

## 10. Phase B flows (design for later)
- **Member login:** enter email → receive magic link → signed in → dashboard.
- **Profile:** edit details, choose directory visibility.
- **Directory:** search and filter members who opted in; send an intro request.
- **Mentor and mentee:** apply → matched by admin → intro email.

## Error and edge cases (all forms)
- No JavaScript: form still posts (progressive enhancement) to the API and redirects to `/thank-you`.
- Offline or slow connection: clear retry message, preserve entered data.
- Spam bot: honeypot or failed Turnstile returns a generic success to the bot and stores nothing.
- Rate limit hit: friendly message "Too many attempts. Please try again in a few minutes."
- Accessibility: errors announced via `aria-live`, focus management, keyboard-only completion possible.
