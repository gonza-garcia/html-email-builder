// Verifies a captured export against the local source of truth.
// Usage: node tools/verify-export.mjs <exportFile> [--deny word1,word2] [--deny-host host1]
// Banned words/hosts come from CLI args (or VERIFY_DENY / VERIFY_DENY_HOST env)
// so this tool stays generic and reusable.

import fs from 'node:fs';

const args = process.argv.slice(2);
const expPath = args.find((a) => !a.startsWith('--'));
const denyWords = (
  args.includes('--deny') ? args[args.indexOf('--deny') + 1] : process.env.VERIFY_DENY || ''
)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const denyHosts = (
  args.includes('--deny-host')
    ? args[args.indexOf('--deny-host') + 1]
    : process.env.VERIFY_DENY_HOST || ''
)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

// normalize: CRLF->LF (git checkout on Windows), trim capture artifacts
const exportHtml = fs.readFileSync(expPath, 'utf8').replace(/\r\n/g, '\n').trimStart();

const wrapPath = ['../src/assets/templateWrappers.ts', '../src/assets/templateWrappers.js']
  .map((p) => new URL(p, import.meta.url))
  .find((u) => fs.existsSync(u));
const wrap = fs.readFileSync(wrapPath, 'utf8').replace(/\r\n/g, '\n');

function grab(src, name, anchor) {
  const i = src.indexOf(anchor);
  const seg = src.slice(i);
  const m = new RegExp(name + ':\\s*`([\\s\\S]*?)`').exec(seg);
  // source applies .trim() to wrapper values
  return m[1].trim();
}

const top = grab(wrap, 'topWrapper', 'export const htmlEmailWrapper');
const bottom = grab(wrap, 'bottomWrapper', 'export const htmlEmailWrapper');

// hosts always allowed in an export: the email DTD namespace + generic example domain
const ownHost = process.env.EXPORT_OWN_HOST || 'html-email-builder.pages.dev';

const checks = [
  ['starts with topWrapper', exportHtml.startsWith(top)],
  ['ends with bottomWrapper', exportHtml.trimEnd().endsWith(bottom.trimEnd())],
  ['contains mso DPI block', exportHtml.includes('o:OfficeDocumentSettings')],
  ['contains VML namespace', exportHtml.includes('urn:schemas-microsoft-com:vml')],
  [
    'no forbidden words',
    !denyWords.some((w) => exportHtml.toLowerCase().includes(w.toLowerCase())),
  ],
  [
    'no forbidden hosts',
    !denyHosts.some((h) => exportHtml.toLowerCase().includes(h.toLowerCase())),
  ],
  [
    'no foreign domains',
    !new RegExp(
      'https?:\\/\\/(?!www\\.w3\\.org|example\\.com|' +
        ownHost.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
        ')[^\\s"\'`<>]+',
      'i',
    ).test(exportHtml),
  ],
];

let fail = 0;
for (const [name, ok] of checks) {
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + name);
  if (!ok) fail++;
}
console.log(fail ? `\n${fail} FAILED` : '\nALL PASS');
process.exit(fail ? 1 : 0);
