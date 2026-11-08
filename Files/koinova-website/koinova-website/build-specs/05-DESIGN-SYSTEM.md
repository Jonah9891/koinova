# 05-DESIGN-SYSTEM.md

All values are CSS custom properties in `src/css/tokens.css`. Never hard-code colours, spacing or radii in components.

## 1. Colour

### Official KOINOVA palette (supplied by the client)
| Name | Hex | Token |
|---|---|---|
| Deep Navy Blue (primary) | `#101C3A` | `--brand-navy` |
| Emerald Green (secondary) | `#0D9B72` | `--brand-emerald` |
| Champagne Gold (accent) | `#D6AD60` | `--brand-gold` |
| Innovation Blue (supporting) | `#2563EB` | `--brand-blue` |
| White (neutral) | `#FFFFFF` | `--white` |
| Soft Grey (neutral) | `#F3F5F8` | `--soft-grey` |

These six values are fixed. Do not alter them. Only the derived tokens below (dark-mode backgrounds, text-safe shades, muted text) may be tuned, and only to meet contrast rules.

### Verified contrast (WCAG ratios, calculated)
| Pair | Ratio | Use |
|---|---|---|
| Navy on White | 16.8 | Body text, light theme |
| Navy on Soft Grey | 15.4 | Body text on grey sections |
| White on Navy | 16.8 | Text on navy surfaces |
| Navy on Gold | 8.0 | **JOIN KOINOVA button text**, gold chips |
| Gold on Navy | 8.0 | Gold text and icons in dark theme |
| Navy on Emerald | 4.8 | Emerald buttons (navy text) |
| White on Innovation Blue | 5.2 | Blue buttons, links on white |
| Innovation Blue on White | 5.2 | Links, light theme |
| Innovation Blue on Soft Grey | 4.7 | Links on grey sections |
| White on Emerald | 3.5 | **Do not use for small text** (large text or graphics only) |
| Emerald on White | 3.5 | **Do not use for small text** |
| Gold on White | 2.1 | **Never use gold as text or focus ring on white** |
| Innovation Blue on Navy | 3.3 | **Do not use for text on navy** (graphics only) |

Safe derived shades:
| Token | Value | Why |
|---|---|---|
| `--emerald-text-light` | `#0A7A5A` | Emerald text/buttons with white text on light backgrounds (5.3) |
| `--emerald-text-dark` | `#3DD6A3` | Emerald text on dark backgrounds (9.1 on navy) |
| `--gold-text-light` | `#8F6B1A` | Small gold-toned text on light backgrounds (4.9) |
| `--blue-text-dark` | `#7FA8FF` | Blue links on dark backgrounds (7.2 on navy) |

### Colour roles
- **Navy:** foundation. Headings and body text in light theme, main surfaces in dark theme, primary buttons in light theme.
- **Emerald:** growth and impact. Icons, highlights, status chips (Open now), progress, success states, gradient glows.
- **Gold:** premium accent. The **JOIN KOINOVA** primary call to action, key highlights, dividers, awards and "featured" badges, focus ring in dark theme.
- **Innovation Blue:** interaction. Links, primary buttons in dark theme, focus ring in light theme, gradient partner colour.
- **White and Soft Grey:** clean backgrounds and alternating sections in light theme.
- Use gold sparingly so it keeps its impact: one gold element per viewport is a good guide.

### Semantic tokens: Light theme (`:root`)
```
--bg:              var(--white);        /* #FFFFFF */
--bg-subtle:       var(--soft-grey);    /* #F3F5F8 */
--surface:         #FFFFFF;
--surface-raised:  #FFFFFF;
--border:          #DDE3EC;
--text:            var(--brand-navy);   /* #101C3A */
--text-muted:      #4B5A73;
--text-on-brand:   #FFFFFF;
--link:            var(--brand-blue);   /* #2563EB */
--accent-text:     var(--gold-text-light);
--success-text:    var(--emerald-text-light);
--focus-ring:      var(--brand-blue);

/* Buttons */
--btn-primary-bg:     var(--grad-blue);
--btn-primary-text:   #FFFFFF;
--btn-cta-bg:         var(--grad-gold);    /* JOIN KOINOVA */
--btn-cta-text:       var(--brand-navy);
--btn-emerald-bg:     linear-gradient(135deg, #0D9B72, #3DD6A3);
--btn-emerald-text:   var(--brand-navy);
--heading-gradient:   linear-gradient(90deg, #101C3A, #2563EB);

--success: #0A7A5A;  --warning: #8F6B1A;  --error: #C62828;  --info: #2563EB;
--shadow-sm: 0 1px 2px rgba(16,28,58,.06);
--shadow-md: 0 8px 24px rgba(16,28,58,.08);
--shadow-lg: 0 24px 60px rgba(16,28,58,.14);
```

