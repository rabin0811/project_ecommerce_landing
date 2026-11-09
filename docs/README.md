# E-commerce Landing — Technical Notes

## Overview

This is a single-page React/Vite marketing and storefront demo. It focuses on layout, animation, responsive design, and visual product presentation rather than a real shopping backend.

## Stack

- React 19
- Vite 8
- Framer Motion
- React Icons
- Oxlint

## Structure

```text
frontend/
  src/            React components and styles
  public/         Static public assets
  dist/           Production build output (ignored by Git)
  vite.config.*   Vite configuration
  package.json    Scripts and dependencies
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install exact dependency versions |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check/build the production bundle |
| `npm run preview` | Serve the production bundle locally |
| `npm run lint` | Run Oxlint |

## Verification evidence

- `npm ci` completed successfully.
- `npm run build` completed successfully.
- `npm run preview -- --port 4176 --strictPort` served `/` with HTTP 200.
- The built CSS, JavaScript, and favicon returned HTTP 200.
- No runtime environment variables are required.

## Known limitations

- No product API, authentication, payment, or persistent cart.
- No automated tests.
- Visual content and product data are bundled in the frontend.

## Deployment

Deploy the contents of `frontend/dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or an object-storage website). The app uses client-side routing only if routes are added later; configure a fallback to `index.html` if that happens.
