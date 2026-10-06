// Deterministic export dump: rebuilds the exact HTML that "Create HTML" would
// download, straight from the data modules + the shared assembly helpers.
// Used to prove the exported email is byte-identical across refactors.
//
// Run: npx --yes esbuild tools/dump-export.ts --bundle --platform=node --format=esm \
//        --outfile=/tmp/dump-export.mjs && node /tmp/dump-export.mjs <outfile.html>

import fs from 'node:fs';
import path from 'node:path';

import { htmlEmailWrapper } from '../src/assets/templateWrappers';
import { originalComponents } from '../src/assets/myMailComponents';
import { joinOutputBlocks, buildEmailDocument } from '../src/assets/helpers';

// Run from the repo root (the bundle may live anywhere).
const root = process.cwd();

// the same assembly App uses (joinOutputBlocks/buildEmailDocument), so this
// dump can never drift from what the app actually produces
const outputs = originalComponents.map((c, index) => ({ id: index, stringCode: c.stringCode }));

const jointOutput = joinOutputBlocks(outputs);
const htmlCode = buildEmailDocument(jointOutput, htmlEmailWrapper);

const outFile = process.argv[2] ?? path.join(root, 'export-dump.html');
fs.writeFileSync(outFile, htmlCode, 'utf8');
console.log(`wrote ${outFile} (${htmlCode.length} chars, ${outputs.length} components)`);