### Semantic tokens: Dark theme (`[data-theme="dark"]`)
```
--bg:              #0A1226;             /* deeper than brand navy so navy surfaces stand out */
--bg-subtle:       #0D1730;
--surface:         var(--brand-navy);   /* #101C3A */
--surface-raised:  #17264A;
--border:          #263558;
--text:            #EEF2FA;
--text-muted:      #A9B6D0;
--text-on-brand:   #FFFFFF;
--link:            var(--blue-text-dark);   /* #7FA8FF */
--accent-text:     var(--brand-gold);
--success-text:    var(--emerald-text-dark);
--focus-ring:      var(--brand-gold);

/* Buttons */
--btn-primary-bg:     linear-gradient(135deg, #2563EB, #1D4ED8);
--btn-primary-text:   #FFFFFF;
--btn-cta-bg:         var(--grad-gold);    /* JOIN KOINOVA */
--btn-cta-text:       var(--brand-navy);
--btn-emerald-bg:     linear-gradient(135deg, #0D9B72, #3DD6A3);
--btn-emerald-text:   var(--brand-navy);
--heading-gradient:   linear-gradient(90deg, #EEF2FA, #7FA8FF);

--success: #3DD6A3;  --warning: #D6AD60;  --error: #FF7A70;  --info: #7FA8FF;
--shadow-sm: 0 1px 2px rgba(0,0,0,.4);
--shadow-md: 0 8px 24px rgba(0,0,0,.45);
--shadow-lg: 0 24px 60px rgba(0,0,0,.55);
```

### Gradients (strict rules)
**Rule 1: one colour family per gradient.** Every gradient uses shades of a single family. Never mix families in one gradient (no blue-to-gold, no emerald-to-blue, no rainbow). The three approved families:

| Family | Token | Stops | Used for |
|---|---|---|---|
| Blue (navy to innovation blue) | `--grad-blue` | `#101C3A` → `#1E3A8A` → `#2563EB` | Hero glow, CTA bands, primary buttons, heading emphasis |
| Emerald (deep to light emerald) | `--grad-emerald` | `#0A7A5A` → `#0D9B72` → `#3DD6A3` | Ventures, impact and growth sections, status accents, emerald buttons |
| Gold (champagne tones) | `--grad-gold` | `#C79A45` → `#D6AD60` → `#EBCB8B` | JOIN KOINOVA button, premium highlights, dividers |

```
--grad-blue:    linear-gradient(135deg, #101C3A 0%, #1E3A8A 50%, #2563EB 100%);
--grad-emerald: linear-gradient(135deg, #0A7A5A 0%, #0D9B72 50%, #3DD6A3 100%);
--grad-gold:    linear-gradient(135deg, #C79A45 0%, #D6AD60 50%, #EBCB8B 100%);

/* ambient background glows: single family only, low opacity */
--glow-blue:    radial-gradient(60% 60% at 75% 15%, color-mix(in srgb, #2563EB 30%, transparent), transparent 70%);
--glow-emerald: radial-gradient(60% 60% at 20% 20%, color-mix(in srgb, #0D9B72 26%, transparent), transparent 70%);
--glow-gold:    radial-gradient(50% 50% at 50% 0%,  color-mix(in srgb, #D6AD60 22%, transparent), transparent 70%);
```
Each section uses **one** family for its gradients. Example: Home hero = blue family; Ventures page = emerald family; membership CTA = gold button on a blue band.

