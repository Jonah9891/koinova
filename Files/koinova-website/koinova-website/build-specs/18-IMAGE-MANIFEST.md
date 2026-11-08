# 18-IMAGE-MANIFEST.md

> Sourcing, selection, licensing, treatment and mockup rules are in `19-IMAGERY-AND-MOCKUPS-GUIDE.md`. This file lists the expected filenames.

Every image the site expects, with its path, size and status. The agent must check this list during Task 3 and flag anything missing in `OPEN-QUESTIONS.md`. If a file is missing, use a clearly marked placeholder and never block the build.

**Naming rules:** lowercase, hyphens, no spaces. **Formats:** SVG for logos and icons; JPG or PNG supplied by the client (the agent converts to WebP/AVIF for the site). **Alt text:** every image needs a description.

## Brand (`src/assets/brand/`)
| File | Purpose | Spec | Status |
|---|---|---|---|
| `logo-light.svg` | Full logo for light backgrounds (used in light theme) | SVG | REQUIRED |
| `logo-dark.svg` | Full logo for dark backgrounds (used in dark theme) | SVG | REQUIRED |
| `logo-icon.svg` | Icon-only mark | SVG, square | REQUIRED |
| `favicon.svg` and `favicon-32.png`, `favicon-180.png`, `favicon-512.png` | Browser and app icons | Square | Agent can generate from `logo-icon.svg` |
| `og-share.jpg` | Social share image | 1200 x 630 | Agent can generate from logo, tagline and palette |

## Leadership (`src/assets/img/leadership/`)
| File | Purpose | Spec | Status |
|---|---|---|---|
| `dansu-semawon-jonah.jpg` | Featured leader portrait | Portrait or square, at least 1000px on the long side | REQUIRED from client |
| `<firstname-lastname>.jpg` | Each additional leader or advisor | Square or 4:5, at least 800px, consistent style | When people are confirmed |

## Hero and sections (`src/assets/img/hero/`)
| File | Purpose | Spec | Status |
|---|---|---|---|
| `home-hero.webp` (optional) | Home hero visual | 1920 x 1080 | OPTIONAL. The animated hero works without it |
| `about-story.jpg` | Our Story section image | 1600 x 1000 | OPTIONAL |
| `ecosystem-community.jpg`, `ecosystem-academy.jpg`, `ecosystem-innovation.jpg`, `ecosystem-ventures.jpg`, `ecosystem-global.jpg` | Ecosystem page headers | 1600 x 900 | OPTIONAL. Fall back to gradient and icon |
| `join-community.jpg` | Join page side image | 1200 x 1400 | OPTIONAL |

## Articles (`src/assets/img/articles/`)
One image per published article, 1600 x 900, named after the article slug.

## Partners and ventures (`src/assets/img/partners/`)
| File | Purpose | Status |
|---|---|---|
| `<partner-name>-light.svg`, `<partner-name>-dark.svg` | Partner logos | Only when partners confirm |
| `neticox-hub.svg`, `founda360.svg`, `neticox-afringo.svg` | Venture card logos on the Leadership page | OPTIONAL. Cards work without logos |

## Events (`src/assets/img/events/`)
Optional event banners, 1600 x 900.

## Rules for the agent
1. Optimise every image: resize to the needed widths, export WebP and AVIF with a JPG fallback, add `width`, `height` and lazy loading (except the first visible image).
2. Do not stretch or crop faces badly. Use `object-fit: cover` with a sensible `object-position` for portraits.
3. Where the client has not supplied an image, use real stock photography of real people as set out in `19-IMAGERY-AND-MOCKUPS-GUIDE.md` (balanced mix of Black African and white people, licensed free for commercial use). Never use AI-generated people or places. Use code-built mockups, gradients, SVG and icons where a photo would not help.
4. Record every image's source and licence in `src/assets/img/CREDITS.md`.
5. Provide alt text in the page markup. Decorative images get empty `alt=""`.
