# 13-CMS-AND-CONTENT-MODEL.md

## 1. Approach
No framework and no heavy CMS at launch. Content lives in simple files in `content/`, edited in the repository. Pages that list items (articles, events, opportunities) are generated at build time by `scripts/build.js`.

Optional later: add **Decap CMS** (a browser-based editor that commits to the repository) so non-developers can edit without touching code.

## 2. Content types
### Pages
Static HTML in `src/pages/`, using copy from the phase folders.

### Articles (`content/articles/<slug>.md`)
Front matter:
```
title:
slug:
date: YYYY-MM-DD
author:
category: faith-technology | ai | entrepreneurship | careers | innovation | leadership | community
excerpt: (max 160 chars)
image: /assets/img/articles/<file>.webp
image_alt:
published: true | false
```
Body in Markdown. The build creates `/resources/articles/<slug>` pages and the listing.

### Events (`content/events/<slug>.json`)
```json
{
  "title": "",
  "slug": "",
  "start": "2026-12-01T18:00:00Z",
  "end": "2026-12-01T19:30:00Z",
  "timezone": "Africa/Lagos",
  "format": "online | in-person | hybrid",
  "location": "",
  "description": "",
  "register_url": "",
  "published": true
}
```
Past events move to an archive automatically at build time.

### Opportunities (`content/opportunities/<slug>.json`)
```json
{
  "title": "",
  "organisation": "",
  "type": "scholarship | training | competition | grant | internship | job | fellowship | event",
  "link": "",
  "deadline": "YYYY-MM-DD",
  "description": "",
  "published": true
}
```
Expired opportunities are hidden from the main list after their deadline.

### Leadership (`content/leadership.json`)
Three groups: `featured`, `team`, `advisors`, `volunteers`. Empty groups are not rendered.
```json
{
  "featured": {
    "name": "Dansu Semawon Jonah",
    "headline": "Business Transformation Strategist | Venture Builder | Brand Strategist | Technology Entrepreneur",
    "role_at_koinova": "",
    "photo": "/assets/img/leadership/dansu-semawon-jonah.jpg",
    "photo_alt": "Portrait of Dansu Semawon Jonah",
    "short_bio": "",
    "full_bio_source": "phase-1-launch/02-about/leadership.md",
    "highlights": [],
    "expertise": [],
    "ventures": [{ "name": "", "description": "", "url": "" }],
    "links": { "linkedin": "", "website": "" }
  },
  "team": [{ "name": "", "title": "", "bio": "", "photo": "", "links": {} }],
  "advisors": [],
  "volunteers": []
}
```
The full biography text lives in `phase-1-launch/02-about/leadership.md` and must not be reworded. If `role_at_koinova` is empty, show the professional headline only.

### Partners (`content/partners.json`)
Array of `{ name, logo_light, logo_dark, url }`. If empty, show the invitation text only.

### Programmes (`content/programmes.json`)
Array of `{ title, status: "open" | "soon", summary, date, register_url }`.

## 3. Build behaviour
- Missing or empty content produces the honest empty states described in the copy files.
- Unpublished items are never output.
- Article pages get unique meta tags, Open Graph tags, reading time and structured data (Article schema).
- Events produce Event schema.
- `sitemap.xml` is generated from published pages only.

## 4. Review workflow for submissions
1. Submissions arrive in Supabase (`opportunity_submissions`, `idea_submissions`).
2. A team member reviews, verifies the link and organisation.
3. If approved, add a JSON file to `content/opportunities/` and redeploy (or in Phase B publish from the database).
4. Mark the submission `approved`.

## 5. Editorial guidelines
- Follow `04-BRAND-AND-VOICE-GUIDE.md`.
- Every article: clear title, 150-word-or-less excerpt, descriptive alt text, sources for claims.
- Opportunities: verify before listing. Include the disclaimer.
- No unverified claims about KOINOVA's size or impact.

## 6. Starter content
Use the six launch article ideas in `phase-1-launch/05-resources/articles.md`. Do not publish placeholder articles. The page shows "First articles coming soon" until at least three are published.
