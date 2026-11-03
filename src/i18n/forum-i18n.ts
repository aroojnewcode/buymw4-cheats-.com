import type { ForumPost } from '../data/forum';
import type { Locale } from './locales';
import { FORUM_POSTS, type ForumPostTranslation } from './forum/posts';
import { FORUM_SHELL, type ForumShellCopy } from './forum/shell';

export type { ForumShellCopy, ForumPostTranslation };

const EN_SHELL: ForumShellCopy = {
  popular: 'Popular',
  latest: 'Latest',
  top: 'Most discussed',
  searchPlaceholder: 'Search forum…',
  postsAria: 'Community posts',
  sortAria: 'Post sorting',
  filterByTopicAria: 'Filter discussions by topic',
  allTopics: 'All topics',
  guideDiscussionsLabel: 'guide discussions',
  discussion: 'discussion',
  discussions: 'discussions',
  discussionVotingAria: 'Discussion voting',
  upvoteAria: 'Upvote this discussion',
  downvoteUnavailableAria: 'Downvoting is unavailable',
  guideTeam: 'Modern Warfare Cheats guide team',
  guideBasedQa: 'Guide-based Q&A',
  fromTheGuide: 'From the guide:',
  commentsCount: 'comments',
  readDiscussion: 'Read discussion',
  emptyState: 'No discussions match. Try another search or topic.',
  paginationAria: 'Discussion pages',
  previous: 'Previous',
  next: 'Next',
  previousPageAria: 'Previous page',
  nextPageAria: 'Next page',
  pageAria: 'Page',
  showingRange: 'Showing',
  zeroDiscussions: '0 discussions',
  communityTitle: 'Forum: Modern Warfare Cheats',
  communityLead:
    'A home for Modern Warfare players to trade ideas, learn together, and celebrate the game.',
  topics: 'topics',
  communitiesHeading: 'Communities',
  browseRelatedQa: 'Browse related Q&A',
  browseAllCommunities: 'Browse all communities',
  communityGuidelinesHeading: 'Community guidelines',
  guidelineFriendly: 'Keep it friendly and constructive',
  guidelineOnTopic: 'Stay on topic and add context',
  guidelineSpoilers: 'Mark spoilers and sensitive content',
  readFullGuidelines: 'Read the full guidelines',
  copyrightSuffix: 'Modern Warfare Cheats Community',
  basedOn: 'Based on:',
  guideReplies: 'guide replies',
  previewDiscussion: 'Preview discussion',
  postingUnavailable: 'Posting and voting are unavailable here',
  guideRepliesHeading: 'Guide replies',
  fromSourceArticle: 'From the source article',
  guideAnswer: 'Guide answer',
  sidebarBrowseAnswers: 'Browse answers summarized from Modern Warfare Cheats guides.',
  inThisTopic: 'in this topic',
  moreDiscussions: 'More discussions',
  guideAnswers: 'guide answers',
  viewAllDiscussions: 'View all discussions',
  categories: {
    General: 'General',
    'Guides & Builds': 'Guides & Builds',
    'Patch Talk': 'Patch Talk',
    Community: 'Community',
  },
};

/** @deprecated Use getForumShell — kept for existing imports */
export type ForumUiCopy = Pick<
  ForumShellCopy,
  'popular' | 'latest' | 'top' | 'searchPlaceholder' | 'postsAria' | 'sortAria'
>;

export function getForumShell(locale: Locale): ForumShellCopy {
  return FORUM_SHELL[locale] ?? EN_SHELL;
}

/** @deprecated */
export function getForumUi(locale: Locale): ForumUiCopy {
  const shell = getForumShell(locale);
  return {
    popular: shell.popular,
    latest: shell.latest,
    top: shell.top,
    searchPlaceholder: shell.searchPlaceholder,
    postsAria: shell.postsAria,
    sortAria: shell.sortAria,
  };
}

export function localizeForumCategory(locale: Locale, name: string): string {
  const shell = getForumShell(locale);
  const key = name as keyof ForumShellCopy['categories'];
  return shell.categories[key] ?? name;
}

function applyPostTranslation(post: ForumPost, tr: ForumPostTranslation): ForumPost {
  const comments = tr.comments?.length
    ? post.comments.map((comment, index) => {
        const translated = tr.comments![index];
        if (!translated) return comment;
        return {
          ...comment,
          body: translated.body,
          age: translated.age ?? comment.age,
          replies: comment.replies?.map((reply, replyIndex) => {
            const translatedReply = translated.replies?.[replyIndex];
            if (!translatedReply) return reply;
            return {
              ...reply,
              body: translatedReply.body,
              age: translatedReply.age ?? reply.age,
            };
          }),
        };
      })
    : post.comments;

  return {
    ...post,
    title: tr.title,
    excerpt: tr.excerpt,
    body: tr.body,
    flair: tr.flair ?? post.flair,
    sourceTitle: tr.sourceTitle ?? post.sourceTitle,
    comments,
  };
}

export function localizeForumPost(locale: Locale, post: ForumPost): ForumPost {
  if (locale === 'en') return post;
  const tr = FORUM_POSTS[locale]?.[post.slug];
  if (!tr) return post;
  return applyPostTranslation(post, tr);
}
