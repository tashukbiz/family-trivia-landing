import Link from 'next/link';
import GameGuide from '@/components/GameGuide';
import { TakeAlongRound } from '@/components/TakeAlongRound';
import { buildBlogArticleMetadata } from '@/lib/seo';

const article = {
  title: 'Family Reunion Icebreakers That Get Three Generations Talking',
  description: 'Open a family reunion in 15 minutes with a partner introduction, a story swap, and a team game. Includes host wording and options for small and large groups.',
  path: '/blog/family-reunion-icebreakers',
  keywords: ['family reunion icebreakers', 'family reunion icebreaker games'],
} as const;

export const metadata = buildBlogArticleMetadata({
  ...article, keywords: [...article.keywords],
  publishedTime: '2026-11-18T00:00:00Z', modifiedTime: '2026-11-18T00:00:00Z',
});

export default function Page() {
  return (
    <GameGuide article={article} metadata={metadata}>
      <p>Give people a reason to learn one name before anyone has to remember twenty. This 15-minute opener starts in pairs, grows into groups of four, and ends with a game those four can play together. A newcomer can join from the first minute, even if they’ve never heard a single family story.</p>

      <section>
        <h2>First 3 minutes · Find a partner</h2>
        <p>Say, “Find someone you haven’t talked to today. Tell them your name, the name you like to go by, and something you could teach them in five minutes.” Give your own answer first. “I’m Jo, and I can teach you to whistle through a blade of grass” gives people more to work with than a job title.</p>
        <p>After each person has had a turn, ask two pairs to sit together. Each person introduces their partner to the other pair. With an odd number, make a trio and have each person introduce the neighbor on their left. Offer a child the choice of introducing their partner or having the partner introduce them first.</p>
      </section>

      <section>
        <h2>Next 5 minutes · Swap a small story</h2>
        <p>Give each table a choice of two prompts. Try “What game did you play when you were little?” or “What food always went first at your house?” A child can answer about last week. A grandparent can answer about a kitchen or playground nobody else at the table has seen.</p>
        <p>Allow about half a minute per person. Invite one follow-up from the group, such as “Could you teach us the rules?” or “Who used to make it?” Anyone can pass. At the end, ask the group to choose one thing they would like to try together. That gives the conversation somewhere to go after the opener.</p>
      </section>

      <section>
        <h2>Last 7 minutes · Play a mixed-generation team round</h2>
        <p>Keep each group together as a team. Let the youngest willing player pick a topic from the <Link href='/blog/family-trivia-questions'>easy-and-challenge trivia pairs</Link>. Read both questions aloud. Give teams a moment to confer, then let each team share its answers. One point per correct answer keeps scoring simple.</p>
        <p>Try this practice pair first. “How many legs does a spider have?” earns a point for eight. “How many more legs does a spider have than an adult insect?” earns another for two. Choose a fresh topic for the scored round. Switch spokespeople after each pair so the same relative doesn’t answer everything. Finish after three pairs and hand the next topic choice to someone who hasn’t spoken yet.</p>
      </section>

      <section>
        <h2>Adjust for the room</h2>
        <p><strong>One small table.</strong> Skip the regrouping. Introduce your partner to the table and play trivia toward one shared score. With six players, getting five of six answers makes a good team target.</p>
        <p><strong>A hall full of relatives.</strong> Give each table its own host and answer key. Start and end the three activities together, but let conversations happen at table volume. Give late arrivals a seat beside a host who can introduce them on the next turn.</p>
        <p><strong>A quieter guest.</strong> Offer a job with a clear endpoint, such as choosing the next topic or marking the score. They can join the conversation when something catches their interest.</p>
      </section>
      <TakeAlongRound sheet='family-game-night'>Hosting at a picnic shelter or community hall? Print a player page for each table and give the answer key to its host. At a smaller gathering, one phone can host the next round.</TakeAlongRound>
    </GameGuide>
  );
}
