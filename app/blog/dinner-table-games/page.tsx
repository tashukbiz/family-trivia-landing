import Link from 'next/link';
import GameGuide from '@/components/GameGuide';
import { TakeAlongRound } from '@/components/TakeAlongRound';
import { buildBlogArticleMetadata } from '@/lib/seo';

const article = {
  title: '7 Dinner Table Games for Families to Play Between Courses',
  description: 'Play seven family dinner table games with no setup, from a two-minute guessing game while dinner cooks to a mixed-age team round after dessert.',
  path: '/blog/dinner-table-games',
  keywords: ['dinner table games', 'games to play at the dinner table'],
} as const;

export const metadata = buildBlogArticleMetadata({
  ...article, keywords: [...article.keywords],
  publishedTime: '2026-11-18T00:00:00Z', modifiedTime: '2026-11-18T00:00:00Z',
});

export default function Page() {
  return (
    <GameGuide article={article} metadata={metadata}>
      <p>Dinner is almost ready and someone has already asked twice. Give that person the first turn. Three Clues takes about two minutes, works with two people, and ends the moment the food arrives. If everyone lingers after dessert, finish with a team round.</p>

      <section>
        <h2>While dinner cooks</h2>
        <h3>1. Three Clues</h3>
        <p>Choose something everyone knows. Give one clue at a time and allow one guess per person after each clue. For a zipper, try “I have teeth,” then “I go up and down,” then “You might find me on a jacket.” Whoever guesses gets to give the next set of clues. If nobody gets it, reveal the answer and let someone else choose.</p>
        <h3>2. The Picnic Basket</h3>
        <p>Start with “I packed a pear.” The next person repeats the pear and adds something of their own. Keep the items in order as the basket grows. If someone forgets an item, the person who packed it mimes it. See if you can get everybody’s contribution into the basket before dinner is served.</p>
      </section>

      <section>
        <h2>Between courses</h2>
        <h3>3. What Changed?</h3>
        <p>One player studies their end of the table, then closes their eyes. Another changes one small thing, such as folding a napkin in half or turning a spoon around. Give the guesser two tries to spot it. Take turns making the change. A younger child can choose between two possibilities if the first guess misses.</p>
        <h3>4. Fortunately, Unfortunately</h3>
        <p>Start a story with “Fortunately, a penguin came to dinner.” The next player adds a snag beginning with “Unfortunately,” and the next rescues the story with “Fortunately.” Go around once, then give the last person the job of getting the penguin home. Two players can trade lines until the penguin leaves.</p>
        <h3>5. The Secret Rule</h3>
        <p>The host invents a rule for an imaginary café. Start easy by accepting only foods beginning with P. Say “Pizza is on the menu. Soup is off.” Each player offers a dish and hears whether the café serves it. When someone thinks they know the rule, have them prove it by naming one food the café accepts and one it turns away.</p>
      </section>

      <section>
        <h2>After dessert</h2>
        <h3>6. Two Things in Common</h3>
        <p>Pick two unlikely partners, such as a fork and a hairbrush. Work together to find two things they share. Both have a handle, and both have parts that stick out in a row. The person who finds the second connection chooses the next pair. “A sock and an envelope” is a good one to leave the grown-ups with.</p>
        <h3>7. Pass the Quiz</h3>
        <p>Make pairs and let one person host. Give each pair an easy question and a challenge on the same topic, worth one point apiece. For instance, ask how many sides a triangle has (three), then how many equal sides an equilateral triangle has (all three). Let partners decide who answers first and swap roles on the next topic. With two at dinner, take turns hosting and keep one shared score.</p>
        <p>For ready-made pairs, open the <Link href='/blog/family-trivia-questions'>mixed-age family trivia round</Link>. Eating out with kids? The <Link href='/blog/keep-kids-entertained-at-restaurants'>restaurant guide</Link> has ideas for the wait before your order arrives.</p>
      </section>
      <TakeAlongRound sheet='family-game-night'>Having dinner at someone else’s house? Bring the five-pair quiz on paper. Give the host the answer key and leave the question sheet in the middle of the table.</TakeAlongRound>
    </GameGuide>
  );
}
