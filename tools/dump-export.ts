// Deterministic export dump: rebuilds the exact HTML that "Create HTML" would
// download, straight from the data modules + the separator literals in App.
// Used to prove the exported email is byte-identical across refactors.
//
// Run: npx --yes esbuild tools/dump-export.ts --bundle --platform=node --format=esm \
//        --outfile=%TEMP%/dump-export.mjs && node %TEMP%/dump-export.mjs <outfile.html>

import fs from 'node:fs';
import path from 'node:path';

import { htmlEmailWrapper } from '../src/assets/templateWrappers';
import { originalComponents } from '../src/assets/myMailComponents';

// Run from the repo root (the bundle may live anywhere).
const root = process.cwd();

function readAppSource(): string {
  for (const candidate of ['src/App.tsx', 'src/App.jsx', 'src/App.js']) {
    const p = path.join(root, candidate);
    if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8');
  }
  throw new Error('App source not found');
}

// The join separators are template literals in App; extract them from source so
// this dump can never drift from what the app actually produces.
function extractSeparators(appSource: string): [string, string] {
  const afterStringCode = /output\.stringCode\s*\+\s*`([\s\S]*?)`/.exec(appSource);
  const joinSeparator =
    /htmlEmailWrapper\.bottomWrapper[,]?\s*\]\.join\(`([\s\S]*?)`\)/.exec(appSource);
  if (!afterStringCode || !joinSeparator) {
    throw new Error('Could not extract join separators from App source');
  }
  return [afterStringCode[1], joinSeparator[1]];
}

const [sepCode, sepJoin] = extractSeparators(readAppSource());

const outputs = originalComponents.map((c) => ({ id: c.id, stringCode: c.stringCode }));

const jointOutput = outputs.reduce((jointCode: string, output: { stringCode: string }) => {
  return jointCode.concat(output.stringCode + sepCode);
}, '');

const htmlCode = [htmlEmailWrapper.topWrapper, jointOutput, htmlEmailWrapper.bottomWrapper].join(sepJoin);

const outFile = process.argv[2] ?? path.join(root, 'export-dump.html');
fs.writeFileSync(outFile, htmlCode, 'utf8');
console.log(`wrote ${outFile} (${htmlCode.length} chars, ${outputs.length} components)`);
