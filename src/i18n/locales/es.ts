import type { DeepPartialTranslations } from '../partial';
import { PRODUCT_BASE } from '../../config/site';

const productBase = PRODUCT_BASE;

/** Spain / LATAM — thin overlay. */
export const es: DeepPartialTranslations = {
  site: {
    name: 'Modern Warfare Cheats',
    domain: 'buymw4cheats.com',
    title: 'Cheats Modern Warfare — ESP, radar y Ranked (PC)',
    description:
      'Cheats de Modern Warfare para PC: ESP, wallhack, radar, loot ESP, aimbot y loadout changer. Multijugador, Warzone y Ranked. Actualizado tras parches de Ricochet.',
  },
  nav: [
    { href: '/', label: 'Inicio' },
    { href: `${productBase}`, label: 'Productos' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Foro' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Soporte' },
  ],
  hero: {
    status: 'Modern Warfare en línea',
    eyebrow: 'Cheats indetectables',
    titleLine1: 'Cheats Modern Warfare —',
    titleLine2: 'ESP · Radar · Ranked',
    subtitle:
      'ESP, wallhack, radar, loot ESP y aimbot para multijugador, Warzone y Ranked en Windows. Actualizaciones rápidas tras Ricochet.',
    ctaPrimary: 'Ver productos',
    ctaDiscord: 'Unirse a Discord',
    modesLabel: 'Modos',
    modes: ['Ranked', 'Warzone', 'Multijugador', 'Zombies'],
  },
  blog: {
    eyebrow: 'Blog',
    latestTitle: 'Artículos recientes',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes',
  },
  support: {
    eyebrow: 'Soporte',
    title: 'Soporte',
  },
};