**Rule 2: gradient text (headings).** Gradient text is for emphasis, not decoration. Apply it to one key word or phrase in a headline (for example "Faith Meets Innovation"), or to a whole hero headline at most. Never on body text, and no more than one gradient heading per viewport. Text gradients must keep contrast on the background:

| Theme | Family | Text gradient | Contrast |
|---|---|---|---|
| Light | Blue | `linear-gradient(90deg, #101C3A, #2563EB)` | 16.8 to 5.2 (passes) |
| Light | Emerald (large headings only, 24px+ bold) | `linear-gradient(90deg, #0A7A5A, #0D9B72)` | 5.3 to 3.5 (large text only) |
| Light | Gold | **Not allowed** (2.1 on white) | n/a |
| Dark | Blue | `linear-gradient(90deg, #EEF2FA, #7FA8FF)` | 16.6 to 7.9 (passes) |
| Dark | Emerald | `linear-gradient(90deg, #3DD6A3, #0D9B72)` | 10.1 to 5.3 (passes) |
| Dark | Gold | `linear-gradient(90deg, #D6AD60, #EBCB8B)` | 8.9 to 11.9 (passes) |

Implementation: `background: <gradient>; -webkit-background-clip: text; background-clip: text; color: transparent;` with a solid `color` fallback and `forced-colors` support. Do not animate gradient text constantly. A single sheen sweep on load is allowed (see `08-ANIMATION-AND-MOTION.md`).

**Rule 3: gradient buttons (CTA shapes).**
| Button | Gradient | Text | Contrast |
|---|---|---|---|
| JOIN KOINOVA (CTA, both themes) | `--grad-gold` | Navy `#101C3A` | 6.5 to 10.8 |
| Primary, light theme | `--grad-blue` | White | 16.8 to 5.2 |
| Primary, dark theme | `linear-gradient(135deg, #2563EB, #1D4ED8)` | White | 5.2 to 6.7 |
| Emerald (impact actions only) | `linear-gradient(135deg, #0D9B72, #3DD6A3)` | Navy | 4.8 to 9.1 |
| Secondary | None. Outline with 2px border and no fill | `--text` | n/a |
- Shape: pill (`--radius-pill`) for primary and CTA buttons, with comfortable padding (14px 28px). Use rounded rectangles (`--radius-md`) for compact in-card buttons.
- Hover: background-position shift (gradient slides), lift 2px, soft shadow in the same colour family. Optional single shine sweep, never a looping neon glow.
- Never place a gradient button on a background of a different family with clashing contrast. Gold button on blue or navy surfaces, blue button on white or grey, emerald button on navy or white.
- Maximum one gradient CTA per viewport so the main action stays obvious.

**Rule 4: gradient surfaces.** Large gradient sections (CTA bands, hero) use `--grad-blue` plus a gold button. Cards and panels stay flat (solid surface, subtle border). Do not put gradients behind long text.

**Rule 5: banned.** Purple, pink, orange or rainbow gradients; mesh-gradient blobs on every section; gradient borders on every card; gradients behind body copy; animated rainbow shimmer.

### Contrast rules
- Body text: at least 4.5:1. Large text and UI components: at least 3:1.
- Verify every token pair in both themes. Fix tokens, not individual components.
- Never rely on colour alone to convey meaning.
- Never put white or gold text on emerald, gold text on white, or blue text on navy (see table).

## 2. Typography
Recommended (self-host, `font-display: swap`, subset to Latin plus needed extensions):
- **Headings:** Sora (or Plus Jakarta Sans), weights 600 and 700
- **Body and UI:** Inter, weights 400, 500 and 600
- **Mono (rare):** JetBrains Mono

If the brand fonts differ, replace tokens only.

### Fluid type scale (`clamp`)
```
--fs-xs:   clamp(0.75rem, 0.73rem + 0.1vw, 0.8125rem);
--fs-sm:   clamp(0.875rem, 0.85rem + 0.12vw, 0.9375rem);
--fs-base: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
--fs-lg:   clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem);
--fs-xl:   clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem);
--fs-2xl:  clamp(1.75rem, 1.4rem + 1.6vw, 2.5rem);
--fs-3xl:  clamp(2.25rem, 1.6rem + 3vw, 3.75rem);
--fs-hero: clamp(2.75rem, 1.6rem + 5.5vw, 6rem);
```
- Line height: body 1.65, headings 1.1 to 1.25.
- Max line length for paragraphs: 65 to 75 characters.
- Letter spacing: slightly tight on large headings (-0.02em).

