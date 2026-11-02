/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  /** Visible page heading (may differ from document title). */
  h1: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy MW4 Cheats | ESP, Aimbot & Radar — buymw4cheats.com',
    h1: 'Buy MW4 Cheats — ESP, Aimbot & Radar',
    description:
      'Modern Warfare cheats for PC with player ESP, wallhack, minimap radar, loot ESP, aimbot and loadout changer. Built for Multiplayer, Warzone and Ranked Play.',
  },
  '/products/mw4-cheats/': {
    title: 'MW4 Hacks | Compare Lite, Pro & Elite Tiers',
    h1: 'MW4 Hacks — Compare Lite, Pro & Elite',
    description:
      'MW4 Elite cheats, HWID spoofer, UGC recovery and Loadout Changer for Multiplayer, Warzone and Ranked on PC.',
  },
  '/products/mw4-cheats/elite/': {
    title: 'Elite Modern Warfare Cheats | ESP, Aimbot & Loot Assist',
    h1: 'Elite Modern Warfare Cheats',
    description:
      'MW4 Elite with ESP wallhack, weapon aimbot, loot assist, auto finish, Loadout Changer and priority Ricochet patch updates.',
  },
  '/products/mw4-cheats/utilities/': {
    title: 'Modern Warfare Utilities | HWID Spoofer, UGC & Loadout Changer',
    h1: 'Compare MW4 utilities',
    description:
      'HWID Spoofer after hardware bans, UGC for Activision and Ricochet appeals, and local Loadout Changer / Unlock All tool.',
  },
  '/blog/': {
    title: 'Modern Warfare Guides & Ricochet Patch Notes',
    h1: 'Modern Warfare Guides & Patch Notes',
    description:
      'Guides on Modern Warfare ESP wallhack, Ranked presets, Lite vs Pro, weapon aimbot and Ricochet patch-day checks.',
  },
  '/forum/': {
    title: 'MW4 Hacks Community Forum',
    h1: 'MW4 Hacks Community Forum',
    description:
      'Talk Modern Warfare cheat setup, ESP and weapon configs, Ricochet status and product questions.',
  },
  '/faq/': {
    title: 'MW4 Cheat FAQ | ESP, Aimbot & Loader Setup',
    h1: 'MW4 Cheat FAQ',
    description:
      'Answers on Modern Warfare cheat tiers, ESP wallhack, minimap radar, aimbot, HWID spoofer, Loadout Changer and loader setup.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Modern Warfare Cheats',
    h1: 'Terms and conditions',
    description:
      'Purchase terms, license use and refund policy for Modern Warfare cheat products on buymw4cheats.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Modern Warfare Cheats',
    h1: 'Privacy policy',
    description:
      'How buymw4cheats.com uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About Modern Warfare Cheats',
    h1: 'About Modern Warfare Cheats',
    description:
      'Modern Warfare Cheats sells PC Modern Warfare cheat tiers, guides and utilities at buymw4cheats.com.',
  },
  '/support/': {
    title: 'Buy MW4 Cheats — Support & Loader Help',
    h1: 'Buy MW4 Cheats — Support',
    description:
      'Help with Modern Warfare cheat loader setup, configs, HWID spoofing and checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
