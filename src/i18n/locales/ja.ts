import type { DeepPartialTranslations } from '../partial';
import { PRODUCT_BASE } from '../../config/site';

const productBase = PRODUCT_BASE;

/** Japan — thin overlay; English fills the rest. */
export const ja: DeepPartialTranslations = {
  site: {
    name: 'Modern Warfare Cheats',
    domain: 'buymw4cheats.com',
    title: 'Modern Warfare チート — ESP・レーダー・ランク（PC）',
    description:
      'PC 向け Modern Warfare チート：プレイヤー ESP、ウォールハック、ミニマップレーダー、ルート ESP、エイムボット、ロードアウトチェンジャー。マルチプレイ・Warzone・ランク対応。Ricochet パッチ後も更新。',
  },
  nav: [
    { href: '/', label: 'ホーム' },
    { href: `${productBase}`, label: '製品' },
    { href: '/blog/', label: 'ブログ' },
    { href: '/forum/', label: 'フォーラム' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'サポート' },
  ],
  hero: {
    status: 'Modern Warfare オンライン',
    eyebrow: '未検出の Modern Warfare チート',
    titleLine1: 'Modern Warfare チート —',
    titleLine2: 'ESP · レーダー · ランクオーバーレイ',
    subtitle:
      'マルチプレイ・Warzone・ランク向けの ESP、ウォールハック、レーダー、ルート ESP、エイムボット。Windows PC 専用。Ricochet パッチ後に迅速更新。',
    ctaPrimary: '製品を見る',
    ctaDiscord: 'Discord に参加',
    modesLabel: 'モード',
    modes: ['ランク', 'Warzone', 'マルチプレイ', 'ゾンビ'],
  },
  blog: {
    eyebrow: 'ブログ',
    latestTitle: '最新記事',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'よくある質問',
  },
  support: {
    eyebrow: 'サポート',
    title: 'サポート',
  },
};
