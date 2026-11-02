/**
 * Second-pass copy polish: remove MMO / NCSOFT leftovers after rebrand-mw4.mjs.
 * Run from project root: node scripts/polish-mw4-copy.mjs
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
  '.css',
]);

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline', 'starwind']);
const SKIP_FILES = new Set(['polish-mw4-copy.mjs', 'rebrand-mw4.mjs', 'rebrand-aion2.mjs', 'rebrand-fortnite.mjs']);

/** Longest-first */
const REPLACEMENTS = [
  ['Ricochet Ricochet', 'Ricochet'],
  ['Modern Warfare / PURPLE launcher', 'Battle.net or Steam'],
  ['PURPLE launcher', 'Battle.net or Steam'],
  ['NCSOFT anti-cheat', 'Ricochet anti-cheat'],
  ['NCSOFT Anti-Cheat', 'Ricochet Anti-Cheat'],
  ['NCSOFT Terms of Service', 'Activision Terms of Service'],
  ['NCSOFT account', 'Activision account'],
  ['NCSOFT store', 'in-game store'],
  ['NCSOFT Store', 'In-game store'],
  ['NCSOFT overlay', 'game overlay'],
  ['NCSOFT-approved', 'Activision-approved'],
  ['NCSOFT-sanctioned', 'official'],
  ['NCSOFT review', 'Activision review'],
  ['on NCSOFT', 'on PC'],
  ['NCSOFT', 'Activision'],
  ['ncsoft', 'Activision'],

  ['class skill assist', 'weapon aimbot'],
  ['Class skill assist', 'Weapon aimbot'],
  ['Klassen-Skill-Assist', 'Waffen-Aimbot'],
  ['skill assist', 'aimbot'],
  ['Skill Assist', 'Aimbot'],
  ['Skill aim assist', 'Weapon aimbot'],
  ['skill-assist', 'aimbot'],
  ['skill script', 'aimbot'],
  ['Smooth Aim', 'Aim smoothing'],
  ['Sticky Aim', 'Target lock'],

  ['Ranked RvR', 'Ranked Play'],
  ['Ranked-safe', 'Ranked-safe'],
  ['Abyss-safe', 'Ranked-safe'],
  ['Abyss Arena', 'Ranked Play'],
  ['Abyss PvP', 'Ranked'],
  ['Abyss RvR', 'Ranked Play'],
  ['Abyss fight', 'Warzone fight'],
  ['Abyss ', 'Ranked '],
  [' Abyss', ' Ranked'],
  ['Abismo', 'Ranked'],
  ['Abîme', 'Ranked'],
  ['어비스', '랭크'],
  ['深淵', '排位'],
  ['アビス', 'ランク'],

  ['Elyos vs Asmodian', 'Multiplayer & Warzone'],
  ['Ally-vs-Enemy', 'Multiplayer & Warzone'],
  ['Ally vs Enemy', 'Multiplayer & Warzone'],
  ['Elyos', 'Ally'],
  ['Asmodian', 'Enemy'],
  ['천족·마족', '멀티플레이·워존'],
  ['천족 vs 마족', '멀티플레이 & 워존'],
  ['天族与魔族', '多人对战与 Warzone'],
  ['天族 vs 魔族', '多人对战 & Warzone'],
  ['天魔', '多人 & Warzone'],
  ['เอลีออส vs อัสโมเดียน', 'มัลติพลเยอร์ & Warzone'],
  ['Élyséens vs Asmodiens', 'Multijoueur & Warzone'],

  ['Open World PvP', 'Multiplayer'],
  ['open world PvP', 'multiplayer'],
  ['instances and flight', 'Warzone and Zombies'],
  ['Instances and flight', 'Warzone and Zombies'],
  ['instancias y combate aéreo', 'Warzone y Zombies'],
  ['Instanzen und Flug', 'Warzone und Zombies'],
  ['インスタンス', 'Warzone'],
  ['instances', 'Warzone'],
  ['Instanzen', 'Warzone'],
  ['instancias', 'Warzone'],
  ['인스턴스', 'Warzone'],
  ['副本', 'Warzone'],
  ['ดันเจี้ยน', 'Warzone'],
  ['Arenas', 'Ranked'],
  ['Arenen', 'Ranked'],
  ['arena', 'Ranked'],
  ['アリーナ', 'ランク'],
  ['Flight', 'Zombies'],
  ['Flug', 'Zombies'],
  ['flight', 'Zombies'],
  ['飛行', 'ゾンビ'],
  ['비행', '좀비'],
  ['Vuelo', 'Zombies'],

  ['Costume Changer', 'Loadout Changer'],
  ['costume changer', 'loadout changer'],
  ['Kostüm-Wechsler', 'Loadout-Wechsler'],
  ['コスチュームチェンジャー', 'ロードアウトチェンジャー'],
  ['코스튬 체인저', '로드아웃 체인저'],
  ['服裝變更器', '配裝變更器'],
  ['costumes', 'operator skins'],
  ['Costume and wing', 'Operator and camo'],
  ['Wing & appearance', 'Operator & camo'],
  ['wings and rare appearances', 'operators and rare camos'],
  ['wings and exclusive sets', 'operators and exclusive bundles'],
  ['gather ESP', 'loot ESP'],
  ['Gather ESP', 'Loot ESP'],
  ['Sammel-ESP', 'Loot-ESP'],
  ['採取 ESP', '戰利品 ESP'],
  ['채집 ESP', '루트 ESP'],
  ['gather nodes', 'loot crates'],
  ['drop and gather', 'loot and crates'],
  ['drop ESP', 'loot ESP'],
  ['Drop ESP', 'Loot ESP'],

  ['Gladiator, Ranger, Sorcerer, Assassin', 'AR, SMG, sniper and shotgun'],
  ['Auto Shield Break', 'Auto plate break'],
  ['Auto Finish', 'Auto finish'],
  ['Farm Assist', 'Loot assist'],
  ['farm assist', 'loot assist'],
  ['Farm assist', 'Loot assist'],
  ['loot assist', 'loot assist'],
  ['through terrain', 'through builds'],
  ['through walls and terrain', 'through walls and builds'],
  ['contested zone', 'gas circle'],
  ['Contested zone', 'Gas circle'],
  ['gank', 'third-party'],
  ['Gank', 'Third-party'],
  ['group fights', 'squad fights'],
  ['spell ranges', 'weapon ranges'],
  ['Auto Kill', 'Auto finish'],

  ['Multiplayer & Warzoneos', 'Multiplayer & Warzone'],
  ['Multiplayer & Warzoneos', 'Multiplayer & Warzone'],
  [' an Modern Warfare', ' a Modern Warfare'],
  ['Ranked radar', 'Minimap radar'],
  ['Ranked Radar', 'Minimap Radar'],
  ['Ranked landmark', 'Map POI'],
  ['Ranked layers', 'map geometry'],
  ['flight height cues', 'vertical player cues'],
  ['UGC for NCSOFT', 'UGC for Activision'],
  ['local Loadout Changer / Unlock All', 'local Loadout Changer / Unlock All tool'],

  ['Aion-2-Cheats', 'MW4 cheats'],
  ['Aion-2-Cheat', 'MW4 cheat'],
  ['Aion-2-Produktseite', 'MW4-Produktseite'],
  ['private Aion-2-Cheats', 'private MW4 cheats'],
  ['private Aion-2-cheats', 'private MW4 cheats'],
  ['Aion-2-', 'MW4 '],
  ['Aion 2', 'Modern Warfare'],
  ['Aion-2', 'MW4'],
  ['aion-2', 'mw4'],
  ['aion 2', 'mw4'],
  ['aion2SystemRequirements', 'mw4SystemRequirements'],
  ['aion2', 'mw4'],
  ['Kostüm-Wechsler', 'Loadout-Wechsler'],
  ['abyss-karte', 'minimap-radar'],
  ['abyss-sichere', 'Ranked-sichere'],
];

const SCAN_ROOTS = [
  path.join(root, 'src'),
  path.join(root, 'scripts', 'blog-i18n'),
  path.join(root, 'public'),
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
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

const files = SCAN_ROOTS.flatMap((dir) => walk(dir)).filter((f) => {
  if (SKIP_FILES.has(path.basename(f))) return false;
  return TEXT_EXTS.has(path.extname(f).toLowerCase());
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

console.log(`Done. Polished ${changed} files.`);
