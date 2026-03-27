# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Type-check + build static site
npm run preview   # Preview built output
```

There are no test or lint scripts configured.

## Architecture

Personal website / CV built as a **fully static site** (no client-side JS after build) using:

- **[vite-plugin-ssr](https://vite-plugin-ssr.com/)** for SSR + static prerendering (`prerender: true`)
- **React 19** (server-render only — `_default.page.client.tsx` is intentionally minimal)
- **Tailwind CSS v4** (imported via `@import 'tailwindcss'` in `src/index.css`)
- **MDX** support via `@mdx-js/rollup`

### Routing

File-based routing via vite-plugin-ssr: files matching `src/pages/*.page.server.tsx` become routes. The filename maps directly to the URL path (e.g. `cv.page.server.tsx` → `/cv`, `cvOld.page.server.tsx` → `/cv-old`).

### Two CV versions

- **`src/pages/cv.page.server.tsx`** — Current CV: self-contained two-column layout (dark navy sidebar + light main content). All content is hardcoded inline. Print styles and a QR code are built in.
- **`src/pages/cvOld.page.server.tsx`** — Older card-based layout that pulls content from `src/data.json` using reusable components (`src/sections/`, `src/components/`).

### Content data

`src/data.json` drives the old CV layout (info, skills, experience, education). The current CV (`cv.page.server.tsx`) has its content hardcoded directly in JSX.

### Print / PDF

The CV pages use Tailwind's `print:` variant extensively for print-specific styling. The PDF at `/download/cv.pdf` is a manually maintained static file in `public/download/`.
