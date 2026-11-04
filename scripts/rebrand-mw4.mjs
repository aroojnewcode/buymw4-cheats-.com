/**
 * Aion 2 Cheats → Modern Warfare Cheats (buymw4cheats.com).
 * Run from project root: node scripts/rebrand-mw4.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');

const TEXT_EXTS = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.md',
  '.txt',
  '.svg',
  '.html',
  '.webmanifest',
  '.css',
  '.toml',
]);

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline', 'starwind']);
const SKIP_FILES = new Set([
  'rebrand-fortnite.mjs',
  'rebrand-aion2.mjs',
  'rebrand-mw4.mjs',
  'vocab-fortnite.mjs',
  'vocab-aion2.mjs',
  'fetch-fortnite-gameplay.mjs',
]);

const ZADEYO_MW4 =
  'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fmw4';

/** Ordered longest-first replacements (current repo = Aion 2 branded). */
const REPLACEMENTS = [
  ['https://zadeyo.com/go/QRH?to=%2Fproducts%2Faion-2', ZADEYO_MW4],
  ['https://zadeyo.com/products/aion-2', ZADEYO_MW4],
  ['%2Fproducts%2Faion-2', '%2Fproducts%2Fmw4'],
  ['%2Fproducts%2Ffortnite', '%2Fproducts%2Fmw4'],
  ['aion2cheats.net', 'buymw4cheats.com'],
  ['Aion2Cheats', 'BuyMW4Cheats'],
  ['Aion2cheats', 'BuyMW4Cheats'],
  ['aion2cheats', 'buymw4cheats'],
  ['Aion 2 Cheats & Hacks', 'Modern Warfare Cheats & Hacks'],
  ['Aion 2 cheats & hacks', 'Modern Warfare cheats & hacks'],
  ['Aion 2 Cheats', 'Modern Warfare Cheats'],
  ['Aion 2 cheats', 'Modern Warfare cheats'],
  ['aion 2 cheats', 'modern warfare cheats'],
  ['/products/aion-2-cheats', '/products/mw4-cheats'],
  ['products/aion-2-cheats', 'products/mw4-cheats'],
  ['/products/aion-2', '/products/mw4'],
  ['/go/aion-2/', '/go/mw4/'],
  ['/go/aion-2', '/go/mw4'],
  ["checkoutPath('aion2')", "checkoutPath('mw4')"],
  ['checkoutPath("aion2")', 'checkoutPath("mw4")'],
  ["product: 'aion2'", "product: 'mw4'"],
  ['  aion2:', '  mw4:'],
  ["'aion2'", "'mw4'"],
  ['"aion2"', '"mw4"'],
  ['@aion2cheats', '@buymw4cheats'],
  ['aion2cheats-net', 'buymw4cheats-net'],
  ['buyaion2cheats-net', 'buymw4cheats-net'],

  // Blog / guide slugs
  ['how-to-buy-aion-2-cheats-2026', 'how-to-buy-mw4-cheats-2026'],
  ['how-to-use-aion-2-cheat-codes', 'how-to-use-mw4-cheat-codes'],
  ['anticheat-bypass-aion-2-guide', 'ricochet-bypass-mw4-guide'],
  ['aion-2-skill-script-guide', 'mw4-aimbot-combat-guide'],
  ['aion-2-aimbot-pvp-guide', 'mw4-aimbot-ranked-guide'],
  ['aion-2-training-vs-pvp', 'mw4-multiplayer-vs-warzone'],
  ['aion-2-training-tips', 'mw4-multiplayer-tips'],
  ['aion-2-cheats-features-guide', 'mw4-cheats-features-guide'],
  ['aion-2-hwid-spoofer-after-ban', 'mw4-hwid-spoofer-after-ban'],
  ['aion-2-external-cheat-guide', 'mw4-external-cheat-guide'],
  ['aion-2-stream-proof-setup', 'mw4-stream-proof-setup'],
  ['aion-2-costume-changer-guide', 'mw4-loadout-changer-guide'],
  ['aion-2-elite-tier-guide', 'mw4-elite-tier-guide'],
  ['aion-2-esp-wallhack-setup', 'mw4-esp-wallhack-setup'],
  ['aion-2-radar-hack-guide', 'mw4-radar-hack-guide'],
  ['aion-2-training-guide', 'mw4-multiplayer-guide'],
  ['aion-2-lite-vs-pro', 'mw4-lite-vs-pro'],
  ['anticheat-patch-day-checklist', 'ricochet-patch-day-checklist'],
  ['aion-2-skill-script', 'mw4-aimbot-combat'],
  ['aion-2-aimbot-lock', 'mw4-aimbot-lock'],
  ['aion-2-abyss-wallhack', 'mw4-warzone-wallhack'],
  ['aion-2-instance-esp', 'mw4-build-fight-esp'],
  ['aion-2-spawn-esp', 'mw4-spawn-esp'],
  ['aion-2-long-range-esp', 'mw4-long-range-esp'],
  ['aion-2-thermal-esp', 'mw4-thermal-esp'],
  ['aion-2-combat-esp', 'mw4-combat-esp'],
  ['aion-2-group-esp', 'mw4-squad-esp'],
  ['aion-2-chams-esp', 'mw4-chams-esp'],
  ['aion-2-player-esp', 'mw4-player-esp'],
  ['aion-2-esp-wallhack', 'mw4-esp-wallhack'],
  ['aion-2-loot-radar', 'mw4-loot-radar'],
  ['aion-2-radar-hack', 'mw4-radar-hack'],
  ['aion-2-costume-changer', 'mw4-loadout-changer'],
  ['aion-2-auto-aim', 'mw4-auto-aim'],
  ['aion-2-cheats', 'mw4-cheats'],

  // Anti-cheat
  ['NCSOFT anti-cheat', 'Ricochet anti-cheat'],
  ['NCSOFT Anti-Cheat', 'Ricochet Anti-Cheat'],
  ['anti-cheat ban', 'Ricochet ban'],
  ['anti-cheat update', 'Ricochet update'],
  ['anti-cheat patch', 'Ricochet patch'],
  ['anti-cheat patches', 'Ricochet patches'],
  ['anti-cheat enforcement', 'Ricochet enforcement'],
  ['anti-cheat-aware', 'Ricochet-aware'],

  // Platform / game
  ['Aion 2 launcher', 'Battle.net / Steam'],
  ['via the Aion 2 launcher', 'via Battle.net or Steam'],
  ['through the Aion 2 launcher', 'through Battle.net or Steam'],
  ['NCSOFT Terms of Service', 'Activision Terms of Service'],
  ['NCSOFT account', 'Activision account'],
  ['NCSOFT overlay', 'game overlay'],
  ['costume wardrobe', 'loadout menu'],
  ['NCSOFT-approved', 'Activision-approved'],
  ['NCSOFT-sanctioned', 'official'],
  ['NCSOFT review', 'Activision review'],
  ['on NCSOFT', 'on PC'],
  ['reqNcsoft', 'reqPc'],
  ['compatNcsoft', 'compatPc'],

  ['Aion 2 Elite', 'MW4 Elite'],
  ['Aion 2 PC', 'Modern Warfare PC'],
  ['Aion 2 online', 'Modern Warfare online'],
  ['Aion 2 client', 'Modern Warfare client'],
  ['Aion 2 and', 'Modern Warfare and'],
  ['Aion 2 or', 'Modern Warfare or'],
  ['Aion 2,', 'Modern Warfare,'],
  ['Aion 2.', 'Modern Warfare.'],
  ['Aion 2 ', 'Modern Warfare '],
  [' Aion 2', ' Modern Warfare'],
  ['Aion 2', 'Modern Warfare'],
  ['aion 2 ', 'modern warfare '],
  [' aion 2', ' modern warfare'],
  ['aion-2', 'mw4'],

  // MMO → FPS
  ['Open World PvP and instances', 'Multiplayer and Warzone'],
  ['Open World PvP, instances', 'Multiplayer, Warzone'],
  ['Open World PvP or instances', 'Multiplayer or Warzone'],
  ['instances and Abyss PvP', 'Multiplayer and Ranked'],
  ['Abyss PvP and instances', 'Warzone and Multiplayer'],
  ['Abyss PvP or instances', 'Warzone or Multiplayer'],
  ['training instance', 'private match'],
  ['training instances', 'private matches'],
  ['instance preset', 'mode preset'],
  ['instance presets', 'mode presets'],
  ['instance-friendly', 'Warzone-friendly'],
  ['Open World PvP', 'Multiplayer'],
  ['open world PvP', 'multiplayer'],
  ['Training grounds', 'Private match'],
  ['Training ground', 'Private match'],
  ['private instances', 'bot lobbies'],
  ['private instance', 'bot lobby'],
  ['Abyss Arena', 'Ranked Play'],
  ['Abyss PvP', 'Ranked'],
  ['climbing Abyss rank', 'climbing ranked'],
  ['high Abyss rank', 'high ranked'],
  ['live Abyss', 'live Ranked'],
  ['safer Abyss', 'safer Ranked'],
  ['for Abyss PvP', 'for Ranked'],
  ['in Abyss PvP', 'in Ranked'],
  ['before Abyss PvP', 'before Ranked'],
  [' Abyss', ' Ranked'],
  ['Abyss ', 'Ranked '],
  ['Elyos vs Asmodian', 'Multiplayer & Warzone'],
  ['Elyos', 'Ally'],
  ['Asmodian', 'Enemy'],

  ['Costume Changer', 'Loadout Changer'],
  ['costume changer', 'loadout changer'],
  ['costumes', 'operator skins'],
  ['Costume and weapon appearance', 'Operator and weapon camo'],
  ['costume and weapon appearance', 'operator and weapon camo'],
  ['Weapon & wing', 'Weapon & operator'],
  ['wings and exclusive sets', 'operators and exclusive bundles'],
  ['Costume & appearance', 'Operator & camo'],
  ['costume and appearance', 'operator and camo'],
  ['drop and gather locator', 'loot and crate locator'],
  ['drop and gather markers', 'loot and crate markers'],
  ['drop and gather', 'loot and crates'],
  ['drop ESP', 'loot ESP'],
  ['Drop ESP', 'Loot ESP'],
  ['gather ESP', 'loot ESP'],
  ['Gather ESP', 'Loot ESP'],
  ['gather nodes', 'loot crates'],
  ['bind point', 'buy station'],
  ['treasure chest', 'supply box'],

  ['staffs, bows, swords and guns', 'ARs, SMGs, snipers and shotguns'],
  ['staffs, bows, and guns', 'ARs, SMGs, and snipers'],
  ['staff, bow, sword and gun', 'AR, SMG, shotgun and sniper'],
  ['skill chain with sticky aim', 'AR spray with sticky aim'],
  ['per-class', 'per-weapon'],
  ['Per-class', 'Per-weapon'],
  ['class configs', 'weapon configs'],
  ['class skill profiles', 'weapon aim profiles'],
  ['weapon appearances', 'weapon camos'],
  ['Skill aim assist', 'Weapon aimbot'],
  ['Ranged aim assist', 'Sniper aimbot'],
  ['instance fight', 'build fight'],
  ['Instance fight', 'Build fight'],
  ['through terrain', 'through builds'],
  ['through walls and terrain', 'through walls and builds'],
  ['contested zone edge', 'gas edge'],
  ['Zone and landmark', 'Map and POI'],
  ['contested zone', 'gas circle'],
  ['Contested zone', 'Gas circle'],
  ['gank', 'third-part'],
  ['Gank', 'Third part'],
  ['group fights', 'squad fights'],
  ['group ', 'squad '],
  ['Group ', 'Squad '],
  ['Auto Kill', 'Auto Finish'],
  ['Auto Interrupt', 'Auto Shield Break'],
  ['Farm Assist', 'Loot Assist'],
  ['farm assist', 'loot assist'],
  ['heals/buffs', 'heals/shields'],
  ['heals and flight', 'heals and mobility'],
  ['Target Priority', 'Bone Priority'],
  ['target priority', 'bone priority'],
  ['Abyss fight', 'Warzone fight'],
  ['starting zone', 'spawn'],
  ['Starting zone', 'Spawn'],

  // Legacy games
  ['/products/dota-2-cheats', '/products/mw4-cheats'],
  ['dota-2-cheats', 'mw4-cheats'],
  ['/products/fortnite-cheats', '/products/mw4-cheats'],
  ['fortnite-cheats', 'mw4-cheats'],
  ['Fortnite', 'Modern Warfare'],
  ['fortnite', 'mw4'],
  ['Dota 2', 'Modern Warfare'],
  ['dota 2', 'modern warfare'],
  ['dota-2', 'mw4'],

  ['hero-aion-2-dark', 'hero-mw4-dark'],
];

