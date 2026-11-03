/** Per-slug blog SEO overrides (English bare slugs). */
export interface BlogPostSeoOverride {
  title: string;
  description: string;
  h1: string;
}

export const BLOG_POST_SEO: Record<string, BlogPostSeoOverride> = {
  'how-to-buy-mw4-cheats-2026': {
    title: 'Buy – Step-by-step purchase walkthrough | buymw4cheats.com',
    description:
      'Buy: Step-by-step purchase walkthrough for Lite, Pro and Elite via our secure checkout. View all articles Guides 14 min read Aug 12, 2026 How to buy.',
    h1: 'How to buy Modern Warfare cheats in 2026 — buymw4cheats.com',
  },
  'how-to-use-mw4-cheat-codes': {
    title: 'How to practice Modern Warfare safely | buymw4cheats.com',
    description:
      'Practice: Training vs Ranked: how to test aimbot and ESP in training grounds before using private Modern Warfare cheats.',
    h1: 'How to practice Modern Warfare cheats safely — buymw4cheats.com',
  },
  'mw4-aimbot-combat-guide': {
    title: 'Modern Warfare weapon aimbot guide | buymw4cheats.com',
    description:
      'Per-weapon aimbot profiles for Pro tier—staff chains, bow tracking and gun finishers for Ranked. View all articles Setup 15 min read Aug 12, 2026 Weapon.',
    h1: 'Weapon aimbot guide: Modern Warfare cheats for staff, bow and gun — buymw4cheats.com',
  },
};

export function getBlogPostSeo(slug: string): BlogPostSeoOverride | undefined {
  return BLOG_POST_SEO[slug];
}
