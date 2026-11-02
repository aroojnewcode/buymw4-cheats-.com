/**
 * Fail if forbidden game/brand leftovers remain in site copy.
 * Run: node scripts/verify-locales.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const SCAN = path.join(root, 'src');

const FORBIDDEN = [
  /\baion\b/i,
  /\bfortnite\b/i,
  /\bdota\b/i,
  /\bncsoft\b/i,
  /\belyos\b/i,
  /\basmodian\b/i,
  /\bAbyss\b/i,
  /\babismo\b/i,
  /\babîme\b/i,
  /어비스/,
  /深淵/,
  /アビス/,
];

const ALLOW_PATH = /astro\.config\.mjs|checkout-redirects|redirects\.mjs/;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|astro|mjs|json|md)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const hits = [];
for (const file of walk(SCAN)) {
  const rel = path.relative(root, file);
  if (ALLOW_PATH.test(rel)) continue;
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const re of FORBIDDEN) {
      if (re.test(line)) {
        hits.push(`${rel}:${i + 1}: ${line.trim().slice(0, 120)}`);
        break;
      }
    }
  });
}

if (hits.length) {
  console.error(`Found ${hits.length} forbidden leftover(s):\n`);
  console.error(hits.slice(0, 80).join('\n'));
  if (hits.length > 80) console.error(`… and ${hits.length - 80} more`);
  process.exit(1);
}

console.log('verify-locales: OK (no aion/fortnite/dota/ncsoft leftovers in src/)');