## 3. Spacing and layout
- Base unit: 4px. Scale: `--space-1` (4) to `--space-10` (160).
- Section vertical padding: `clamp(4rem, 8vw, 8rem)`.
- Container max width: 1200px (content), 1400px (wide), 720px (reading).
- Grid: 12 columns desktop, 8 tablet, 4 mobile. Gutter 24px (16px mobile).
- Breakpoints (mobile-first): `480`, `768`, `1024`, `1280`, `1536`.

## 4. Shape and elevation
- Radii: `--radius-sm` 8px, `--radius-md` 14px, `--radius-lg` 24px, `--radius-pill` 999px.
- Cards use `--radius-lg`, subtle border and `--shadow-md` on hover.
- Glass effect (use sparingly): `backdrop-filter: blur(14px)` with a translucent surface and border. Provide a solid fallback.

## 5. Motion tokens
```
--ease-out:    cubic-bezier(.22, 1, .36, 1);
--ease-in-out: cubic-bezier(.65, 0, .35, 1);
--dur-fast: 150ms;  --dur-base: 300ms;  --dur-slow: 600ms;  --dur-hero: 1200ms;
```
Detailed behaviour in `08-ANIMATION-AND-MOTION.md`.

## 6. Core component styling rules
- **Buttons:** primary (`--btn-primary-bg`, a blue-family gradient), CTA (`--btn-cta-bg`, gold-family gradient), emerald (`--btn-emerald-bg`, emerald-family gradient), secondary (outline using `--text`), ghost (text). See gradient Rule 3. Minimum 44px touch target. Visible focus ring in `--focus-ring`. Hover lifts 2px with shadow. Disabled and loading states required.
- **Primary CTA (JOIN KOINOVA):** Champagne Gold gradient (`--grad-gold`) fill with Deep Navy text in both themes. It is the most visually prominent element in the header on every page. Use gold CTA buttons for membership actions only, so the colour keeps its meaning.
- **Links:** underlined or clearly distinguishable, with hover and focus states.
- **Forms:** visible labels (no placeholder-only labels), clear error text under the field, 44px minimum control height.

## 7. Dark and light mode (required)
### Behaviour
1. On first visit, follow `prefers-color-scheme`.
2. The user can switch at any time with the header toggle (also in the mobile menu).
3. Save the choice in `localStorage` under `koinova-theme` (`"light"` or `"dark"`).
4. If the user has not chosen, keep following system changes live.
5. Apply the theme **before first paint** using a tiny inline script in `<head>` to prevent a flash of the wrong theme.
6. Set `color-scheme: light dark` and update `<meta name="theme-color">` to match.

### Bootstrap script (inline in `<head>`)
```html
<script>
(function () {
  try {
    var saved = localStorage.getItem('koinova-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
</script>
```

### Switch component
- A real `<button>` with `aria-pressed` and an accessible label ("Switch to dark mode" / "Switch to light mode").
- Sun and moon icons with a smooth morph or rotate animation (respect reduced motion).
- Visible focus state. Minimum 44px target.
- Smooth theme transition: briefly apply `transition` on background-color and color (200 to 300ms) while switching, then remove to avoid performance cost.

### Theme-aware assets
- Logo: light and dark variants swapped by theme.
- Images with transparent backgrounds or shadows must look right on both. Provide dark-optimised hero artwork if needed.
- Gradients and glows are stronger in dark mode, subtler in light mode.
- Charts, illustrations and icons use `currentColor` or tokens.

### Testing
Every page and component must be checked in both themes for contrast, readability, and image and shadow quality.

## 8. Iconography and imagery
See `04-BRAND-AND-VOICE-GUIDE.md`. Icons inline as SVG with `currentColor`.

## 9. Accessibility tokens
- Focus ring: 3px `--focus-ring` with 2px offset, visible on all interactive elements.
- Minimum touch target 44 x 44px.
- Reduced motion: remove parallax, pinned scroll scenes and large movements; keep simple fades.
