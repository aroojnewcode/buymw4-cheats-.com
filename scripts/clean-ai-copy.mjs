import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['BuyMW4Cheats Editorial', 'Modern Warfare Cheats'],
  ['BuyMW4Cheats Community Forum', 'Modern Warfare Cheats Forum'],
  ['BuyMW4Cheats Blog', 'Modern Warfare Cheats Blog'],
  ['BuyMW4Cheats Support', 'Modern Warfare Cheats Support'],
  ['Join BuyMW4Cheats on Discord', 'Join Modern Warfare Cheats on Discord'],
  ['BuyMW4Cheats home', 'Modern Warfare Cheats home'],
  ['BuyMW4Cheats', 'Modern Warfare Cheats'],
  ["TITLE_PREFIX = 'Modern Warfare Cheats & Hacks'", "TITLE_PREFIX = 'Modern Warfare Cheats'"],
  ['humanized Aimbot', 'smooth aimbot'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing Ranked with modern warfare aimbot means smooth aimbot—not instant bot bursts that draw reports.',
    'Ranked Modern Warfare aimbot works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private modern warfare cheats for Windows PC Multiplayer and Warzone—not console lobby codes. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Modern Warfare cheats for Windows PC Multiplayer and Warzone. Check status before you queue after a patch.',
  ],
  [
    'maintains private modern warfare cheats for Windows PC Multiplayer and Warzone. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Modern Warfare cheats for Windows PC Multiplayer and Warzone. Check status before you queue after a patch.',
  ],
  [
    'maintains private modern warfare cheats for Windows PC Multiplayer and Warzone. Check live status before every patch-day queue.',
    'sells Modern Warfare cheats for Windows PC Multiplayer and Warzone. Check status before you queue after a patch.',
  ],
  [
    'maintains private modern warfare cheats for Windows PC Multiplayer and Warzone.',
    'sells Modern Warfare cheats for Windows PC Multiplayer and Warzone.',
  ],
  [
    'ships a modular external suite for Windows PC Ranked—not lobby cheat codes. Aimbot tracks targets, loot assist clears zones, ESP wallhack exposes hostile players, and utility tools like Radar Hack and Loadout Changer round out the toolkit. This is the complete feature map across',
    'sells external Modern Warfare cheats for PC Ranked. Aimbot, loot assist, ESP wallhack, radar and Loadout Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}
