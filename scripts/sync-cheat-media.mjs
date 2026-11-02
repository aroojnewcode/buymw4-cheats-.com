/**
 * Download Supabase MW4 cheat screenshots into public/images for offline builds.
 * Source list mirrors src/config/cheat-media.ts (keep in sync).
 *
 * Run: node scripts/sync-cheat-media.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/89ffd662-f17a-4470-ab15-e8c789401030/1793396049171-zvegli-arcane-cod-s2-1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/89ffd662-f17a-4470-ab15-e8c789401030/1793396043149-bqrwg5-arcane-cod-s3-1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1793370469855-xvypsn-the-rick-modern-warfare-4-is-fcking-pathetic-this-is-bad-gvdovce3plq-989x556-0m0.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1793370467372-ce7jvl-the-rick-modern-warfare-4-is-fcking-pathetic-this-is-bad-gvdovce3plq-989x556-0m0.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1793370459111-w6bmu7-the-rick-modern-warfare-4-is-fcking-pathetic-this-is-bad-gvdovce3plq-989x556-0m0.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212557652-tjkjmh-eefan-my-aim-got-me-banned-in-modern-warfare-4-b1kdllicky0-1112x626-5m57s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212547528-9s1cpe-eefan-my-aim-got-me-banned-in-modern-warfare-4-b1kdllicky0-1112x626-5m46s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212498393-ac67hy-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212473119-xvnqr7-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212466566-il05zt-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212434252-uuqu0i-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
];

const GAMEPLAY_FILES = [
  'mw4-esp-wallhack.png',
  'mw4-aimbot-combat.png',
  'mw4-player-esp.png',
  'mw4-radar-hack.png',
  'mw4-auto-aim.png',
  'mw4-loot-radar.png',
  'mw4-loadout-changer.png',
  'mw4-thermal-esp.png',
  'mw4-build-fight-esp.png',
  'mw4-warzone-wallhack.png',
  'mw4-spawn-esp.png',
];

const BLOG_FILES = fs.readdirSync(path.resolve('public/images/blog')).filter((f) => f.endsWith('.png'));

async function download(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');
fs.mkdirSync(gameplayDir, { recursive: true });

for (let i = 0; i < GAMEPLAY_FILES.length; i++) {
  const buf = await download(URLS[i]);
  const out = path.join(gameplayDir, GAMEPLAY_FILES[i].replace(/\.png$/i, '.webp'));
  fs.writeFileSync(out, buf);
  console.log('Wrote', path.relative(process.cwd(), out));
}

for (let i = 0; i < BLOG_FILES.length; i++) {
  const buf = await download(URLS[i % URLS.length]);
  const out = path.join(blogDir, BLOG_FILES[i].replace(/\.png$/i, '.webp'));
  fs.writeFileSync(out, buf);
  console.log('Wrote', path.relative(process.cwd(), out));
}

console.log('Done. Site uses Supabase URLs in src/config/cheat-media.ts; local webp copies are optional fallbacks.');
