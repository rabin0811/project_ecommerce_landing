# project_ecommerce_landing

## E-commerce Landing Page

A responsive e-commerce landing page built with React 19, Vite, Framer Motion, and React Icons. It is a frontend-only demo with product, category, promotional, and cart-style sections.

- Original location: `D:\projects\e-commers`
- Working copy: `D:\PROJECTS_READY\project_ecommerce_landing`
- Stack: React 19, Vite 8, Framer Motion, React Icons

## Folder layout

```text
project_ecommerce_landing/
  frontend/       React/Vite application and production build
  docs/           Project documentation
  .env.example    Environment template (no required variables)
```

## Setup and run

```powershell
cd frontend
npm ci
npm run dev
```

Vite prints a local URL (usually <http://localhost:5173>). For a production preview:

```powershell
npm run build
npm run preview
```

## Verified status (2026-11-09)

- [x] Dependencies installed with `npm ci`
- [x] `npm run build` passed
- [x] Production preview served HTTP 200
- [x] Built CSS, JavaScript, and favicon assets all returned HTTP 200
- [x] No backend or environment variables required

The project has no automated test suite. Verification covered the production build and a live preview with asset checks.

## Notes

- The page is a static frontend demo; cart/checkout actions are UI-only.
- The production build is written to `frontend/dist/` and is ignored by Git.
- Do not commit `node_modules/` or local build output.

## Troubleshooting

- **Port already in use**: run `npm run dev -- --port 5174` or `npm run preview -- --port 4176`.
- **Blank page after opening `dist/index.html` directly**: serve the folder through Vite or another HTTP server; do not open the file with `file://`.
- **Dependency errors**: delete `node_modules/` and run `npm ci` again.
