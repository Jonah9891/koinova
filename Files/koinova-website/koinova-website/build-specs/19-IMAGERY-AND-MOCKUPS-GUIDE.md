# 19-IMAGERY-AND-MOCKUPS-GUIDE.md

How the agent sources, selects, treats and animates photography and UI mockups so every section looks professional, authentic and consistent in both light and dark modes.

## 1. Image source priority (use the first that applies)
1. **Client-supplied images** in `src/assets/img/` and `src/assets/brand/`. Always used first. (Leadership portraits are client-supplied only.)
2. **Real stock photography** of real people, from free, commercially usable libraries (Unsplash, Pexels) or any licensed library the client provides. Used wherever the client has not supplied an image.
3. **Code-built mockups** (HTML, CSS, SVG) for product and platform previews, animated. See section 7.
4. **Gradients, SVG illustration and icons** where a photo would not add value.

> This guide replaces the earlier instruction not to use stock photos. Stock photos of **real people** are approved. AI-generated images of people or places are **not**.

## 2. What the photos must show
**People mix:** a balanced mix of Black African and white people across the site, in different ages and genders. Group shots should feel natural and mixed. Other backgrounds may appear naturally in global or group scenes, since the community is international. Each page that has more than one photo should show both groups, and the Home page must.

**Settings:** professional, technology and entrepreneurship contexts that feel real:
- Developers and designers at laptops, in offices and co-working spaces
- Founders and small business owners at work
- Students learning, workshops and training sessions
- Mentoring and one-to-one conversations
- Team collaboration, whiteboards, brainstorming
- Conferences, talks and networking
- Video calls and international teams
- Hardware prototyping and engineering (for Innovation)

**Mood:** warm, confident, candid, optimistic, natural light. People look engaged in what they are doing, not posing at the camera.

## 3. Selection criteria (all must pass)
- Genuine photograph of real people. **Reject AI-generated images** (warped hands or ears, melted text, uncanny skin, mismatched jewellery or eyes, odd background details).
- At least 2400px on the long side (hero) or 1600px (sections). Sharp, well exposed, no heavy filters.
- No watermarks, no visible third-party brand logos, no readable private information on screens.
- No cliché stock moves: handshakes over desks, thumbs-up crowds, hooded hackers, glowing brains, praying silhouettes over circuit boards, people laughing at salads, fake high-fives.
- Faces not awkwardly cropped. Space for text overlay where needed.
- Must look good in both light and dark themes (avoid very dark or very bright photos for sections that switch background).
- Free of religious stereotyping. Faith is expressed subtly (community, craft, building), not through forced props.
- Each photo is used **once** on the site. No repeats.
- Phase A budget: about 12 to 16 photos in total.

## 4. Licence and ethics
1. Download only from sites whose current licence permits free commercial use. Open the licence page and record the licence name and date checked in `src/assets/img/CREDITS.md`.
2. Record for every photo: file name, photographer, source URL, licence, date downloaded, where used.
3. Self-host all images. **Never hotlink.**
4. **Never present stock people as real KOINOVA members, leaders, speakers, testimonials or event attendees.** No names, quotes or job titles attached to stock photos. Captions are generic or absent.
5. Do not use stock photos in a way that implies a person endorses KOINOVA or its beliefs.
6. If the client later replaces a stock photo with a real one, keep the same filename slot so no code changes are needed.

## 5. Where images go and what to search for
| Section | Image | Search terms (examples) | Notes |
|---|---|---|---|
| Home hero | 2 to 3 portrait or square photos in a floating collage with small UI cards | "african software developer laptop", "diverse tech team meeting", "woman founder laptop office" | Optional. The animated gradient hero works alone. If photos are used, one Black African and one white person at minimum |
| Home About | One wide photo | "founder working natural light", "team collaboration whiteboard" | Beside the large statement text |
| Home Join band | Single image or small photo strip | "diverse colleagues smiling at work" | No quote or name attached |
| Ecosystem: Community | Group photo | "diverse colleagues conversation co-working" | |
| Ecosystem: Academy | Learning scene | "students workshop laptops training", "mentor teaching coding" | Pair with course mockup |
| Ecosystem: Innovation | Making scene | "team brainstorming whiteboard", "engineer prototyping hardware" | Emerald family accents |
| Ecosystem: Ventures | Founder scene | "startup founders pitching", "african entrepreneur business owner" | Emerald family accents |
| Ecosystem: Global | International scene | "video call international team", "people conference networking" | Pair with globe or network SVG |
| Programmes and events | Event scene | "conference audience tech speaker", "workshop group discussion" | Event cards can use a neutral gradient if no photo |
| Opportunities | Optional | "graduate student laptop", "young professional interview" | |
| Partner With Us | Meeting scene | "business meeting boardroom diverse" | No handshakes |
| Articles | Per-article image or typographic card | topic specific | Use typographic cards when no good photo exists |
| Contact, legal, 404 | None, or abstract SVG | n/a | |

