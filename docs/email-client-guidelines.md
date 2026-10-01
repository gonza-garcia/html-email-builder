# Email Client Compatibility Guidelines

Reference for authoring the block library and the export wrapper of HTML Email
Builder. Email clients are not browsers: rendering engines differ wildly and
design decisions are usually made around the weakest client first. This doc
summarizes the current (2026) landscape, the rules this project follows, and an
audit of the current export wrapper against those rules.

Sources at the bottom. Support data lives at [caniemail.com](https://www.caniemail.com)
(check it before using any CSS property not listed here).

---

## 1. The landscape

| Client                               | Engine         | What it means                                                                                                               |
| ------------------------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Apple Mail / iOS Mail                | WebKit         | Gold standard. Almost anything a browser does works here: media queries, web fonts, `@supports`, dark mode.                 |
| Gmail (Google accounts)              | Proprietary    | Supports `<style>` in `<head>`, media queries on mobile. Strips what it dislikes; no external stylesheets, no JS, no forms. |
| Gmail (non-Google accounts)          | Proprietary    | Strips the `<head>` entirely. **Inline styles or nothing.**                                                                 |
| Outlook Windows (2007+)              | Microsoft Word | The lowest common denominator: table layouts only, no `max-width`, no `border-radius`, no media queries, no `box-shadow`.   |
| Outlook macOS / Outlook.com / mobile | WebKit-ish     | Much closer to Apple Mail.                                                                                                  |
| Yahoo / AOL / others                 | Mixed          | Middle ground. Mostly inline styles + limited `<style>`.                                                                    |

Rough CSS support: Apple Mail ~93%, Samsung/Thunderbird ~80%, most webmail
40–65%, Gmail ~27%, Outlook Windows ~15% (caniemail scoreboard + community
mats). Design around Outlook Windows first, then enhance.

**Never use in email HTML:** JavaScript, forms/inputs, `<iframe>`, `<video>`,
SVG (fails in Gmail/Outlook), external CSS, CSS Grid, `position: fixed`,
web fonts without a solid fallback.

---

## 2. Golden rules

1. **Tables for layout.** Nested `<table role="presentation">` is still the only
   layout that renders identically everywhere. `role="presentation"` keeps
   screen readers from announcing rows/columns of layout tables (accessibility).
2. **Inline styles first.** `<style>` in `<head>` is a progressive enhancement
   (Gmail-with-non-Google-accounts strips it). Anything load-bearing goes in the
   `style` attribute.
3. **Fixed 600px container, width declared twice.** `width="600"` (HTML
   attribute — Word reads it) _and_ `style="width:600px"` (WebKit reads it).
   600–660px is the safe range for desktop preview panes.
4. **Padding lives on `<td>`.** Padding on tables or `<p>` is unreliable;
   padding on cells works in every client.
5. **Fonts: system stacks.** `@font-face` is stripped by Outlook and unreliable
   in Gmail. Use `font-family: Calibri, Helvetica, Arial, sans-serif`-style
   stacks and declare `px` sizes (not `em`/`rem`).
6. **Buttons are tables.** A "bulletproof" button is a single-cell table with
   padding + `bgcolor` + a full-cell link. `border-radius` on buttons is a
   nicety that dies in Outlook Windows — rounded corners there need VML
   (`<v:roundrect>`); treat that as an enhancement, not the base.
7. **Images: absolute URLs + `width`/`height` attributes + `alt`.** Many
   clients block images by default; `alt` text is the fallback. Background
   images (`background-image`) only work as VML (`<v:fill>`) in Outlook
   Windows.
8. **Responsive = fluid-hybrid + media queries as enhancement.** Media queries
   are honored by Apple Mail and mobile Gmail/Outlook, but not by Outlook
   Windows or plain webmail. The baseline layout must work at 100% width
   without any media query ("spongy" fluid-hybrid), with `max-width` as
   desktop constraint and ghost tables (`<!--[if mso]>`) when Outlook needs a
   fixed width.
9. **Dark mode is only half-supported.** Only Apple Mail, Outlook Mac and
   Thunderbird respect `@media (prefers-color-scheme)`; Gmail iOS and Outlook
   Windows auto-invert colors (not controllable). Prefer off-whites
   (`#FAFAFA`) and dark greys (`#222`) over pure white/black so inversion
   doesn't destroy the design.
10. **Accessibility is cheap and expected:** `role="presentation"` on layout
    tables, `alt` on images, `lang` on `<html>`, meaningful link text
    ("View the guide", not "click here"). Some teams also add
    `aria-roledescription="email"` on the body region.
11. **No tracking of unsupported features without checking caniemail.** When in
    doubt, query the feature page; partial support notes matter (e.g.
    `display` is partial in Gmail for `flex`/`grid`).

---

## 3. Client matrix (common features)

| Feature            | Apple Mail | Gmail       | Outlook Win  | Yahoo   |
| ------------------ | ---------- | ----------- | ------------ | ------- |
| Table layout       | yes        | yes         | yes          | yes     |
| `max-width`        | yes        | yes         | **no**       | yes     |
| Media queries      | yes        | mobile only | **no**       | partial |
| `<style>` block    | yes        | yes¹        | partial      | yes     |
| Inline styles      | yes        | yes         | yes          | yes     |
| `border-radius`    | yes        | yes         | **no**       | yes     |
| `box-shadow`       | yes        | **no**      | **no**       | **no**  |
| Web fonts          | yes        | partial     | **no**       | partial |
| Background images  | yes        | yes         | **VML only** | yes     |
| GIF animation      | yes        | yes         | 1st frame    | yes     |
| Dark mode CSS      | yes        | **no**      | **no**       | **no**  |
| JS / forms / video | no         | no          | no           | no      |

¹ Gmail strips the whole `<style>` block when the account is non-Google
(GANGA). Inline anyway.

---

## 4. Audit of `htmlEmailWrapper` (export wrapper)

The wrapper in `src/assets/templateWrappers.ts` is the document the user pastes
into a client. Status against the rules above:

**Already aligned**

- Nested tables with `role="presentation"`, 600px container, width as both
  attribute and style (`rules 1, 3`).
- `<style>` in `<head>` only for resets + utility classes; block content uses
  inline styles (`rule 2`).
- mso DPI block (`o:PixelsPerInch`) and VML/mso namespaces present — required
  for Outlook VML enhancements (`rule 6/7`).
- Font stacks are web-safe (`Calibri, Helvetica, Arial, sans-serif`) (`rule 5`).
- `alt` attributes present in the block library (`rule 7`).
- Buttons in the library are single-cell tables with padding + `bgcolor`
  (`rule 6`).

**Gaps / future work (not changed in the Vite migration — the wrapper stays
byte-identical)**

- `lang="es"` is hardcoded while the app is now generic; should follow the
  email language.
- The `@media (max-width: 599px)` block re-declares `.container600` at a fixed
  600px — it does not make anything fluid. A fluid-hybrid rework would use
  `width: 100%; max-width: 600px` and let the container shrink on mobile.
- `border-radius` / `box-shadow` used inside some blocks degrade to squares in
  Outlook Windows (acceptable; document as progressive enhancement).
- Dark mode: no `color-scheme` meta and no `prefers-color-scheme` block;
  clients will auto-invert. Consider off-white backgrounds when touching
  content.
- `<title>NewEmail</title>` is fixed; some clients show it as inbox preview
  text after the subject line.

**Decision for this phase:** the exported HTML must remain byte-identical to
the pre-migration output, so the wrapper is intentionally untouched. The gaps
above are the backlog if/when the app targets multi-client output explicitly
(e.g. a second "wrapper variant").

---

## 5. Rules for the block library

When authoring or reviewing a component in `src/assets/myMailComponents.ts`:

- Wrap content in tables, never rely on divs for structure.
- All visual styling inline on the innermost possible element; utility classes
  (`.padding-*`, `.bg-color-*`) are fine as a second layer.
- Fixed widths only on `<td width=...>` + matching `style="width:...px"`.
- Links: absolute `https://` URLs (or `mailto:`), descriptive text.
- Images: point to the project's own CDN host (`html-email-builder.pages.dev`)
  or `example.com` placeholders — never third-party hotlinks.
- Keep every block self-contained: it will be concatenated with arbitrary
  neighbors.

---

## 6. Sources

- [Can I email… — support tables for HTML/CSS in emails](https://www.caniemail.com)
  (+ [scoreboard](https://www.caniemail.com/scoreboard), data on [GitHub](https://github.com/hteumeuleu/caniemail))
- [Email on Acid — why set table role to presentation](https://www.emailonacid.com/blog/article/email-development/why-should-i-set-my-table-role-as-presentation)
- [Email on Acid — fluid hybrid design primer](https://www.emailonacid.com/blog/article/email-development/a-fluid-hybrid-design-primer)
- [Envato Tuts+ — responsive HTML email / fluid hybrid method](https://webdesign.tutsplus.com/creating-a-simple-responsive-html-email--webdesign-12978a)
- [Litmus — responsive vs hybrid email design](https://www.litmus.com/blog/understanding-responsive-and-hybrid-email-design)
- Community compatibility matrices (mailviewr, emaillove) — use as a hint,
  verify on caniemail before relying on a feature.

Last reviewed: 2026-10-01 (Phase 2 modernization).
