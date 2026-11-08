---
page: Member area microcopy (login, profile, directory)
url: /login, /members/profile, /members/directory
phase: 2
publish_when: Supabase Auth and profiles are built and tested.
---

# Login (`/login`)
**Heading:** Welcome back.
**Text:** Enter your email and we will send you a secure link to sign in. No password needed.
**Field:** Email address
**Button:** **[SEND SIGN-IN LINK]**
**After sending:** Check your email. We have sent a sign-in link to [EMAIL]. It expires in [MINUTES] minutes and works once.
**Link:** Did not get it? **[Send again]**
**Not a member?** **[Join KOINOVA]**
**Errors:** "That email does not look right." · "We could not send the link. Please try again." · "That link has expired. Request a new one."

**Sign-in email (draft)**
Subject: Your KOINOVA sign-in link
Hello [NAME],
Use this link to sign in to KOINOVA. It expires in [MINUTES] minutes and can be used once.
[SIGN IN BUTTON]
If you did not request this, you can ignore this email.
The KOINOVA Team

# Profile (`/members/profile`)
**Heading:** Your profile
**Intro:** Keep your details up to date so we can show you the right opportunities.
**Sections and labels:**
- Basics: Display name · Headline (for example "Frontend developer" or "Founder, ...") · Country and city
- About you: Short bio (up to 500 characters)
- Skills and interests: Add up to 10 tags
- Links: LinkedIn · Portfolio or GitHub · Website
- Open to: Mentoring others · Being mentored · Collaborating · Hiring · Being hired · Investing
- Privacy: **Show me in the member directory** (off by default). Helper: "If on, signed-in members can see your display name, headline, location, skills and links. Your email is never shown."
**Buttons:** **[SAVE CHANGES]** **[CANCEL]**
**Success:** Your profile has been updated.
**Danger zone:** **[Download my data]** · **[Delete my account]** with confirmation: "This permanently deletes your profile and membership. This cannot be undone."

# Directory (`/members/directory`)
**Heading:** Member directory
**Intro:** Meet members who have chosen to be listed.
**Filters:** Category · Country · Skills · Open to
**Search:** "Search by name, skill or role"
**Card:** Initials or photo · Display name · Headline · Location · Skills chips · **[REQUEST INTRODUCTION]**
**Request introduction:** "Say hello. Tell [NAME] why you would like to connect. They can accept or decline." Field: Message (max 500) · Button **[SEND REQUEST]** · Success: "Request sent."
**Empty state:** "No members match those filters yet. Try fewer filters."
**Safety:** **[Report]** and **[Block]** on every card. Report confirmation: "Thank you. Our team will review this."
**Reminder banner:** Please follow our **Community Guidelines**.
