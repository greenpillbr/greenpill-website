# AGENTS.md

Guidance for AI agents working on the GreenPill Brasil website.

## Keep this file updated

**Always update `AGENTS.md` when your changes affect project structure, conventions, scripts, section order, key components, data modules, assets layout, breakpoints, deploy setup, or how agents should work on this repo.**

Do this in the same change set as the code (or immediately after). Do not leave this file stale. If you add, remove, rename, or relocate something listed here, edit this document to match.

## What this project is

Manual React rebuild of the GreenPill Brasil **home page**, sourced from the Framer project **GreenPill-Brasil-copy** and aligned with the published reference:

- Live reference: https://greenpill.framer.ai/
- Framer home page node: `G_yRQtGg5`

Framer’s paid React Export is not used. Layout, copy, colors, fonts, and assets are reconstructed from Framer MCP XML and/or the published site (including `svgContainer` / SVG symbol defs). Prefer the live site when MCP is incomplete or locked frames omit graphics.

Target host: **Cloudflare Pages** (`public/_redirects` SPA fallback).

## Stack

| Piece | Choice |
| --- | --- |
| Build | Vite 7 |
| UI | React 19 + TypeScript |
| Animation | `framer-motion` |
| Styles | CSS Modules per component/section + global tokens |
| Deploy | Cloudflare Pages → `dist` |

Scripts (`package.json`):

- `npm run dev` — local dev server
- `npm run build` — `tsc -b && vite build`
- `npm run preview` — preview production build
- `npm run download-assets` — download Framer CDN assets into `src/assets` (`scripts/download-assets.mjs`)

## Repository layout

```text
.
├── AGENTS.md                 # This file (agents must keep it current)
├── README.md                 # Human-oriented overview and deploy notes
├── package.json
├── vite.config.ts
├── index.html
├── public/
│   ├── _redirects            # Cloudflare Pages SPA fallback
│   └── favicon.svg
├── scripts/
│   └── download-assets.mjs   # Asset download helper
└── src/
    ├── main.tsx              # React entry
    ├── App.tsx               # Shell: Navigation + sections + Footer
    ├── vite-env.d.ts
    ├── assets/
    │   ├── fonts/            # Local fonts (e.g. PP Supply Sans)
    │   ├── images/           # Local images/SVGs (bundled via Vite)
    │   └── manual-downloaded-assets/ # Assets added by hand (e.g. arara.svg); import directly
    ├── data/
    │   ├── content.ts        # Copy, links, cards, nav, asset() helper
    │   ├── leafShapes.ts     # Hero edge leaf SVG strings
    │   └── sunShapes.ts      # Hero sun layer SVG strings
    ├── hooks/
    │   └── useRepulsionEffect.ts
    ├── styles/
    │   ├── global.css        # Imports tokens/fonts/typography + base
    │   ├── tokens.css        # Colors, fonts, breakpoints, nav height
    │   ├── fonts.css         # @font-face + Google Fonts Inter
    │   └── typography.css    # .h0–.h6, .p-lg, etc.
    ├── components/           # Reusable UI (folder per component)
    └── sections/             # Page sections (folder per section)
```

Each component/section folder typically has:

- `Name.tsx`
- `Name.module.css`

## Page composition (`src/App.tsx`)

Order on the home page:

1. `Navigation` (fixed header)
2. `Hero`
3. `Descoordena`
4. `ArmaDigital`
5. `Contato`
6. `OQueGreenpill`
7. `Projetos`
8. `FaAParte`
9. `Servicos`
10. `Participe` (`id="participe"` for nav anchors)
11. `Parceiros`
12. `Faq`
13. `Footer`

## Key components

| Component | Role |
| --- | --- |
| `Navigation` | Full-width green header, logo SVG, nav items, yellow “Fale conosco” CTA |
| `Button` | Primary / secondary CTAs |
| `Leaves` | Hero edge foliage (inline SVGs from `leafShapes.ts`) |
| `HeroSun` | Hero bottom sun: layered SVGs from `sunShapes.ts`, rotating bursts |
| `FloatingLeaves` | Decorative leaf images (used outside Hero where needed) |
| `Ticker` | Horizontal image marquee |
| `Accordion` | FAQ expand/collapse |
| `Particles` | Background particle images |
| `Astronaut` | Contact section astronaut + mouse repulsion |

## Data and assets

- **Copy, links, card lists, nav:** `src/data/content.ts`. Use `asset('filename.ext')` for files under `src/assets/images/`.
- **Hero leaf vectors:** `src/data/leafShapes.ts` (inline SVG strings).
- **Hero sun layers:** `src/data/sunShapes.ts` (back-to-front: `rays`, `ring`, `burst`, `glow`, `core`).
- Prefer local assets over remote Framer CDN URLs in runtime code.
- New Framer CDN assets: add to `scripts/download-assets.mjs` and run `npm run download-assets`, or place files under `src/assets/` and register them in `content.ts` / data modules as appropriate.

## Styling conventions

- Design tokens live in `src/styles/tokens.css` (colors, `--font-display` / `--font-body`, `--container-max`, `--nav-height`, breakpoints).
- Breakpoints (match Framer):
  - Desktop: `>= 1200px`
  - Tablet: `810px` – `1199.98px`
  - Phone: `<= 809.98px`
- Prefer CSS Modules for component/section styles; use global typography classes (`h0`, `p-lg`, …) for text styles.
- In CSS Modules, combine classes with template strings: `` `${styles.a} ${styles.b}` `` (do not write `styles.a styles.b`).
- Keep `@import` rules first in CSS files (PostCSS requirement).

## Working conventions for agents

1. **Match the live site** when fixing visual/layout issues: https://greenpill.framer.ai/. Use Framer MCP (`getNodeXml`, etc.) when available; fall back to published HTML/SVG symbols if nodes are locked or incomplete.
2. **Minimize scope** — change only what the task requires; match existing naming and patterns.
3. **Do not edit `node_modules`.**
4. **Do not commit** unless the user explicitly asks.
5. After structural or convention changes, **update this `AGENTS.md`** (see top rule).
6. Verify with `npm run build` when changes affect compile/runtime.

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Node: 20+
- SPA routing: `public/_redirects`
