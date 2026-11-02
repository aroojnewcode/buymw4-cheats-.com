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
    h1: 'Buy MW4 Cheats on buymw4cheats.com — ESP, Aimbot & Radar for PC',
    description:
      'Mw4 Cheats: Modern Warfare cheats for PC with player ESP, wallhack, minimap radar, loot ESP, aimbot and loadout changer.',
  },
  '/products/mw4-cheats/': {
    title: 'Mw4 – Compare Lite, Pro & Elite Tiers | buymw4cheats.com',
    h1: 'MW4 Hacks on buymw4cheats.com — Compare Lite, Pro & Elite tiers',
    description:
      'MW4 Elite cheats, HWID spoofer, UGC and Loadout Changer for Warzone and Ranked on PC. Compare Lite, Pro and Elite MW4 hack tiers.',
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
    title: 'Modern Warfare – Ranked presets | buymw4cheats.com',
    h1: 'Modern Warfare ranked presets & guides — buymw4cheats.com Ricochet notes',
    description:
      'Guides on Modern Warfare ESP wallhack, Ranked presets, Lite vs Pro, weapon aimbot and Ricochet patch-day checks for PC players.',
  },
  '/forum/': {
    title: 'Forum – Talk Modern Warfare cheat setup | buymw4cheats.com',
    h1: 'Forum — Talk Modern Warfare cheat setup at buymw4cheats.com',
    description:
      'Forum for Modern Warfare cheat setup, ESP configs and Ricochet status at buymw4cheats.com — community Q&A hub.',
  },
  '/faq/': {
    title: 'Cheat – ESP, Aimbot & Loader Setup | buymw4cheats.com',
    h1: 'Cheat FAQ on buymw4cheats.com — aimbot, loader & setup',
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
    title: 'Modern Warfare Cheats – Who we are | buymw4cheats.com',
    h1: 'About Modern Warfare Cheats at buymw4cheats.com',
    description:
      'Modern Warfare Cheats sells PC Modern Warfare cheat tiers, guides and utilities at buymw4cheats.com. About Modern Warfare Cheats Modern Warfare Cheats.',
  },
  '/support/': {
    title: 'Support – Help with Modern Warfare cheat loader setup',
    h1: 'Support — Help with Modern Warfare cheat loader setup',
    description:
      'Support: Help with Modern Warfare cheat loader setup, configs, HWID spoofing and checkout. Support Buy MW4 Cheats — Support Loader, HWID, checkout and.',
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
