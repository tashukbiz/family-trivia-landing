import PlayableArticle from '@/components/PlayableArticle';
import groups from '@/lib/rounds/road-trip.json';
import { buildBlogArticleMetadata } from '@/lib/seo';

const article = {
  title: '30 Road Trip Trivia Questions for Kids and Adults',
  description: 'Play three read-aloud car trivia rounds about roads, landmarks and places. Get answers on the page or print a 10-question sheet for the trip.',
  path: '/blog/road-trip-trivia',
} as const;

export const metadata = buildBlogArticleMetadata({
  ...article,
  keywords: ['road trip trivia', 'trivia for kids and adults'],
  publishedTime: '2026-11-18T00:00:00Z',
  modifiedTime: '2026-11-18T00:00:00Z',
});

export default function Page() {
  return (
    <PlayableArticle {...article} metadata={metadata} sheet='road-trip' groups={groups}
      introduction='Let a passenger host while the driver keeps their eyes on the road. Start with the easy question in each pair, then let someone else try the challenge. Give a point for each answer.'
      printTip='Pack the first round in the glove compartment before you leave. Give the passengers page one and let the host keep page two. The paper game works without reception.'
      related={[
        { href: '/blog/camping-games-for-families', label: 'Choose a family game for the campsite' },
        { href: '/blog/family-trivia-questions', label: 'Play a mixed-age family trivia round' },
        { href: '/blog/family-trivia-one-phone', label: 'Play family trivia games on one phone' },
      ]}
    />
  );
}
