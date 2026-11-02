const ZADEYO_MW4_CHECKOUT =
  'https://zadeyo.com/go/8b9cad82?to=%2Fproducts%2Fmw4';

export { ZADEYO_MW4_CHECKOUT };

/** Checkout destinations keyed by internal product id (Zadeyo affiliate). */
export const CHECKOUT_URLS = {
  mw4: ZADEYO_MW4_CHECKOUT,
  skinChanger: ZADEYO_MW4_CHECKOUT,
  hwidSpoofer: ZADEYO_MW4_CHECKOUT,
  ugc: ZADEYO_MW4_CHECKOUT,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/mw4', CHECKOUT_URLS.mw4],
  ['/go/mw4/', CHECKOUT_URLS.mw4],
  ['/go/mw4', CHECKOUT_URLS.mw4],
  ['/go/mw4/', CHECKOUT_URLS.mw4],
  ['/go/fortnite', CHECKOUT_URLS.mw4],
  ['/go/fortnite/', CHECKOUT_URLS.mw4],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
