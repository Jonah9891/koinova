# 08-ANIMATION-AND-MOTION.md

Principle: **motion with purpose.** Animation should guide attention, show relationships and add polish. It must never block content, hurt performance or cause discomfort.

## 1. Tools
- **GSAP** (core) and **ScrollTrigger** for scroll-linked and timeline animation.
- **Lenis** (optional) for smooth scrolling. Disable on touch devices if it causes any lag, and always disable under reduced motion.
- CSS transitions for hover, focus and small state changes.
- No heavy video backgrounds. Prefer CSS gradients, SVG and canvas with a small footprint.

## 2. Global rules
1. Respect `prefers-reduced-motion: reduce`: disable parallax, pinning, large translations, marquees and auto-playing effects. Keep simple opacity fades only.
2. Animate only `transform` and `opacity` where possible. Avoid animating layout properties.
3. Content must be visible and usable if JavaScript fails. Start animated elements visible by default, then apply the initial hidden state with JavaScript (`.js` class on `<html>`).
4. Keep durations within tokens (150ms to 1200ms). Hero intros up to 1.2s, everything else 300 to 700ms.
5. Stagger lists by 60 to 100ms.
6. Use `ease-out` for entrances, `ease-in-out` for movement.
7. Animations play once on entry by default. Avoid constant looping, except subtle ambient hero motion.
8. Pause ambient animations when the tab is hidden or the element is off-screen.
9. No layout shift caused by animation (reserve space).
10. Performance budget: no dropped frames on a mid-range phone. Test with CPU throttling.

## 3. Page-load sequence
- Preloader: none by default (a blocking preloader hurts perceived speed). If used, under 800ms, logo mark only.
- Header fades down. Hero lines reveal sequentially (see below).

## 4. Hero (home)
- **Background:** layered blue-family glow (`--glow-blue` over a navy base in dark theme, or white and soft grey in light theme) that drifts slowly (20 to 30s loop), plus a lightweight node-network canvas or SVG: points connected by thin lines that respond gently to the pointer (desktop) and drift on their own (mobile, lower density).
- **Headline:** split into lines or words; each reveals upward with a mask (translateY 100% to 0) and stagger of 80ms.
- **Sub-headline, tagline, buttons:** fade and rise in sequence after the headline.
- **Scroll cue:** a small animated line or chevron.
- **Reduced motion:** static gradient, text fades in only.
- Node density scales with screen size and pauses when off-screen.

## 5. Scroll animations
| Pattern | Use | Details |
|---|---|---|
| Fade up | Cards, text blocks, images | translateY 24px to 0, opacity 0 to 1, once, start at 85% viewport |
| Stagger grid | Pillar tiles, value cards, ecosystem cards | Children stagger 70ms |
| Text reveal | About statement on home | Words fade from 20% to 100% opacity as the user scrolls (scrubbed) |
| Pinned story | Ecosystem section (desktop only, optional) | Section pins while five cards advance horizontally or one by one; fall back to normal stacking on mobile and reduced motion |
| Parallax | Subtle on hero and large images | Max 40px movement; disabled on mobile and reduced motion |
| Counter | Stats (only with real data) | Counts up once when visible |
| Timeline draw | Pathway and theory of change | Connecting line draws progressively as the user scrolls |
| Marquee | Values strip | Slow continuous scroll, pauses on hover, off under reduced motion |
| Progress bar | Top of page | Width mapped to scroll progress |

## 6. Interaction animations
- **Buttons:** hover lift (translateY -2px) with shadow and a soft gradient shift; active press scale 0.98.
- **Primary CTA (JOIN KOINOVA):** gentle glow pulse on load for the first few seconds, then still.
- **Cards:** lift 6px, border brightens, optional cursor-following spotlight gradient (desktop only).
- **Links:** underline grows from left on hover.
- **Navigation dropdowns:** fade and slide 8px, 200ms.
- **Mobile menu:** overlay fades, links stagger up, close icon rotates.
- **Theme switch:** icon morphs from sun to moon (rotate and scale), with a brief colour transition across the page.
- **Form fields:** label floats, focus ring animates in, error shake (small, 2 cycles), success tick draws in.
- **Page transitions (optional):** short fade between pages. Use the View Transitions API where supported; otherwise none.

