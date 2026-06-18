import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: 'Family Game Night Ideas: Fun for Every Age | Family Trivia',
  description:
    'Family game night ideas that work for every age — from toddlers to grandparents. Get 15 fun games, mixed-age tips, and a hosting guide. Play tonight!',
  path: '/blog/family-game-night-ideas',
  keywords: [
    'family game night ideas',
    'family game night ideas for all ages',
    'game night ideas for families',
    'fun family game night ideas',
    'game night ideas for kids and adults',
    'how to host a family game night',
    'family game night activities',
  ],
});

export default function FamilyGameNightIdeasPage() {
  const gameGroups = [
    {
      category: 'Classic Board & Card Games',
      games: [
        {
          name: 'Uno',
          blurb:
            'Fast, colorful, and easy to learn — a few wild cards keep even little ones in the running.',
          ages: 'Best for ages 6+',
        },
        {
          name: 'Forbidden Island (cooperative board game)',
          blurb:
            'Everyone works together to beat the game, so no one gets left in the dust.',
          ages: 'Best for ages 8+',
        },
        {
          name: 'Dominoes',
          blurb:
            'Simple matching for the youngest players, real strategy for the grown-ups.',
          ages: 'Best for ages 5+',
        },
      ],
    },
    {
      category: 'Party & Active Games',
      games: [
        {
          name: 'Charades',
          blurb:
            'No equipment, big laughs — act out movies, animals, or family in-jokes.',
          ages: 'Best for ages 5+',
        },
        {
          name: 'Pictionary',
          blurb:
            'Drawing levels the field fast; terrible artists are often the funniest.',
          ages: 'Best for ages 6+',
        },
        {
          name: 'Minute-to-Win-It Challenges',
          blurb:
            'Quick 60-second physical dares (stack cups, move cookies with your face) burn off energy between rounds.',
          ages: 'Best for ages 5+',
        },
      ],
    },
    {
      category: 'Trivia & Quiz Games',
      games: [
        {
          name: 'Family Trivia (app)',
          blurb:
            'One device, AI per-player difficulty, and a question set that stays fair for every age at the same table.',
          ages: 'Best for ages 5+',
        },
        {
          name: 'A DIY Trivia Round',
          blurb:
            'Build your own quiz from ready-made sets like our family trivia questions for adults and trivia questions for kids.',
          ages: 'Best for all ages',
          links: [
            {
              text: 'family trivia questions for adults',
              href: '/blog/trivia-questions-for-adults',
            },
            {
              text: 'trivia questions for kids',
              href: '/blog/trivia-questions-for-kids',
            },
          ],
        },
        {
          name: 'Heads Up–Style Guessing',
          blurb:
            'Hold a clue on your forehead while the family shouts hints — chaotic, simple, and great for big age gaps.',
          ages: 'Best for ages 6+',
        },
      ],
    },
    {
      category: 'Screen-Light / No-Equipment Games',
      games: [
        {
          name: '20 Questions',
          blurb:
            'One person thinks of something; everyone else narrows it down with yes-or-no questions.',
          ages: 'Best for ages 5+',
        },
        {
          name: 'Would You Rather',
          blurb:
            'Silly or thoughtful either-or questions spark debate and reveal a lot about each other.',
          ages: 'Best for ages 4+',
        },
        {
          name: 'Story-Building Scavenger Hunt',
          blurb:
            'Take turns adding a sentence to a group story, or race to find household items off a list.',
          ages: 'Best for ages 4+',
        },
      ],
    },
    {
      category: 'Co-op Games for Young Kids',
      games: [
        {
          name: 'Memory Matching',
          blurb:
            'Flip cards to find pairs — little kids often win, which they love.',
          ages: 'Best for ages 3+',
        },
        {
          name: 'Outfoxed! (win-together game)',
          blurb:
            'A gentle whodunnit where the whole family cooperates to catch the culprit.',
          ages: 'Best for ages 5+',
        },
        {
          name: 'Go Fish',
          blurb:
            'A classic card game that teaches turn-taking and counting without any reading.',
          ages: 'Best for ages 4+',
        },
      ],
    },
  ] as const;

  const faqQuestions = [
    {
      question: 'What are good family game night ideas?',
      answer:
        'Great family game night ideas include trivia games with adjustable difficulty, charades, Pictionary, cooperative board games, and 20 Questions. The best ones can flex by age so everyone from young kids to grandparents stays engaged.',
    },
    {
      question: 'How do you make game night fun for different ages?',
      answer:
        'Choose games where difficulty can adjust per player, pair younger kids with adults on teams, keep rounds short, and let kids take turns picking the game. Apps like Family Trivia set each player’s difficulty automatically, so a 7-year-old and an adult can play the same round fairly.',
    },
    {
      question: 'What games can the whole family play together?',
      answer:
        'Trivia, charades, Pictionary, 20 Questions, and cooperative board games all work for the whole family because they don’t require reading-heavy rules or even skill levels. Single-device trivia apps let up to 10 players join on one phone or tablet.',
    },
    {
      question: 'How often should you have family game night?',
      answer:
        'Once a week is a popular rhythm that’s frequent enough to become a tradition but easy to keep up. Even once or twice a month works — consistency matters more than frequency.',
    },
    {
      question: 'What is a good game night idea for a big age gap?',
      answer:
        'Pick a game with per-player difficulty so younger kids get easier questions and adults get harder ones in the same round. Family Trivia does this automatically on a single shared device, which removes the “too hard / too easy” problem.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        type: 'Article',
        headline: 'Family Game Night Ideas: How to Make It Fun for Every Age',
        description:
          'Family game night ideas that work for every age — from toddlers to grandparents. Get 15 fun games, mixed-age tips, and a hosting guide. Play tonight!',
        path: '/blog/family-game-night-ideas',
        keywords:
          'family game night ideas, family game night ideas for all ages, game night ideas for kids and adults, how to host a family game night, family game night activities',
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
            {/* TopNavBar */}
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

            {/* Breadcrumb */}
            <div className='mb-6'>
              <Link
                href='/blog'
                className='text-primary hover:underline text-sm'
              >
                &larr; Back to Blog
              </Link>
            </div>

            {/* Article */}
            <article className='prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
                  Family Game Night Ideas: How to Make It Fun for Every Age
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  From classic board games to screen-light favorites — 15 ideas
                  plus a simple plan for keeping kids, teens, and grandparents
                  all engaged.
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Getting everyone in the same room is the easy part. The hard
                  part is keeping a 6-year-old, a 15-year-old, and a grandparent
                  all engaged in the same game at the same time. One person is
                  bored, another is lost, and someone always mutters that it
                  isn't fair.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  You don't need a closet full of expensive games to fix that.
                  You just need a few ideas that flex across ages, a couple of
                  simple tricks for balancing skill, and a loose plan for how the
                  evening flows.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Below you'll find 15 family game night ideas grouped by type,
                  practical tips for mixed-age groups, and a step-by-step hosting
                  guide so you can actually play tonight.
                </p>
              </section>

              {/* The Short Answer */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  The Short Answer: What Makes a Good Family Game Night
                </h2>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200'>
                    The best family game night ideas work across ages: trivia
                    games with adjustable difficulty, charades, cooperative
                    board games, 20 Questions, and Pictionary. The trick to
                    keeping everyone engaged is choosing games where the
                    difficulty can flex per player so young kids and adults are
                    both fairly challenged.
                  </p>
                </div>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  When you're choosing what to play, lean toward these mixed-age
                  categories:
                </p>

                <ul className='list-disc pl-6 mb-4 space-y-2 text-lg text-gray-800 dark:text-gray-200'>
                  <li>
                    <strong>Adjustable trivia games</strong> — each player gets
                    questions matched to their level
                  </li>
                  <li>
                    <strong>Acting and drawing games</strong> like charades and
                    Pictionary, where talent matters more than age
                  </li>
                  <li>
                    <strong>Cooperative board games</strong> where everyone wins
                    or loses together
                  </li>
                  <li>
                    <strong>No-equipment guessing games</strong> like 20
                    Questions and Would You Rather
                  </li>
                  <li>
                    <strong>Simple card games</strong> that little kids can win
                    on luck alone
                  </li>
                </ul>
              </section>

              {/* Why Family Game Night Matters */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Family Game Night Matters
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  A regular game night does more than fill an evening. It gives
                  everyone a reliable reason to put devices down and sit at the
                  same table, laughing at the same things. Kids get your full
                  attention, teens lower their guard a little, and grandparents
                  get pulled right into the action. Over time it becomes the
                  thing your family does — a small ritual that carries real
                  weight. Here's what makes it worth protecting on the calendar.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>❤️</span> Strengthens Bonds
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Shared laughter and friendly competition build memories and
                      inside jokes that hold a family together long after the
                      game box is packed away.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>📵</span> Screen-Light Fun
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Game night is one of the easiest ways to trade passive
                      screen time for face-to-face fun without anyone feeling
                      like they're being forced to "unplug."
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>⚖️</span> Levels the Playing
                      Field
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      The right games let a first-grader genuinely beat a parent,
                      which is thrilling for kids and keeps everyone invested in
                      the outcome.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>📅</span> Builds a Weekly Ritual
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      A predictable game night gives the week a rhythm. Kids look
                      forward to it, and it's far easier to keep going once it
                      becomes "what we do" on a certain night.
                    </p>
                  </div>
                </div>
              </section>

              {/* How to Make Game Night Work for Every Age */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  How to Make Game Night Work for Every Age
                </h2>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>
                  Start With the Age Gap Problem
                </h3>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Most game-night frustration comes from one root cause: a wide
                  age range playing one game built for a single skill level.
                  Younger kids get bored or overwhelmed and wander off. Teens and
                  adults are under-challenged and start checking their phones.
                  And almost inevitably, someone decides it isn't fair. Once you
                  see that pattern, the fixes below become obvious.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>
                  Pick Games With Adjustable Difficulty
                </h3>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  The single biggest upgrade you can make is choosing games where
                  difficulty flexes per player. This is exactly the problem the{' '}
                  <strong>Family Trivia</strong> app was built to solve: it sets
                  each player's difficulty with AI, so your 7-year-old gets an
                  easy dinosaur question while you get a genuinely hard one — in
                  the same game, on the same device, in the same round. Everyone
                  is challenged at their own level, and nobody is bored or lost.
                  If you want to see exactly{' '}
                  <Link
                    href='/blog/how-to-play-family-trivia-game'
                    className='text-primary font-semibold hover:underline'
                  >
                    how Family Trivia works on one device
                  </Link>
                  , we walk through the full setup step by step.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>
                  Use Teams to Balance Skill
                </h3>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  When a game can't adjust on its own, you can balance it
                  manually. Pair a young kid with an adult or older sibling so the
                  little one stays involved and the team has a fair shot. It also
                  turns the game into a chance to coach and cheer rather than
                  compete head-to-head.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>
                  Rotate Who Picks the Game
                </h3>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Let each family member take a turn choosing the game across the
                  weeks. Kids buy in far more when they have ownership, and you'll
                  naturally end up with more variety than if one person always
                  decides.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>
                  Keep Rounds Short
                </h3>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Match the format to the shortest attention span in the room.
                  Short rounds keep little kids from melting down and let you swap
                  games before anyone gets restless. It's better to end while
                  everyone still wants more than to grind through a long game that
                  loses the room.
                </p>
              </section>

              {/* 15 Family Game Night Ideas */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  15 Family Game Night Ideas for Every Age
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Here are 15 ideas grouped into five easy categories. Mix and
                  match a couple from different groups for variety, and lean on
                  the ones that flex across ages when your group is especially
                  mixed.
                </p>

                <div className='space-y-10'>
                  {gameGroups.map((group) => (
                    <div key={group.category}>
                      <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                        {group.category}
                      </h3>
                      <div className='space-y-5'>
                        {group.games.map((game) => (
                          <div
                            key={game.name}
                            className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'
                          >
                            <p className='text-gray-700 dark:text-gray-300 mb-2'>
                              <strong className='text-gray-900 dark:text-white'>
                                {game.name}
                              </strong>{' '}
                              — {game.blurb}
                              {'links' in game && game.links ? (
                                <>
                                  {' '}
                                  Try our{' '}
                                  {game.links.map((link, i) => (
                                    <span key={link.href}>
                                      <Link
                                        href={link.href}
                                        className='text-primary font-semibold hover:underline'
                                      >
                                        {link.text}
                                      </Link>
                                      {i < game.links.length - 1 ? ' and ' : '.'}
                                    </span>
                                  ))}
                                </>
                              ) : null}
                            </p>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                              {game.ages}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to Host */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  How to Host a Great Family Game Night (Step by Step)
                </h2>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      1. Pick a Regular Night
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Choose a consistent slot — Friday dinner, Sunday afternoon —
                      and put it on the calendar. A predictable night is what
                      turns a one-off into a tradition everyone protects.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      2. Set Up the Room
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Clear one table, set out simple snacks, and put phones in a
                      basket out of reach. A little prep removes friction so you
                      can start playing instead of hunting for chairs and pieces.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      3. Plan a Warm-Up, a Main Game, and a Wind-Down
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Open with something quick and silly to get everyone
                      laughing, move into your main game, then close with a calm,
                      easy round. This arc keeps energy from peaking too early or
                      crashing.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      4. Have a Backup Game Ready
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Keep one no-setup game on standby in case the first choice
                      flops or finishes fast. A backup means a quiet moment never
                      ends the whole night.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      5. Keep Score Loosely and Celebrate Everyone
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Track points if it adds fun, but call out funny moments,
                      clever guesses, and good sportsmanship too. When everyone
                      gets a win of some kind, nobody dreads losing.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      6. End on a High Note
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Wrap up while everyone is still having fun rather than
                      pushing into tired and cranky. Ending on a laugh is what
                      makes the family ask to do it again next week.
                    </p>
                  </div>
                </div>

                <div
                  id='cta'
                  className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-8 text-center'
                >
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    🎮 Want the Easy-Mode Option for Mixed Ages?
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                    <strong>Family Trivia</strong> handles the difficulty for you.
                    Each player gets questions matched to their age and level on
                    one shared device, so a 7-year-old and a grandparent can play
                    the very same round and both feel challenged — no scorekeeping
                    headaches, no "too hard / too easy" complaints.
                  </p>

                  <DownloadButtons
                    containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center mb-6'
                    buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'
                  />

                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    ✓ Up to 10 players &nbsp;•&nbsp; ✓ One device &nbsp;•&nbsp; ✓
                    Fair for every age &nbsp;•&nbsp; ✓ Endless questions
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Frequently Asked Questions
                </h2>
                <div className='space-y-6'>
                  {faqQuestions.map((faq) => (
                    <div key={faq.question}>
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                        {faq.question}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Conclusion: Make It a Tradition
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  The best family game night isn't the one with the fanciest
                  games — it's the one that actually happens, week after week.
                  Pick a night, grab a couple of ideas from the list above, lean
                  on games that flex across ages, and keep it light. The first few
                  evenings set the tone; before long it becomes the thing your
                  family looks forward to.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  So clear the table, round everyone up, and start tonight. Once
                  it's a habit, you'll wonder how your week ran without it.
                </p>

                <BlogCtaSection />
              </section>
            </article>

            {/* Back to Blog Home Link */}
            <div className='mt-12 pt-8 border-t border-gray-200 dark:border-slate-700'>
              <Link href='/blog' className='text-primary hover:underline'>
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SignupForm />
    </>
  );
}
