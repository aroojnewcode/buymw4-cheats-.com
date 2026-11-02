import type { ForumPost } from '../data/forum';
import type { Locale } from './locales';

export interface ForumUiCopy {
  popular: string;
  latest: string;
  top: string;
  searchPlaceholder: string;
  postsAria: string;
  sortAria: string;
}

const UI: Partial<Record<Locale, ForumUiCopy>> = {
  ko: {
    popular: '인기',
    latest: '최신',
    top: '댓글 많음',
    searchPlaceholder: '포럼 검색…',
    postsAria: '커뮤니티 게시글',
    sortAria: '정렬',
  },
  'zh-tw': {
    popular: '熱門',
    latest: '最新',
    top: '討論最多',
    searchPlaceholder: '搜尋論壇…',
    postsAria: '社群貼文',
    sortAria: '排序',
  },
  de: {
    popular: 'Beliebt',
    latest: 'Neueste',
    top: 'Meist diskutiert',
    searchPlaceholder: 'Forum durchsuchen…',
    postsAria: 'Community-Beiträge',
    sortAria: 'Sortierung',
  },
  'pt-br': {
    popular: 'Popular',
    latest: 'Recentes',
    top: 'Mais comentados',
    searchPlaceholder: 'Buscar no fórum…',
    postsAria: 'Posts da comunidade',
    sortAria: 'Ordenação',
  },
  th: {
    popular: 'ยอดนิยม',
    latest: 'ล่าสุด',
    top: 'พูดคุยมากสุด',
    searchPlaceholder: 'ค้นหาในฟอรัม…',
    postsAria: 'โพสต์ชุมชน',
    sortAria: 'เรียงลำดับ',
  },
  ja: {
    popular: '人気',
    latest: '最新',
    top: 'コメント多',
    searchPlaceholder: 'フォーラムを検索…',
    postsAria: 'コミュニティ投稿',
    sortAria: '並べ替え',
  },
  es: {
    popular: 'Popular',
    latest: 'Recientes',
    top: 'Más comentados',
    searchPlaceholder: 'Buscar en el foro…',
    postsAria: 'Publicaciones',
    sortAria: 'Orden',
  },
  fr: {
    popular: 'Populaire',
    latest: 'Récent',
    top: 'Plus discutés',
    searchPlaceholder: 'Rechercher le forum…',
    postsAria: 'Publications',
    sortAria: 'Tri',
  },
};

const EN_UI: ForumUiCopy = {
  popular: 'Popular',
  latest: 'Latest',
  top: 'Most discussed',
  searchPlaceholder: 'Search forum…',
  postsAria: 'Community posts',
  sortAria: 'Post sorting',
};

const CATEGORY: Partial<Record<Locale, Record<string, string>>> = {
  ko: {
    General: '일반',
    'Guides & Builds': '가이드 & 빌드',
    'Patch Talk': '패치 토론',
    Community: '커뮤니티',
  },
  'zh-tw': {
    General: '綜合',
    'Guides & Builds': '攻略與配裝',
    'Patch Talk': '更新討論',
    Community: '社群',
  },
  de: {
    General: 'Allgemein',
    'Guides & Builds': 'Guides & Builds',
    'Patch Talk': 'Patch-Talk',
    Community: 'Community',
  },
  'pt-br': {
    General: 'Geral',
    'Guides & Builds': 'Guias e builds',
    'Patch Talk': 'Patches',
    Community: 'Comunidade',
  },
  th: {
    General: 'ทั่วไป',
    'Guides & Builds': 'คู่มือและบิลด์',
    'Patch Talk': 'พูดคุยแพตช์',
    Community: 'ชุมชน',
  },
};

export function getForumUi(locale: Locale): ForumUiCopy {
  return UI[locale] ?? EN_UI;
}

export function localizeForumCategory(locale: Locale, name: string): string {
  return CATEGORY[locale]?.[name] ?? name;
}

/** Overlay translated titles/excerpts for priority locales (slug → fields). */
const POST_OVERLAY: Partial<
  Record<Locale, Record<string, Pick<ForumPost, 'title' | 'excerpt'>>>
> = {
  ko: {
    'what-does-mw4-map-awareness-include': {
      title: '가이드에서 맵 인식(ESP)에 뭐가 포함되나요?',
      excerpt: '플레이어·상자·루트·은신 정보 등 맵 인식 가이드 범위 요약.',
    },
    'how-to-set-up-map-overlay': {
      title: '맵 오버레이는 처음에 어떻게 설정하나요?',
      excerpt: '기본 표시부터 확인하고, 봇 로비에서 테스트한 뒤 하나씩 조정하세요.',
    },
  },
  'zh-tw': {
    'what-does-mw4-map-awareness-include': {
      title: '攻略裡的 map awareness（ESP）包含哪些內容？',
      excerpt: '快速整理玩家、箱體、戰利品與潛行提示等資訊範圍。',
    },
  },
};

export function localizeForumPost(locale: Locale, post: ForumPost): ForumPost {
  const overlay = POST_OVERLAY[locale]?.[post.slug];
  if (!overlay) return post;
  return { ...post, ...overlay };
}