## 6. Image treatment and delivery
- **Crop and shape:** `--radius-lg` corners. Large sections may use asymmetric masks (one rounded corner larger) consistent across the site. One mask style only.
- **Overlay for legibility:** when text sits on a photo, use a navy gradient overlay (`rgba(16,28,58,0)` to `rgba(16,28,58,.75)`), checked for 4.5:1 text contrast. No other tints.
- **Consistency:** pick photos with similar tone and warmth. Do not apply different filters per image.
- **Formats and sizes:** export AVIF and WebP with JPG fallback at 480, 768, 1200, 1600 and 2400px widths. Use `<picture>`, `srcset`, `sizes`, `width` and `height`.
- **Loading:** hero image `fetchpriority="high"`, no lazy loading. All others `loading="lazy"` and `decoding="async"`.
- **Placeholders:** reserve space with `aspect-ratio` and a dominant-colour or blurred placeholder to prevent layout shift.
- **Weights:** hero photo 150 KB or less, section photos 100 KB or less after compression.
- **Alt text:** describe what is shown in one short sentence. Decorative images use `alt=""`.
- **Dark mode:** images are not inverted. Add a slight brightness reduction (about 0.92) in dark theme for large photos if they glare, using CSS filter.

## 7. UI mockups (built in code)
Mockups show people what the KOINOVA platform is being built to offer. They are **built in HTML, CSS and SVG**, not generated images.

**Allowed mockups**
| Mockup | Shown on | Content idea |
|---|---|---|
| Member profile card | Community | Initials avatar, skills chips, "open to mentoring" toggle |
| Member directory preview | Community | Filter bar and three profile cards |
| Course card and progress | Academy | Course title, lesson list, progress bar filling |
| Venture progress board | Ventures | Stage tracker (Idea, Prototype, Launch) |
| Opportunities list | Resources, Opportunities | Three cards with type chips and deadlines |
| Events calendar widget | Programmes and events | Date blocks and register buttons |
| Join flow on a phone | Join page, Home | Short form on a phone frame |
| Impact dashboard | Phase C | Sample cards, with "Preview" label |

**Rules**
1. Label every mockup with a small "Preview" or "What we are building" chip so nobody thinks it is live.
2. **No fabricated data:** no invented member counts, real-looking names with photos, fake ratings, fake testimonials or fake revenue. Use initials avatars, neutral sample titles (for example "Sample course") and obvious placeholder values.
3. Device frames (phone, laptop) are simple, thin and modern, in neutral dark with no brand logos of device makers.
4. Screens use the site's own tokens, so they match the active theme. The frame stays dark in both themes.
5. Keep each mockup lightweight: under 15 KB of markup and CSS, no images, SVG icons only.
6. Mockups sit in the section's gradient family backdrop (blue for most, emerald for Ventures and Innovation).
7. Pair a mockup with a stock photo only where it improves the layout. Do not stack three visuals in one section.
8. Motion: see `08-ANIMATION-AND-MOTION.md` section 11.
9. Mockups are decorative: wrap them in `aria-hidden="true"` and provide the same information in real text beside them.

## 8. If the agent cannot download images
1. Do not stop. Put in a clearly marked placeholder (gradient with the section icon).
2. Add the item to `IMAGE-TODO.md` with the section, ratio, search terms from section 5, and the file name expected.
3. Report it at the end of the task. The client can drop photos into the folder later with the same names.

## 9. File naming
`section-subject-number.ext`, lowercase with hyphens, for example `home-hero-01.jpg`, `academy-workshop-01.jpg`, `ventures-founders-01.jpg`. Processed outputs go in `src/assets/img/optimised/`.

## 10. Quality check for every image
- [ ] Real photograph, not AI-generated
- [ ] Licence recorded in `CREDITS.md`
- [ ] Mix of Black African and white people respected across the page
- [ ] No logos, watermarks or readable private text
- [ ] Looks good in light and dark themes
- [ ] Optimised, sized, lazy-loaded (except hero), alt text added
- [ ] Not a repeat of another image on the site
