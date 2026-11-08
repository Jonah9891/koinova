# DECISIONS.md

Log of technical and design decisions, one line each.

- 2026-11-08: Initialized project with vanilla HTML/CSS/JS static build pipeline using Node.js without heavy bundlers or frontend frameworks.
- 2026-11-08: Selected self-hosted static assets copied directly to `dist/` with immutable caching headers in `vercel.json`.
- 2026-11-08: Implemented build script with recursive HTML partial injection (`<!-- @include head -->`, `<!-- @include header -->`, `<!-- @include footer -->`).
- 2026-11-08: Set up standalone development web server in `scripts/dev.js` using Node native `http` module with MIME typing and automatic build on start to avoid heavy dev toolchains.
- 2026-11-08: Sourced real stock photography depicting real tech professionals from Unsplash (balanced mix of Black African and white people) per `19-IMAGERY-AND-MOCKUPS-GUIDE.md`.
- 2026-11-08: Synced compiled `index.html` to project root on build for immediate previewing without navigating into build output directories.
- 2026-11-08: Created internal `_styleguide.html` showcasing all token variations, button states (default, hover, active, disabled, loading), form inputs, card variants, and empty state patterns.
