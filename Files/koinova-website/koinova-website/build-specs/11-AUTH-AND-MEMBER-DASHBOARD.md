# 11-AUTH-AND-MEMBER-DASHBOARD.md

## 1. Scope by phase
| Phase | Includes |
|---|---|
| A (launch) | Member sign-up record only. No member login. Admin access to data |
| B | Member login, profile, directory (opt-in), mentorship |
| C | Dashboard, alerts, learning access, chapters |

## 2. Admin access in Phase A
Default approach, which is the simplest and safest:
- Use the **Supabase dashboard** (table editor and CSV export) restricted to the owner and named team members with strong passwords and two-factor authentication.
- Do not build a public admin interface unless specifically asked.

Optional task (only if requested): a protected `/admin` page
- Sign in with Supabase Auth (email magic link or password plus 2FA).
- Access limited to users listed in the `admins` table, checked **server-side** in an `/api/admin/*` function using the user's JWT.
- Views: members, newsletter, contact messages, volunteers, partner enquiries, submissions. Filters, search, status update, CSV export.
- No personal data is ever loaded into client code for non-admins.

## 3. Member authentication (Phase B design)
- Supabase Auth with **email magic link** (no passwords to manage). Optionally add Google sign-in later.
- On sign-up, link the existing `members` record by email to the new `user_id`.
- Sessions handled by Supabase client library; use the public anon key with strict RLS.
- Logout, session expiry and "resend link" flows required.

## 4. Roles and permissions (RLS)
| Role | Can |
|---|---|
| Anonymous | Submit forms via API only |
| Member | Read and update own profile; read directory entries where `directory_visible = true` |
| Admin | Read and update all records |
| Partner (later) | Manage own organisation record |

Example policy ideas for Phase B:
```sql
-- members can read and update only their own profile
create policy "own profile read"  on profiles for select using (auth.uid() = user_id);
create policy "own profile write" on profiles for update using (auth.uid() = user_id);
-- directory shows only opted-in profiles to signed-in members
create policy "directory read" on profiles for select to authenticated using (directory_visible = true);
```

## 5. Member dashboard (Phase C) — wireframe notes
- **Welcome header:** name, membership category, completeness bar.
- **Cards:** Recommended opportunities, upcoming events, new in the Academy, mentorship status, community updates.
- **Quick actions:** edit profile, set directory visibility, submit an opportunity, invite a friend.
- **Settings:** email preferences, privacy controls, download my data, delete my account.
- Layout: left sidebar on desktop, bottom navigation on mobile. Both themes supported.

## 6. Profile fields (Phase B)
Display name, headline, location, bio (500 chars), skills and interests (tags), links (LinkedIn, portfolio, GitHub), open to (mentoring, collaborating, hiring, being hired, investing), directory visibility toggle.

## 7. Directory rules (Phase B)
- Opt-in only. Default is hidden.
- Filters: category, country, skills, open-to.
- No email addresses shown. Contact happens through an introduction request that the other member can accept.
- Report and block options. Admin moderation.
- Never show denomination or other sensitive data in the directory.

## 8. Security
- Never trust client-side role checks. Enforce in RLS and server functions.
- Throttle login link requests.
- Magic links expire quickly and are single use.
- Audit sensitive admin actions.
