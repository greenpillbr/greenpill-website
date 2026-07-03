# GreenPill Brasil Website

React rebuild of the GreenPill Brasil home page, extracted from the Framer project **GreenPill-Brasil-copy** and aligned with the published reference at [greenpill.framer.ai](https://greenpill.framer.ai/).

## Stack

- Vite + React + TypeScript
- framer-motion for animations
- CSS Modules + global design tokens
- Responsive breakpoints matching Framer:
  - Desktop: `>= 1200px`
  - Tablet: `810px – 1199.98px`
  - Phone: `<= 809.98px`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Assets

Download/update local Framer assets:

```bash
npm run download-assets
```

Assets are stored in `src/assets/images` and `src/assets/fonts`.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub/GitLab.
2. In Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 20 or later
4. Deploy.

The repo includes `public/_redirects` for SPA fallback routing on Cloudflare Pages.

### Optional: Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name=greenpill-website
```

## Sections

Home page sections (in order):

Navigation → Hero → Colapso → Arma Digital → Contato → O que é GreenPill → Projetos → Faça Parte → Serviços → Participe do Movimento → Parceiros → FAQ → Footer

## Source

- Framer MCP project page: `/` (`G_yRQtGg5`)
- Reference site: https://greenpill.framer.ai/
