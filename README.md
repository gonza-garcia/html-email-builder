# HTML Email Builder

A visual composer for responsive HTML emails. Pick from a library of reusable
blocks (headers, tables, buttons, footers), edit their HTML inline with live
preview, reorder the output and export a single `.html` file ready to paste into
your email client.

Built with **React 18 + Vite + TypeScript + Sass**. 100% client-side: no
backend, no accounts, no data leaves your browser.

## Demo

https://html-email-builder.pages.dev

## Features

- **Component library** grouped by category, with inline code editing (Prism
  syntax highlighting) and live preview.
- **Output builder**: add, reorder and remove blocks; export the final email
  with one click.
- **Image gallery** with copy-to-clipboard URLs and ready-made email templates
  (pre-builts) that download directly.
- **Sanitizer** that validates edited blocks and flags invalid tags, attributes
  or CSS before they reach the output.

## Run locally

```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm run build      # type-check + production build into build/
npm run preview    # serve the production build locally
npm run lint       # ESLint
npm run format     # Prettier
npm run typecheck  # tsc --noEmit
```

## Project layout

- `src/assets/` — the content: block library, gallery, pre-built emails and the
  export wrapper (`templateWrappers.ts`, the Outlook-ready HTML skeleton the
  exported email is assembled from).
- `src/components/` — UI components (editor, presenters, gallery, layout).
- `docs/email-client-guidelines.md` — the email client compatibility rules this
  project follows (Gmail, Outlook, Apple Mail, …) and an audit of the export
  wrapper against them.
- `tools/` — verification scripts: `dump-export.ts` rebuilds the exported HTML
  deterministically (used to prove the export stays byte-identical across
  refactors) and `verify-export.mjs` checks a captured export against the
  wrapper source.

## Notes

- All sample content (images, logos, demo emails) is original placeholder
  material generated for this project — no third-party assets or trademarks.
- The exported email HTML is generated client-side from the block templates in
  `src/assets/`.
- TypeScript is configured in strict mode; the exported HTML is verified to be
  byte-identical across toolchain changes.
