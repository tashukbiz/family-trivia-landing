import DownloadButtons from '@/components/DownloadButtons';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';

const PUZZLE_LANTERN_URL = 'https://puzzlelantern.app/';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: 'Daily Puzzle Games for Parents and Teens | Family Trivia',
  description:
    'Daily puzzle games give parents and teens a five-minute shared ritual between family trivia nights. Here is how to set up a family leaderboard with Puzzle Lantern.',
  path: '/blog/daily-puzzle-games-for-parents-and-teens',
  keywords: [
    'daily puzzle games',
    'puzzle games for parents and teens',
    'games to play with teenagers',
    'family leaderboard',
    'daily sudoku app',
    'memory card game',
    'daily word game',
    'puzzle lantern',
  ],
  publishedTime: '2026-10-01T00:00:00Z',
  modifiedTime: '2026-10-01T00:00:00Z',
});

export default function DailyPuzzleGamesForParentsAndTeensPage() {
  const puzzleGames = [
    {
      name: 'Sudoku',
      category: 'Logic',
      href: 'https://puzzlelantern.app/games/sudoku/',
      anchor: 'daily Sudoku',
      body: 'A full 9×9 grid, not a mini version. Pencil marks and unlimited undo make it friendly for a teen who has never finished one, and the extra puzzles go all the way up to Expert for the parent who has.',
    },
    {
      name: 'Word Sense',
      category: 'Words',
      href: 'https://puzzlelantern.app/games/word-sense/',
      anchor: 'Word Sense daily word game',
      body: 'Three hidden words a day, each with up to five clues. Fewer clues means a better result, which makes for a great dinner-table argument about who should have guessed sooner.',
    },
    {
      name: 'Recall',
      category: 'Memory',
      href: 'https://puzzlelantern.app/games/recall/',
      anchor: 'Recall pattern memory game',
      body: 'A pattern flashes on a grid, then you tap the cells you saw. The rounds get bigger and faster until three slips end the run. Teens tend to be annoyingly good at this one.',
    },
    {
      name: 'Vanish',
      category: 'Memory',
      href: 'https://puzzlelantern.app/games/vanish/',
      anchor: 'Vanish memory card game',
      body: 'A hand of playing cards appears, then comes back with one card gone. Pick the missing card from a line-up of five. Quick to explain, surprisingly hard to master.',
    },
  ] as const;

  const setupSteps = [
    {
      title: 'Install Puzzle Lantern on each phone',
      body: 'Unlike Family Trivia, this one is played on your own device. There is no signup form: the app creates a pseudonymous account on first launch, so nobody types in a real name. It is meant for ages 13 and up, and teens under 18 need a parent or guardian’s permission, so do the install together.',
    },
    {
      title: 'Add each other as friends',
      body: 'Send an invite link in the family group chat, or send a request to a username you already know. The other person has to accept, so nobody ends up connected by accident.',
    },
    {
      title: 'Everyone plays the same Daily',
      body: 'Each game has one Daily puzzle a day, identical for every player. You can play at the bus stop and your teen can play after practice. It is still the same puzzle.',
    },
    {
      title: 'Compare results at dinner',
      body: 'Friend results sit next to each other on each game’s leaderboard. Bring them to the table: who used the fewest clues, who survived the most Recall rounds, who finally beat the Sudoku without a hint.',
    },
  ] as const;

  const comparisonRows = [
    {
      label: 'Best for',
      trivia: 'Game night, road trips, restaurants',
      puzzles: 'A few spare minutes every day',
    },
    {
      label: 'Devices',
      trivia: 'One shared phone or tablet',
      puzzles: 'Each player on their own phone',
    },
    {
      label: 'Ages',
      trivia: 'Kids with an adult guiding them, up to grandparents',
      puzzles: '13 and up (under 18 with a parent’s permission)',
    },
    {
      label: 'How it stays fair',
      trivia: 'Each player picks their own topic and difficulty',
      puzzles: 'Everyone gets the identical Daily puzzle',
    },
    {
      label: 'Where you play',
      trivia: 'Together, in the same room',
      puzzles: 'Apart, then compare later',
    },
  ] as const;

  const houseRules = [
    {
      title: 'No one has to play every game',
      body: 'Puzzle Lantern deliberately has no daily checklist or combined score. Let each person pick their favorite. A parent who only plays Sudoku and a teen who only plays Vanish can still trash-talk.',
    },
    {
      title: 'Skipping a day is fine',
      body: 'The point is a shared thread, not another chore. If a streak becomes a source of stress, stop counting it.',
    },
    {
      title: 'Celebrate the funny misses',
      body: 'The Word Sense guess that was wildly off is usually a better story than the perfect solve.',
    },
    {
      title: 'Let the teen explain the strategy',
      body: 'Teens rarely get to be the expert at home. If they figured out a Sudoku technique or a Recall trick, ask them to teach it.',
    },
  ] as const;

  const faqQuestions = [
    {
      question: 'What is Puzzle Lantern?',
      answer:
        'Puzzle Lantern is a daily puzzle app for iPhone and iPad with Sudoku, Word Sense, Recall and Vanish. Each game has one shared Daily puzzle a day plus optional extra puzzles, and friends can compare results on the same puzzle. It is made by the same small team behind Family Trivia.',
    },
    {
      question: 'Is Puzzle Lantern suitable for kids?',
      answer:
        'Puzzle Lantern is intended for players aged 13 and over, and players under 18 need a parent or guardian’s permission. For younger children, Family Trivia is the better fit: it runs on one shared device, and each player gets their own topic and difficulty with an adult guiding them.',
    },
    {
      question: 'Do we need to be in the same room to compare results?',
      answer:
        'No. Everyone plays the identical Daily puzzle on their own phone whenever it suits them, and results appear side by side for friends. Many families compare them later at dinner.',
    },
    {
      question: 'Does Puzzle Lantern have ads or require a signup?',
      answer:
        'There are no ads in Puzzle Lantern and no signup form. The app creates a pseudonymous account automatically, with an optional email address for account recovery. See the app for current access and subscription options.',
    },
    {
      question: 'How is this different from Family Trivia?',
      answer:
        'Family Trivia is a pass-and-play trivia game for the whole family on one device, with AI-generated questions tuned to each player. Puzzle Lantern is a set of daily puzzles each person plays on their own phone. One is for playing together, the other keeps a small shared habit going between game nights.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        metadata,
        type: 'Article',
        headline: 'Daily Puzzle Games for Parents and Teens',
        description:
          'Daily puzzle games give parents and teens a five-minute shared ritual between family trivia nights. Here is how to set up a family leaderboard with Puzzle Lantern.',
        path: '/blog/daily-puzzle-games-for-parents-and-teens',
        keywords:
          'daily puzzle games, puzzle games for parents and teens, games to play with teenagers, family leaderboard, daily sudoku app, puzzle lantern',
      }),
      {
        '@type': 'FAQPage',
        mainEntity: faqQuestions.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className='min-h-screen bg-white dark:bg-slate-900'>
        <div className='px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-5'>
          <div className='flex flex-col max-w-4xl flex-1'>
            <header className='flex items-center justify-between whitespace-nowrap bg-white/70 dark:bg-background-dark/70 backdrop-blur-md rounded-full px-8 py-3 shadow-sm mb-8'>
              <Link
                href='/'
                className='flex items-center gap-4 text-slate-900 dark:text-white hover:opacity-80 transition-opacity'
              >
                <Image
                  src='/favicon.ico'
                  alt='Family Trivia'
                  width={24}
                  height={24}
                  className='rounded'
                />
                <h2 className='text-lg font-bold tracking-tight'>
                  Family Trivia
                </h2>
              </Link>
              <div className='hidden md:flex flex-1 justify-end gap-8'>
                <a
                  href='#cta'
                  className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'
                >
                  <span className='truncate'>Download</span>
                </a>
              </div>
            </header>

            <div className='mb-6'>
              <Link
                href='/blog'
                className='text-primary hover:underline text-sm'
              >
                &larr; Back to Blog
              </Link>
            </div>

            <article className='prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
                  Daily Puzzle Games for Parents and Teens
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Trivia night brings everyone to the table once a week. A
                  five-minute daily puzzle keeps the conversation going the
                  other six days.
                </p>
              </header>

              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Somewhere around thirteen, kids stop wanting to do things
                  with their parents on a schedule. Family game night still
                  works when you can get everyone in the room, but on a normal
                  Tuesday your teen has practice, homework and a phone full of
                  group chats, and you have a commute.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  A shared daily puzzle is one of the easiest ways to keep a
                  small thread running between you. Everyone solves the same
                  puzzle on their own time, and the results become something
                  to talk about at dinner: who cracked it, who needed every
                  clue, who swears the timer was broken.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Full disclosure: the app we use for this,{' '}
                  <a
                    href={PUZZLE_LANTERN_URL}
                    target='_blank'
                    rel='noopener'
                    className='text-primary font-semibold hover:underline'
                  >
                    Puzzle Lantern
                  </a>
                  , is made by the same small team that makes Family Trivia.
                  We built it for exactly this kind of everyday, low-pressure
                  play.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  The Short Answer
                </h2>
                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200'>
                    Pick a daily puzzle app where everyone gets the identical
                    puzzle, add each other as friends, and compare results at
                    dinner. Keep Family Trivia for the nights you are all in
                    one room, and use{' '}
                    <a
                      href={PUZZLE_LANTERN_URL}
                      target='_blank'
                      rel='noopener'
                      className='text-primary font-semibold hover:underline'
                    >
                      daily puzzle games like Puzzle Lantern
                    </a>{' '}
                    for the days in between.
                  </p>
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Why a Daily Puzzle Works With Teenagers
                </h2>
                <ul className='list-disc pl-6 mb-4 space-y-2 text-lg text-gray-800 dark:text-gray-200'>
                  <li>
                    <strong>No scheduling.</strong> Nobody has to be home at
                    the same time. You play when it suits you, and so do they.
                  </li>
                  <li>
                    <strong>It is short.</strong> A Daily takes a few minutes,
                    which is about the length of attention a teen will give a
                    parent-suggested activity.
                  </li>
                  <li>
                    <strong>It is genuinely fair.</strong> Everyone gets the
                    exact same puzzle, so a teen can beat a parent outright.
                    That matters more to them than they will admit.
                  </li>
                  <li>
                    <strong>It gives you something to talk about.</strong>{' '}
                    &ldquo;How was school?&rdquo; gets a shrug. &ldquo;How many
                    clues did you need on the last word?&rdquo; gets an
                    answer, and sometimes a rant.
                  </li>
                </ul>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  One honest note: we play these because they are fun. We
                  will not claim that a puzzle a day makes anyone smarter, and
                  you should be wary of any app that does.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  The Four Puzzle Lantern Games
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-5'>
                  Puzzle Lantern currently has four games across logic, words
                  and memory. Each has one shared Daily puzzle, and most offer
                  more puzzles if someone wants to keep going.
                </p>
                <div className='space-y-4'>
                  {puzzleGames.map((game) => (
                    <div
                      key={game.name}
                      className='bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-200 dark:border-slate-700'
                    >
                      <p className='text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1'>
                        {game.category}
                      </p>
                      <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                        {game.name}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300 mb-2'>
                        {game.body}
                      </p>
                      <a
                        href={game.href}
                        target='_blank'
                        rel='noopener'
                        className='text-primary font-semibold hover:underline'
                      >
                        More about the {game.anchor} &rarr;
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  How to Set Up a Family Leaderboard
                </h2>
                <div className='space-y-5'>
                  {setupSteps.map((step, idx) => (
                    <div
                      key={step.title}
                      className='bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-200 dark:border-slate-700'
                    >
                      <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                        {idx + 1}. {step.title}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Family Trivia or a Daily Puzzle? Use Both
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-5'>
                  They solve different problems. Family Trivia is built for
                  being together. A daily puzzle is built for being apart and
                  still having something in common.
                </p>
                <div className='overflow-x-auto'>
                  <table className='w-full text-left border-collapse text-gray-800 dark:text-gray-200'>
                    <thead>
                      <tr className='border-b-2 border-gray-300 dark:border-slate-600'>
                        <th className='py-3 pr-4' />
                        <th className='py-3 pr-4 font-bold'>Family Trivia</th>
                        <th className='py-3 font-bold'>Puzzle Lantern</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr
                          key={row.label}
                          className='border-b border-gray-200 dark:border-slate-700 align-top'
                        >
                          <th className='py-3 pr-4 font-semibold'>
                            {row.label}
                          </th>
                          <td className='py-3 pr-4'>{row.trivia}</td>
                          <td className='py-3'>{row.puzzles}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mt-5'>
                  If you have younger kids too, they stay right in the game on
                  trivia night. Family Trivia lets{' '}
                  <Link
                    href='/blog/family-trivia-one-phone'
                    className='text-primary font-semibold hover:underline'
                  >
                    every player pick their own topic and difficulty on one
                    phone
                  </Link>
                  , so a seven-year-old and a sixteen-year-old can play the
                  same round.
                </p>
                <div className='mt-8'>
                  <BlogCtaSection />
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  House Rules That Keep It Fun
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {houseRules.map((rule) => (
                    <div
                      key={rule.title}
                      className='bg-primary/10 dark:bg-primary/20 rounded-lg p-5'
                    >
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                        {rule.title}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {rule.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Bring the Puzzles to Trivia Night
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  The two habits feed each other. Before the first trivia
                  round, go around the table and share the week&apos;s best
                  and worst puzzle moments. Whoever had the best week picks
                  the first trivia topic. Whoever had the worst gets to choose
                  their difficulty last.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Need topics for the trivia part? Start with our{' '}
                  <Link
                    href='/blog/trivia-questions-for-adults'
                    className='text-primary font-semibold hover:underline'
                  >
                    trivia questions for adults
                  </Link>{' '}
                  for the grown-ups and teens, or browse more{' '}
                  <Link
                    href='/blog/family-game-night-ideas'
                    className='text-primary font-semibold hover:underline'
                  >
                    family game night ideas
                  </Link>{' '}
                  for mixed ages.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Frequently Asked Questions
                </h2>
                <div className='space-y-5'>
                  {faqQuestions.map((faq) => (
                    <div key={faq.question}>
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
                        {faq.question}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <section
              id='cta'
              className='mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Ready for Trivia Night?
              </h2>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Download Family Trivia and play together on one iPhone or
                iPad. Then keep the competition going all week with{' '}
                <a
                  href={PUZZLE_LANTERN_URL}
                  target='_blank'
                  rel='noopener'
                  className='text-white font-semibold underline'
                >
                  Puzzle Lantern
                </a>
                .
              </p>
              <DownloadButtons
                containerClassName='flex-wrap gap-4 flex justify-center'
                buttonClassName='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
