/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  /** Visible page heading (may differ from document title). */
  h1: string;
  description: string;
  /** Header favicon alt for this route (SEO / accessibility). */
  iconAlt?: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy MW4 Cheats | ESP, Aimbot & Radar — buymw4cheats.com',
    h1: 'Buy MW4 Cheats at buymw4cheats — ESP, Aimbot & Radar for PC',
    description:
      'Mw4 Cheats: Modern Warfare cheats for PC with player ESP, wallhack, minimap radar, loot ESP, aimbot and loadout changer.',
    iconAlt: 'Mw4 cheats — site favicon',
  },
  '/products/mw4-cheats/': {
    title: 'Mw4 – Compare Lite, Pro & Elite Tiers | buymw4cheats.com',
    h1: 'MW4 Hacks — Compare Lite, Pro & Elite Tiers',
    description:
      'MW4 Elite cheats, HWID spoofer, UGC recovery and Loadout Changer for Multiplayer, Warzone and Ranked on PC. MW4 Hacks — Compare Lite, Pro & Elite tiers.',
    iconAlt: 'Mw4 – favicon',
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
    h1: 'Modern Warfare Guides & Ricochet Patch Notes',
    description:
      'Guides on Modern Warfare ESP wallhack, Ranked presets, Lite vs Pro, weapon aimbot and Ricochet patch-day checks for PC players.',
  },
  '/forum/': {
    title: 'Forum – Talk Modern Warfare cheat setup | buymw4cheats.com',
    h1: 'MW4 Hacks Community Forum',
    description:
      'Forum: Talk Modern Warfare cheat setup, ESP and weapon configs, Ricochet status and product questions. Join our MW4 community forum.',
    iconAlt: 'Forum – favicon',
  },
  '/faq/': {
    title: 'Cheat – ESP, Aimbot & Loader Setup | buymw4cheats.com',
    h1: 'Cheat: Common questions on aimbot, loader setup & ESP',
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
    title: 'Modern Warfare Cheats – guides and utilities at buymw4cheats',
    h1: 'About Modern Warfare Cheats',
    description:
      'Modern Warfare Cheats sells PC Modern Warfare cheat tiers, guides and utilities at buymw4cheats.com. Learn who we are and what we ship.',
  },
  '/support/': {
    title: 'Support – Modern Warfare Cheats | buymw4cheats.com',
    h1: 'Buy MW4 Cheats — Support loader help',
    description:
      'Support: Help with Modern Warfare cheat loader setup, configs, HWID spoofing and checkout. Support Buy MW4 Cheats — Support Loader, HWID, checkout and.',
    iconAlt: 'Support – favicon',
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
