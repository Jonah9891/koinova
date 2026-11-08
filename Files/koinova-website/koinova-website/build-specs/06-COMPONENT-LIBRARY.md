# 06-COMPONENT-LIBRARY.md

Build once, reuse everywhere. Each component lives in `src/css/components.css` (or its own file) with markup patterns documented in `src/pages/_styleguide.html` (an internal page, not in the sitemap).

For every component provide: default, hover, focus-visible, active, disabled, loading, error (where relevant), dark and light, and mobile states.

## Global
| Component | Description |
|---|---|
| Header | Sticky, transparent over hero then solid or glass on scroll. Logo, nav, theme switch, JOIN KOINOVA button |
| Desktop dropdown | Hover and keyboard accessible, `aria-expanded`, closes on Escape and outside click |
| Mobile menu | Full-screen overlay, large links, accordion sub-menus, JOIN button at top, theme switch, focus trap |
| Theme switch | Sun and moon toggle (see design system section 7) |
| Footer | Five columns, newsletter box, legal row, social icons |
| Skip link | "Skip to main content", first focusable element |
| Cookie banner | Accept all, Manage, link to Cookie Policy. Remembers choice |
| Back to top | Appears after scroll, accessible |
| Scroll progress bar | Thin bar at top (optional, subtle) |

## Content blocks
| Component | Description |
|---|---|
| Hero | Headline, sub-headline, tagline, two buttons, animated background (see animation spec) |
| Page header | Smaller hero for inner pages: breadcrumb, H1, intro text |
| Section heading | Eyebrow label, H2, optional intro paragraph |
| Feature card | Icon, title, text, link |
| Ecosystem card | Large card per ecosystem component with icon, tagline, status chip, hover glow |
| Pillar tile | Icon, number, title (eight of these) |
| Value chip | Small label for core values |
| Timeline / pathway | Horizontal on desktop, vertical on mobile (theory of change, programme stages) |
| Split section | Image/visual one side, text the other, reversible |
| Stat counter | Animated number (only with real data) |
| Quote block | Mission or scripture-inspired statement |
| Accordion / FAQ | Accessible disclosure pattern |
| Tabs | Accessible tabs for categories |
| CTA band | Full-width call to action with gradient background |
| Partner strip | Logo row (only with real partners) or invitation text |
| Status chip | "Launching progressively", "Open now", "Coming soon" |
| Empty state | Icon, honest message, one action |
| Article card | Image, category, title, excerpt, date |
| Event card | Date block, title, format, location, register button |
| Opportunity card | Type, title, organisation, deadline, link |
| Person card | Photo, name, role, short bio (for Leadership team, advisors) |
| Featured profile | Large portrait, name, headline, full biography, highlights panel, expertise chips, venture cards (Leadership page) |
| Expertise chip | Small rounded label for skills and areas |
| Venture card | Name, short description, optional link (hidden link if no URL) |
| Breadcrumb | Accessible, schema-ready |

## Forms
| Component | Description |
|---|---|
| Text input, email, textarea | Floating or top labels, helper text, inline validation |
| Select, multi-select chips | Accessible, keyboard friendly |
| Checkbox and radio | Custom styled, large hit area |
| Consent checkbox | With link to policy |
| Submit button | Loading spinner, disabled while sending |
| Form status message | `aria-live="polite"` success and error |
| Multi-step form | Progress indicator, back and next, saves state (used for membership if long) |
| Honeypot and Turnstile | Hidden field and spam widget |

## Feedback
| Component | Description |
|---|---|
| Toast | Short confirmation, auto-dismiss, dismissible |
| Modal | Focus trap, Escape to close, returns focus |
| Skeleton loader | For lists loaded from data files |
| Tooltip | Keyboard and hover |

## Interaction details
- All interactive components are keyboard operable and have visible focus.
- No component relies on hover alone.
- Components use tokens only, so both themes work automatically.
- Animations on components follow `08-ANIMATION-AND-MOTION.md` and honour reduced motion.