const IMAGE_RENAMES = [
  ['how-to-buy-aion-2-cheats-2026', 'how-to-buy-mw4-cheats-2026'],
  ['how-to-use-aion-2-cheat-codes', 'how-to-use-mw4-cheat-codes'],
  ['anticheat-bypass-aion-2-guide', 'ricochet-bypass-mw4-guide'],
  ['anticheat-patch-day-checklist', 'ricochet-patch-day-checklist'],
  ['aion-2-skill-script-guide', 'mw4-aimbot-combat-guide'],
  ['aion-2-aimbot-pvp-guide', 'mw4-aimbot-ranked-guide'],
  ['aion-2-training-vs-pvp', 'mw4-multiplayer-vs-warzone'],
  ['aion-2-training-tips', 'mw4-multiplayer-tips'],
  ['aion-2-cheats-features-guide', 'mw4-cheats-features-guide'],
  ['aion-2-hwid-spoofer-after-ban', 'mw4-hwid-spoofer-after-ban'],
  ['aion-2-external-cheat-guide', 'mw4-external-cheat-guide'],
  ['aion-2-stream-proof-setup', 'mw4-stream-proof-setup'],
  ['aion-2-costume-changer-guide', 'mw4-loadout-changer-guide'],
  ['aion-2-elite-tier-guide', 'mw4-elite-tier-guide'],
  ['aion-2-esp-wallhack-setup', 'mw4-esp-wallhack-setup'],
  ['aion-2-radar-hack-guide', 'mw4-radar-hack-guide'],
  ['aion-2-training-guide', 'mw4-multiplayer-guide'],
  ['aion-2-lite-vs-pro', 'mw4-lite-vs-pro'],
  ['aion-2-skill-script', 'mw4-aimbot-combat'],
  ['aion-2-aimbot-lock', 'mw4-aimbot-lock'],
  ['aion-2-abyss-wallhack', 'mw4-warzone-wallhack'],
  ['aion-2-build-fight-esp', 'mw4-build-fight-esp'],
  ['aion-2-instance-esp', 'mw4-build-fight-esp'],
  ['aion-2-spawn-esp', 'mw4-spawn-esp'],
  ['aion-2-long-range-esp', 'mw4-long-range-esp'],
  ['aion-2-thermal-esp', 'mw4-thermal-esp'],
  ['aion-2-combat-esp', 'mw4-combat-esp'],
  ['aion-2-group-esp', 'mw4-squad-esp'],
  ['aion-2-chams-esp', 'mw4-chams-esp'],
  ['aion-2-player-esp', 'mw4-player-esp'],
  ['aion-2-esp-wallhack', 'mw4-esp-wallhack'],
  ['aion-2-loot-radar', 'mw4-loot-radar'],
  ['aion-2-radar-hack', 'mw4-radar-hack'],
  ['aion-2-costume-changer', 'mw4-loadout-changer'],
  ['aion-2-auto-aim', 'mw4-auto-aim'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function applyText(content) {
  let next = content;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

function renameImages() {
  const imageRoots = [
    path.join(root, 'public', 'images', 'gameplay'),
    path.join(root, 'public', 'images', 'blog'),
    path.join(root, 'public', 'images'),
  ];
  for (const dir of imageRoots) {
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      for (const [from, to] of IMAGE_RENAMES) {
        if (name.includes(from)) {
          const dest = name.replaceAll(from, to);
          const fromPath = path.join(dir, name);
          const toPath = path.join(dir, dest);
          if (fromPath !== toPath && !fs.existsSync(toPath)) {
            fs.renameSync(fromPath, toPath);
            console.log('rename image', name, '→', dest);
          }
          break;
        }
      }
    }
  }
}

function renameProductDirs() {
  const pairs = [
    [
      path.join(root, 'src', 'pages', 'products', 'aion-2-cheats'),
      path.join(root, 'src', 'pages', 'products', 'mw4-cheats'),
    ],
    [
      path.join(root, 'src', 'pages', '[locale]', 'products', 'aion-2-cheats'),
      path.join(root, 'src', 'pages', '[locale]', 'products', 'mw4-cheats'),
    ],
  ];
  for (const [from, to] of pairs) {
    if (fs.existsSync(from) && !fs.existsSync(to)) {
      fs.renameSync(from, to);
      console.log('renamed', path.relative(root, from), '→', path.relative(root, to));
    }
  }
}

function renameBlogOverlays() {
  const overlayRoot = path.join(root, 'scripts', 'blog-i18n', 'overlays');
  if (!fs.existsSync(overlayRoot)) return;
  for (const locale of fs.readdirSync(overlayRoot)) {
    const dir = path.join(overlayRoot, locale);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const name of fs.readdirSync(dir)) {
      let dest = name;
      for (const [from, to] of IMAGE_RENAMES) {
        if (name.includes(from)) {
          dest = name.replaceAll(from, to);
          break;
        }
      }
      if (dest !== name) {
        const fromPath = path.join(dir, name);
        const toPath = path.join(dir, dest);
        if (!fs.existsSync(toPath)) {
          fs.renameSync(fromPath, toPath);
          console.log('rename overlay', name, '→', dest);
        }
      }
    }
  }
}

renameProductDirs();
renameImages();
renameBlogOverlays();

const files = walk(root).filter((f) => {
  if (SKIP_FILES.has(path.basename(f))) return false;
  return TEXT_EXTS.has(path.extname(f).toLowerCase()) || path.basename(f) === '_redirects';
});

let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}

console.log(`Done. Updated ${changed} text files.`);