## 7. Micro-moments
- Success state after sign-up: checkmark draws, soft confetti-like particles in brand colours (respect reduced motion), share buttons rise in.
- Empty states: a gentle floating icon.
- 404: playful but subtle drifting nodes.

## 8. Implementation notes
- Register ScrollTrigger once in `animations.js`. Group animations by page using `data-anim` attributes (for example `data-anim="fade-up"`, `data-anim="stagger"`) so HTML stays clean.
- Use `gsap.matchMedia()` to separate desktop, mobile and reduced-motion behaviour.
- Clean up triggers on resize and page change.
- Call `ScrollTrigger.refresh()` after images and fonts load.
- Avoid `will-change` except during active animation.
- Lazy-load animation scripts for pages that need them, and load the canvas network only on the home hero.

## 9. Testing
- Test at 60fps on desktop and a mid-range Android phone with CPU throttling 4x.
- Test with reduced motion on.
- Test with JavaScript disabled (content must be readable).
- Verify no cumulative layout shift from animation.

## 10. Text animation library
Clean, purposeful text motion. All text must remain readable if animation fails, and every effect has a reduced-motion fallback (plain fade or none). Use GSAP (SplitText is included in current GSAP releases; if unavailable, use a small custom splitter that wraps lines, words or characters in spans with `aria-label` preserved on the parent so screen readers read the original text once).

| Effect | Use on | Details |
|---|---|---|
| **Line mask reveal** | Hero H1, page H1s, large section titles | Each line slides up from behind a mask (`yPercent: 100 → 0`), 0.9s, `power4.out`, stagger 0.08s |
| **Word fade-up** | H2s, intro paragraphs | Words rise 12px and fade in, stagger 0.03s, trigger at 85% viewport, once |
| **Scrubbed word highlight** | Home "About" statement | Words go from 20% to 100% opacity as the user scrolls (scrub), pinned only on desktop |
| **Gradient sheen** | One key phrase in hero H1 | A soft highlight sweeps across the gradient text once after load (1.4s), then stops |
| **Underline draw** | Key links and emphasised words | SVG or pseudo-element underline draws left to right in gold or blue |
| **Character stagger** | Short labels only (eyebrows, 1 to 3 words) | 0.02s stagger, never on long text |
| **Counter** | Real numbers only | Counts up once with `power2.out`, tabular numerals to avoid jitter |
| **Rotating word (optional)** | Hero sub-line, max 3 words (for example Build, Learn, Lead) | Vertical slide swap every 2.5s, pauses on hover and when off-screen, static first word under reduced motion |
| **Text-link arrow** | "Read more" links | Arrow slides 4px right on hover |

Rules:
- Never animate more than one text effect per element.
- Never use typewriter effects for headings, blinking cursors or bouncing letters.
- Headlines must be readable within 1.2 seconds of load.
- Avoid animating body paragraphs longer than 3 lines. Use a simple fade.
- No animation on legal pages or long-form article body.

## 11. Image and mockup motion
- **Photos:** soft reveal with a clip-path or mask wipe (left to right or bottom to top, 0.9s) and a slight inner scale from 1.08 to 1 as it enters. Parallax of at most 30px on large images (desktop only).
- **Image grids:** stagger reveal with 80ms offsets.
- **Mockups (device frames):** enter with a gentle rise and rotateX tilt settling to rest; on scroll, a subtle depth shift (translateY up to 24px) and slight rotation (max 2 degrees). Inside the mockup, the screen content animates through two to three states (cards sliding in, a toggle switching, a progress bar filling), looping slowly and **pausing when off-screen or under reduced motion**.
- **Floating cards** (small UI cards around a mockup): independent slow float (6 to 8s, max 10px). Maximum three per mockup.
- **Cursor spotlight on cards** (desktop only): soft radial highlight in the section's gradient family, off under reduced motion.
- Never auto-play video with sound. Avoid background video unless approved.
