import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * Zadeyo affiliate checkout — use on every buy / access CTA.
 */
export const ZADEYO_MW4_CHECKOUT_URL = CHECKOUT_URLS.mw4;

/**
 * External checkout URLs — server-side redirect targets and visible button hrefs.
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  mw4: 'mw4',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal /go/ path (Cloudflare _redirects → Zadeyo). */
export function checkoutGoPath(product: CheckoutProduct = 'mw4'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Zadeyo checkout URL for buy / access buttons (all products → MW4 affiliate link). */
export function checkoutPath(product: CheckoutProduct = 'mw4'): string {
  return CHECKOUT[product];
}

export const PRIMARY_CHECKOUT_PATH = checkoutPath('mw4');

/** Map internal product slugs to checkout URLs. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
    case 'hwid-spoofer':
    case 'ugc':
    case 'account-recovery':
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('mw4');
  }
}

/** Resolve blog CTA or legacy href values to Zadeyo checkout URLs. */
export function resolveCheckoutHref(href: string): string {
  if (href.startsWith('http')) {
    for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
      if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
        return checkoutPath(product);
      }
    }
    if (
      href.includes('zadeyo.com') ||
      href.includes('%2Fproducts%2Fmw4') ||
      href.includes('/products/mw4')
    ) {
      return checkoutPath('mw4');
    }
    return href;
  }

  const bare = href.startsWith('/') ? href : `/${href}`;
  const pathOnly = bare.split('?')[0]!.replace(/\/$/, '') || '/';
  const goMatch = pathOnly.match(/^\/go\/([^/]+)$/);
  if (goMatch) {
    const product = CHECKOUT_SLUG_TO_PRODUCT[goMatch[1]!] ?? 'mw4';
    return checkoutPath(product);
  }

  return bare.startsWith('/') ? bare : `/${bare}`;
}
