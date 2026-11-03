/** Page-specific favicon alt text for SEO keyword coverage (English bare paths). */
const BRAND_ICON_ALT: Record<string, string> = {
  '/': 'Mw4 Cheats – favicon',
  '/products/mw4-cheats/': 'Mw4 – favicon',
  '/blog/': 'Modern Warfare guides – favicon',
  '/forum/': 'Forum – favicon',
  '/faq/': 'Loader Setup – Cheat – favicon',
  '/support/': 'Support – favicon',
};

export function brandIconAltForPath(barePath: string, fallback: string): string {
  const path = barePath.endsWith('/') || barePath === '/' ? barePath : `${barePath}/`;
  return BRAND_ICON_ALT[path] ?? fallback;
}
