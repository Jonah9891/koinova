# 03-SITEMAP-AND-ROUTES.md

Access: **P** = public, **M** = members only (Phase B+), **A** = admin only.
Copy source: files in `phase-1-launch/` and the combined `phase-2-3-growth-and-scale/` folder.

## Phase A — Launch
| Route | Page | Access | Copy source |
|---|---|---|---|
| `/` | Home | P | `phase-1-launch/01-home/home.md` |
| `/about` | About overview (short intro and links to subpages) | P | derive from About pages |
| `/about/our-story` | Our Story | P | `02-about/our-story.md` |
| `/about/vision-and-mission` | Vision & Mission | P | `02-about/vision-and-mission.md` |
| `/about/values-and-faith` | Values & Statement of Faith | P | `02-about/values-and-faith.md` |
| `/about/leadership` | Leadership | P | `02-about/leadership.md` |
| `/ecosystem` | Ecosystem overview | P | `03-ecosystem/ecosystem-overview.md` |
| `/ecosystem/community` | KOINOVA Community | P | `03-ecosystem/community.md` |
| `/ecosystem/academy` | KOINOVA Academy | P | `03-ecosystem/academy.md` |
| `/ecosystem/innovation` | KOINOVA Innovation | P | `03-ecosystem/innovation.md` |
| `/ecosystem/ventures` | KOINOVA Ventures | P | `03-ecosystem/ventures.md` |
| `/ecosystem/global` | KOINOVA Global | P | `03-ecosystem/global.md` |
| `/programmes` | Current Programmes | P | `04-programmes/current-programmes.md` |
| `/programmes/events` | Events | P | `04-programmes/events.md` |
| `/resources` | Resources overview | P | `05-resources/resources-overview.md` |
| `/resources/articles` | Articles & Insights | P | `05-resources/articles.md` |
| `/resources/opportunities` | Opportunities | P | `05-resources/opportunities.md` |
| `/get-involved` | Get Involved overview | P | `06-get-involved/get-involved-overview.md` |
| `/get-involved/become-a-member` | Join KOINOVA (membership form) | P | `06-get-involved/become-a-member.md` |
| `/get-involved/volunteer` | Volunteer | P | `06-get-involved/volunteer.md` |
| `/get-involved/partner-with-us` | Partner With Us | P | `06-get-involved/partner-with-us.md` |
| `/contact` | Contact Us and FAQ | P | `07-contact-and-legal/contact.md` |
| `/privacy-policy` | Privacy Policy | P | `07-contact-and-legal/privacy-policy.md` |
| `/terms-of-use` | Terms of Use | P | `07-contact-and-legal/terms-of-use.md` |
| `/cookie-policy` | Cookie Policy | P | `07-contact-and-legal/cookie-policy.md` |
| `/thank-you` | Form success page (query param for type) | P | microcopy |
| `/404` | Not found | P | `00-global/navigation-and-footer.md` |
| `/admin` | Admin sign-ups view | A | spec in `11-AUTH-AND-MEMBER-DASHBOARD.md` |

## Phase B — Growth (create routes, hidden from navigation until ready)
| Route | Page | Access |
|---|---|---|
| `/about/governance` | Governance | P |
| `/about/global-ambition` | Global Ambition | P |
| `/programmes/training` | Training & Masterclasses | P |
| `/programmes/mentorship` | Mentorship | P |
| `/programmes/startup-programmes` | Startup Programmes | P |
| `/programmes/innovation-challenges` | Innovation Challenges | P |
| `/resources/research` | Research & Publications | P |
| `/resources/webinars` | Webinars | P |
| `/opportunities` | Opportunities hub with filters | P |
| `/get-involved/become-a-mentor` | Become a Mentor | P |
| `/get-involved/support` | Support Our Initiatives | P |
| `/membership` | Membership categories | P |
| `/login` | Member login | P |
| `/members/profile` | My profile | M |
| `/members/directory` | Member directory | M |

## Phase C — Scale
| Route | Page | Access |
|---|---|---|
| `/members/dashboard` | Dashboard | M |
| `/programmes/fellowships` | Fellowships | P |
| `/programmes/conferences` | Conferences & Summits | P |
| `/resources/library` | Resource Library | M/P |
| `/resources/news` | Technology & Innovation News | P |
| `/chapters` | Chapters and regions | P |
| `/chapters/[region]` | Regional chapter page | P |
| `/partners` | Institutional partners | P |
| `/what-we-do` | Eight pillars | P |

## Rules
- Phase B and C routes may be scaffolded but must not appear in navigation or sitemap.xml until the feature and content are real.
- Redirect any hidden route to `/` or show a styled "coming soon" state, never an empty page.
- Navigation and footer content come from `phase-1-launch/00-global/navigation-and-footer.md`.

## Copy sources for Phase B and C routes
All files are in `phase-2-3-growth-and-scale/`. Check the `publish_when` line in each file before building or publishing the page.

| Route | File |
|---|---|
| `/about/governance` | `p2-01-about-governance.md` |
| `/about/global-ambition` | `p2-02-about-global-ambition.md` |
| `/programmes/training` | `p2-03-programmes-training.md` |
| `/programmes/mentorship` | `p2-04-programmes-mentorship.md` |
| `/programmes/startup-programmes` | `p2-05-programmes-startup.md` |
| `/programmes/innovation-challenges` | `p2-06-programmes-innovation-challenges.md` |
| `/resources/research` | `p2-07-resources-research.md` |
| `/resources/webinars` | `p2-08-resources-webinars.md` |
| `/opportunities` | `p2-09-opportunities-hub.md` |
| `/get-involved/become-a-mentor` | `p2-10-become-a-mentor.md` |
| `/get-involved/support` | `p2-11-support-our-initiatives.md` |
| `/membership` | `p2-12-membership-categories.md` |
| `/login`, `/members/profile`, `/members/directory` | `p2-13-member-area-microcopy.md` |
| Extra blocks on `/ecosystem/*` | `p2-14-ecosystem-expanded-sections.md` |
| `/community-guidelines` | `p2-15-community-guidelines.md` |
| `/membership-terms` | `p2-16-membership-terms.md` |
| `/members/dashboard` | `p3-01-member-dashboard.md` |
| `/programmes/fellowships` | `p3-02-programmes-fellowships.md` |
| `/programmes/conferences` | `p3-03-programmes-conferences.md` |
| `/resources/library` | `p3-04-resources-library.md` |
| `/resources/news` | `p3-05-resources-news.md` |
| `/chapters`, `/chapters/[region]` | `p3-06-chapters.md` |
| `/partners` | `p3-07-institutional-partners.md` |
| `/what-we-do` | `p3-08-what-we-do.md` |
| Navigation and footer growth | `00-navigation-and-footer-updates.md` |
