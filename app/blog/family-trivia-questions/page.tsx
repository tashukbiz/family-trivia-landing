import PlayableArticle from '@/components/PlayableArticle';
import groups from '@/lib/rounds/family-game-night.json';
import { buildBlogArticleMetadata } from '@/lib/seo';

const article = {
  title: '20 Family Trivia Questions and Answers for Kids and Adults',
  description: 'Host a mixed-age family trivia game with ten topics. Each pairs an easy question with a challenge and an explained answer. Print five pairs to take along.',
  path: '/blog/family-trivia-questions',
} as const;

export const metadata = buildBlogArticleMetadata({
  ...article,
  keywords: ['family trivia questions', 'trivia for kids and adults'],
  publishedTime: '2026-11-18T00:00:00Z',
  modifiedTime: '2026-11-18T00:00:00Z',
});

export default function Page() {
  return (
    <PlayableArticle {...article} metadata={metadata} sheet='family-game-night' groups={groups}
      introduction='Let the youngest player choose a topic. Read the easy question to one player and the challenge to another, then swap roles on the next topic. Both questions are worth one point.'
      printTip='Taking game night to someone else’s house? Print the first five pairs. Players can write on page one while the host reads the answers from page two.'
      related={[
        { href: '/blog/family-reunion-icebreakers', label: 'Host a 15-minute family reunion icebreaker' },
        { href: '/blog/road-trip-trivia', label: 'Try three road trip trivia rounds' },
        { href: '/blog/family-trivia-one-phone', label: 'Play family trivia games on one phone' },
      ]}
    />
  );
}
