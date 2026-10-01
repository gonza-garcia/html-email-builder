# HTML Email Builder

A visual composer for responsive HTML emails. Pick from a library of reusable
blocks (headers, tables, buttons, footers), edit their HTML inline with live
preview, reorder the output and export a single `.html` file ready to paste into
your email client.

Built with **React 17 + Create React App + Sass**. 100% client-side: no backend,
no accounts, no data leaves your browser.

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
npm start        # dev server on http://localhost:3000
npm run build    # production build into build/
```

## Notes

- All sample content (images, logos, demo emails) is original placeholder
  material generated for this project — no third-party assets or trademarks.
- The exported email HTML is generated client-side from the block templates in
  `src/assets/`.
