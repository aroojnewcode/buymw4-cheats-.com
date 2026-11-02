import type { DeepPartialTranslations } from '../partial';
import { PRODUCT_BASE } from '../../config/site';

const productBase = PRODUCT_BASE;

/** France — thin overlay. */
export const fr: DeepPartialTranslations = {
  site: {
    name: 'Modern Warfare Cheats',
    domain: 'buymw4cheats.com',
    title: 'Cheats Modern Warfare — ESP, radar & Ranked (PC)',
    description:
      'Cheats Modern Warfare pour PC : ESP, wallhack, radar, loot ESP, aimbot et loadout changer. Multijoueur, Warzone et Ranked. Mis à jour après les patches Ricochet.',
  },
  nav: [
    { href: '/', label: 'Accueil' },
    { href: `${productBase}`, label: 'Produits' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Modern Warfare en ligne',
    eyebrow: 'Cheats indétectables',
    titleLine1: 'Cheats Modern Warfare —',
    titleLine2: 'ESP · Radar · Ranked',
    subtitle:
      'ESP, wallhack, radar, loot ESP et aimbot pour multijoueur, Warzone et Ranked sur Windows. Mises à jour rapides après Ricochet.',
    ctaPrimary: 'Voir les produits',
    ctaDiscord: 'Rejoindre Discord',
    modesLabel: 'Modes',
    modes: ['Ranked', 'Warzone', 'Multijoueur', 'Zombies'],
  },
  blog: {
    eyebrow: 'Blog',
    latestTitle: 'Derniers articles',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions fréquentes',
  },
  support: {
    eyebrow: 'Support',
    title: 'Support',
  },
};
