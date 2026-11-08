# 10-DATA-MODEL-AND-API.md

Database: Supabase Postgres. Phase A writes data only through serverless functions using the service-role key. Row Level Security (RLS) is enabled on every table with **no public policies**, so the browser can never read or write these tables directly.

## 1. Tables (Phase A)

### `members`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK, default `gen_random_uuid()` | |
| created_at | timestamptz, default `now()` | |
| full_name | text, not null | |
| email | citext, unique, not null | lower-cased |
| country | text, not null | |
| city | text | optional |
| category | text, not null | student, professional, founder, researcher, leader, organisation |
| interests | text[] | |
| denomination | text | optional, sensitive |
| profile_link | text | optional |
| motivation | text | optional |
| agreed_faith_statement | boolean, not null | |
| agreed_privacy | boolean, not null | |
| marketing_opt_in | boolean, default false | |
| source | text | utm or page |
| status | text, default `'pending'` | pending, active, removed |
| user_id | uuid, nullable | linked to Supabase Auth in Phase B |

### `newsletter_subscribers`
id, created_at, email (unique), confirmed (boolean), confirmed_at, source, unsubscribed_at.

### `contact_messages`
id, created_at, name, email, subject, message, handled (boolean, default false).

### `volunteer_applications`
id, created_at, full_name, email, country, skills (text[]), hours_per_week, note, profile_link, status (new, reviewing, accepted, declined).

### `partner_enquiries`
id, created_at, organisation, org_type, contact_name, role, email, country, interest_area, message, status.

### `venture_interests`
id, created_at, kind (founder or investor), full_name, email, country, stage_or_focus, sector, message.

### `idea_submissions`
id, created_at, name, email, area, summary, status.

### `opportunity_submissions`
id, created_at, title, organisation, type, link, deadline, submitter_name, submitter_email, status (pending, approved, rejected).

### `rate_limits` (for API throttling)
key (text, PK), count (int), window_start (timestamptz).

## 2. Tables (Phase B and C, design now, create later)
- `profiles` (user_id, display_name, headline, bio, skills, avatar_url, directory_visible)
- `opportunities` (approved listings: title, organisation, type, link, deadline, published)
- `events` (title, start, end, timezone, format, location, link, published)
- `mentorships` (mentor_id, mentee_id, status)
- `chapters` (name, country, region, coordinator_id)
- `partners` (organisation, logo_url, tier, published)
- `admins` (user_id)

## 3. Starter SQL (`supabase/schema.sql`)
```sql
create extension if not exists citext;
create extension if not exists pgcrypto;

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email citext not null unique,
  country text not null,
  city text,
  category text not null check (category in ('student','professional','founder','researcher','leader','organisation')),
  interests text[] default '{}',
  denomination text,
  profile_link text,
  motivation text,
  agreed_faith_statement boolean not null,
  agreed_privacy boolean not null,
  marketing_opt_in boolean not null default false,
  source text,
  status text not null default 'pending' check (status in ('pending','active','removed')),
  user_id uuid
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email citext not null unique,
  confirmed boolean not null default false,
  confirmed_at timestamptz,
  source text,
  unsubscribed_at timestamptz
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email citext not null,
  subject text,
  message text not null,
  handled boolean not null default false
);

-- Create volunteer_applications, partner_enquiries, venture_interests,
-- idea_submissions and opportunity_submissions the same way, using the
-- columns listed in section 1.

create table if not exists rate_limits (
  key text primary key,
  count integer not null default 0,
  window_start timestamptz not null default now()
);

-- Enable RLS on every table. No policies = no public access.
alter table members enable row level security;
alter table newsletter_subscribers enable row level security;
alter table contact_messages enable row level security;
alter table rate_limits enable row level security;
-- repeat for all other tables
```
The service-role key bypasses RLS and is used only inside `/api` functions.

## 4. API endpoints (Vercel functions)
All endpoints: `POST`, JSON body, `Content-Type: application/json`. Also accept `application/x-www-form-urlencoded` for no-JavaScript fallback and redirect to `/thank-you?type=...`.

| Endpoint | Purpose | Key fields |
|---|---|---|
| `/api/join` | Membership sign-up | full_name, email, country, category, interests, consents, turnstile token |
| `/api/newsletter` | Subscribe | email |
| `/api/contact` | Contact message | name, email, subject, message |
| `/api/volunteer` | Volunteer application | full_name, email, country, skills, hours, note |
| `/api/partner` | Partnership enquiry | organisation, org_type, contact_name, email, message |
| `/api/interest` | Founder or investor interest | kind, full_name, email, country, details |
| `/api/idea` | Idea submission | name, email, area, summary |
| `/api/submit-opportunity` | Opportunity submission | title, organisation, type, link, deadline |

### Response format
```json
// success
{ "ok": true, "message": "Welcome to KOINOVA." }

// validation error
{ "ok": false, "error": "validation", "fields": { "email": "Please enter a valid email address." } }

// duplicate
{ "ok": false, "error": "duplicate", "message": "You are already on the list." }

// rate limited
{ "ok": false, "error": "rate_limited", "message": "Too many attempts. Please try again in a few minutes." }

// server error
{ "ok": false, "error": "server", "message": "Something went wrong. Please try again." }
```
Status codes: 200, 400, 409, 429, 500.

## 5. Function behaviour (every endpoint)
1. Accept POST only; otherwise 405.
2. Check body size limit (for example 20 KB).
3. Honeypot field filled → return fake success, store nothing.
4. Verify Turnstile token server-side.
5. Rate limit by IP hash (for example 5 per 10 minutes per endpoint).
6. Validate and sanitise (trim, length limits, email format, allowed values, URL format). Never trust client values.
7. Insert via Supabase service client using parameterised queries.
8. Send email (user confirmation and team notification) without blocking the response if email fails; log the failure without personal data.
9. Return the standard response format.

## 6. Validation rules
- full_name: 2 to 100 chars. email: valid format, max 254. country: from approved list.
- Free text fields: max 2000 chars. Strip HTML tags.
- URLs: must start with `http://` or `https://`.
- Arrays: only allowed values from fixed lists.
- Consent booleans must be `true` where required.

## 7. Privacy rules
- Store only what is needed. Mark denomination as sensitive and optional.
- Hash IP addresses for rate limiting. Do not store raw IPs.
- Provide a way to delete or export a member's data on request (admin SQL or function).
- Do not log request bodies.
