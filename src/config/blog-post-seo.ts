/** Per-slug blog SEO overrides (English bare slugs). */
export interface BlogPostSeoOverride {
  title: string;
  description: string;
  h1: string;
}

export const BLOG_POST_SEO: Record<string, BlogPostSeoOverride> = {
  'how-to-buy-mw4-cheats-2026': {
    title: 'Buy – purchase walkthrough | buymw4cheats.com',
    description:
      'Buy: Step-by-step purchase walkthrough for Lite, Pro and Elite via secure checkout at buymw4cheats.com. Pick a tier, pay, portal access, loader download.',
    h1: 'How to buy — step-by-step purchase walkthrough',
  },
  'how-to-use-mw4-cheat-codes': {
    title: 'Practice Modern Warfare safely | buymw4cheats.com',
    description:
      'Practice: Training vs Ranked — test aimbot and ESP in training grounds before using private MW4 tools on PC.',
    h1: 'How to practice Modern Warfare cheats safely — buymw4cheats.com',
  },
  'mw4-aimbot-combat-guide': {
    title: 'Modern Warfare weapon aimbot guide | buymw4cheats.com',
    description:
      'Aimbot guide: per-weapon profiles for Pro tier — staff chains, bow tracking and gun finishers for Ranked on PC.',
    h1: 'Weapon aimbot guide: Modern Warfare cheats for staff, bow and gun — buymw4cheats.com',
  },
  'mw4-multiplayer-guide': {
    title: 'Modern Warfare Private match guide | Cheats',
    description:
      'Guide: Use Training and private lobbies to practice aim smoothness, ESP ranges and loadouts before Ranked on PC.',
    h1: 'Modern Warfare Private match guide: skill drills before Ranked — Cheats',
  },
  'mw4-multiplayer-tips': {
    title: 'Modern Warfare Training tips for ai | Cheats',
    description:
      'Training and private-lobby workflows to tune aimbot, ESP wallhack and loot ESP before Ranked. Safe drills for PC operators.',
    h1: 'Modern Warfare Training tips for aimbot and ESP practice — Cheats',
  },
  'mw4-cheats-features-guide': {
    title: 'Modern Warfare cheats features: aim | buymw4cheats.com',
    description:
      'Cheats Features: Complete guide to aimbot, Loot Assist, Loadout Changer, Radar Hack, ESP Wallhack and Auto plate break.',
    h1: 'Modern Warfare cheats features: aimbot, bots, ESP wallhack and more',
  },
};

export function getBlogPostSeo(slug: string): BlogPostSeoOverride | undefined {
  return BLOG_POST_SEO[slug];
}
