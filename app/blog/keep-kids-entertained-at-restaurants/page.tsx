import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: 'How to Keep Kids Entertained at a Restaurant | Family Trivia',
  description:
    'How to keep kids entertained at a restaurant while you wait for food: 20 no-prep, mostly screen-free games and activities for toddlers to big kids. Try tonight!',
  path: '/blog/keep-kids-entertained-at-restaurants',
  keywords: [
    'how to keep kids entertained at a restaurant',
    'restaurant games for kids',
    'restaurant activities for kids',
    'things to do with kids at a restaurant',
    'how to entertain a toddler at a restaurant',
    'keeping kids busy at a restaurant while waiting for food',
    'screen-free restaurant activities for kids',
  ],
  publishedTime: '2026-07-02T00:00:00Z',
  modifiedTime: '2026-07-02T00:00:00Z',
});

export default function KeepKidsEntertainedAtRestaurantsPage() {
  const activityGroups = [
    {
      category: 'No-Equipment Talking & Guessing Games',
      games: [
        {
          name: 'I Spy',
          blurb:
            'A timeless classic: “I spy with my little eye, something red.” The whole table can play, and toddlers can join in with colors.',
          ages: 'Best for ages 2+',
        },
        {
          name: '20 Questions',
          blurb:
            'One person thinks of an animal or object; everyone else narrows it down with yes-or-no questions until someone guesses it.',
          ages: 'Best for ages 5+',
        },
        {
          name: 'Would You Rather',
          blurb:
            'Trade silly either-or questions — “Would you rather fly or be invisible?” — and make everyone explain their pick.',
          ages: 'Best for ages 4+',
        },
        {
          name: 'Quick Kid-Friendly Trivia',
          blurb:
            'Keep a few easy questions in your back pocket and quiz the table while you wait.',
          ages: 'Best for ages 5+',
          links: [
            {
              text: 'trivia questions for kids',
              href: '/blog/trivia-questions-for-kids',
            },
          ],
          linkLead: 'Try our',
        },
      ],
    },
    {
      category: 'Games Using What’s Already on the Table',
      games: [
        {
          name: 'Sugar-Packet Tower',
          blurb:
            'Stack sugar and creamer packets into the tallest tower you can before it topples — surprisingly gripping for small hands.',
          ages: 'Best for ages 3+',
        },
        {
          name: 'Straw-Wrapper Caterpillar',
          blurb:
            'Scrunch a paper straw wrapper into an accordion, drip a little water on it, and watch it slowly “grow.”',
          ages: 'Best for ages 4+',
        },
        {
          name: 'Coaster Flip Challenge',
          blurb:
            'Balance a coaster on the table edge and try to flip and catch it with a quick tap — a mini version of the cup-flip craze.',
          ages: 'Best for ages 6+',
        },
        {
          name: 'Salt-and-Pepper Bowling',
          blurb:
            'Line up a few packets as “pins” and roll a wadded-up napkin ball to knock them down.',
          ages: 'Best for ages 4+',
        },
      ],
    },
    {
      category: 'Paper & Crayon Games (the Kids’ Menu Has You Covered)',
      games: [
        {
          name: 'Tic-Tac-Toe',
          blurb:
            'The fastest game on paper. Best of five keeps it going, and little kids love finally beating a grown-up.',
          ages: 'Best for ages 4+',
        },
        {
          name: 'Hangman',
          blurb:
            'Pick a word and let them guess letters one at a time — sneaky spelling practice disguised as a game.',
          ages: 'Best for ages 6+',
        },
        {
          name: 'Squiggle Drawing',
          blurb:
            'Draw a random squiggle and challenge your child to turn it into a real picture, then swap roles.',
          ages: 'Best for ages 3+',
        },
        {
          name: 'Dots and Boxes',
          blurb:
            'Connect dots to complete squares and claim each one with your initial — simple to learn, weirdly competitive.',
          ages: 'Best for ages 6+',
        },
      ],
    },
    {
      category: 'Quiet Wins for Toddlers',
      games: [
        {
          name: 'Peekaboo With a Napkin',
          blurb:
            'Never underestimate a napkin. Hide behind it, pop out, repeat — instant toddler delight for a solid few minutes.',
          ages: 'Best for ages 1+',
        },
        {
          name: 'Finger Puppets & Hand Shadows',
          blurb:
            'Make little characters out of your fingers and give them silly voices to keep the littlest ones giggling.',
          ages: 'Best for ages 1+',
        },
        {
          name: 'Color & Shape Hunt',
          blurb:
            'Ask your toddler to find something red, then something round — an easy game that quietly builds vocabulary.',
          ages: 'Best for ages 2+',
        },
        {
          name: 'Reusable Sticker Pad',
          blurb:
            'Cling stickers you can peel and re-stick over and over buy a genuine ten minutes of focused quiet.',
          ages: 'Best for ages 2+',
        },
      ],
    },
    {
      category: 'Calm Wins & Smarter Screen Time',
      games: [
        {
          name: 'Family Trivia (the shared-screen option)',
          blurb:
            'When the talking games have run their course and you still need a few more minutes, make the phone a game everyone plays together instead of a solo video. The table takes turns answering questions on one device, and each player gets a difficulty that fits their age.',
          ages: 'Best for ages 4+',
          links: [
            {
              text: 'how Family Trivia works on one device',
              href: '/blog/how-to-play-family-trivia-game',
            },
          ],
          linkLead: 'See',
        },
        {
          name: 'A Family Story Chain',
          blurb:
            'One person starts a story with a sentence, the next adds a line, and it snowballs into something ridiculous by the time the food lands.',
          ages: 'Best for ages 4+',
        },
        {
          name: 'A Small Busy Bag',
          blurb:
            'A wind-up toy, a few pipe cleaners, or a mini activity pad that only ever appears at restaurants stays exciting because it feels like a treat.',
          ages: 'Best for ages 2+',
        },
        {
          name: 'A Kids’ Audiobook or Podcast',
          blurb:
            'One earbud or a low volume with a short story or kids’ podcast can settle a restless toddler without the pull of a screen.',
          ages: 'Best for ages 2+',
        },
      ],
    },
  ] as const;

  const faqQuestions = [
    {
      question: 'How do I keep my toddler entertained at a restaurant?',
      answer:
        'No-prep games work best for toddlers: stack sugar packets, play peekaboo with a napkin, go on a color hunt, or hand over a reusable sticker pad. Keep each activity short and rotate often, since a toddler’s attention span is only a few minutes.',
    },
    {
      question: 'What can kids do at a restaurant without screens?',
      answer:
        'Kids can play I Spy, 20 Questions, or Would You Rather, draw tic-tac-toe and hangman on the kids’ menu, build with things already on the table, or go on a color-and-shape hunt. Most need zero equipment and settle kids within seconds.',
    },
    {
      question: 'How do you keep kids busy while waiting for food?',
      answer:
        'Order their meal (plus a quick starter like bread or fruit) the moment you sit down, then rotate through two or three short games so nothing gets stale before the food arrives. Having a few ideas ready beats scrambling once the fussing starts.',
    },
    {
      question: 'What should I pack in a restaurant kit for kids?',
      answer:
        'A few crayons and paper, a couple of small quiet toys or finger puppets, a reusable sticker pad, and wipes. Keep it tiny so it fits in your bag, and only bring it out at restaurants so it stays interesting.',
    },
    {
      question: 'Is it okay to let kids use a screen at a restaurant?',
      answer:
        'An occasional screen is fine, but the best entertainment at the table is still you — talking, playing, and paying attention. When you do reach for a device, choose an interactive, shared option over passive video: a single-device game like Family Trivia keeps the whole table involved instead of pulling one child away.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        type: 'Article',
        headline:
          'How to Keep Kids Entertained at a Restaurant (While You Wait for Food)',
        description:
          'How to keep kids entertained at a restaurant while you wait for food: 20 no-prep, mostly screen-free games and activities for toddlers to big kids. Try tonight!',
        path: '/blog/keep-kids-entertained-at-restaurants',
        keywords:
          'how to keep kids entertained at a restaurant, restaurant games for kids, restaurant activities for kids, things to do with kids at a restaurant, how to entertain a toddler at a restaurant',
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
                  How to Keep Kids Entertained at a Restaurant (While You Wait
                  for Food)
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  20 no-prep games and activities — most of them screen-free — to
                  keep toddlers, preschoolers, and big kids happy from the moment
                  you sit down until the food arrives.
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  You&apos;ve ordered, the drinks have arrived, and the crayons
                  that came with the kids&apos; menu lasted about ninety seconds.
                  The food is still fifteen minutes out, and you can feel the
                  restlessness building across the table. Every parent knows this
                  stretch — the wait between ordering and eating is where
                  restaurant meltdowns are born.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  The good news: you don&apos;t need a bag of gadgets to get
                  through it. A few no-prep games — most of which use nothing but
                  your words or what&apos;s already on the table — can turn that
                  dreaded wait into some of the most fun you&apos;ll have all
                  meal. And the best ones aren&apos;t about distracting your kids
                  so you can check out — they&apos;re about doing something
                  together, so the wait becomes connection time instead of screen
                  time.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Below are 20 things to do with kids while you wait for food,
                  grouped by type and age, plus a few tips to set your table up
                  for success before the fussing starts. They work just as well
                  in a waiting room, at the DMV, or on a long car ride.
                </p>
              </section>

              {/* The Short Answer */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  The Short Answer: How to Keep Kids Busy at a Restaurant
                </h2>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200'>
                    The best way to keep kids entertained at a restaurant is to
                    have a handful of no-prep games ready and rotate through them.
                    Talking games like I Spy and 20 Questions, quick paper games
                    like tic-tac-toe, and building with things already on the
                    table need zero equipment and settle kids in seconds. Order
                    their food the moment you sit down, and save one calm screen
                    option — like a shared trivia game — for if the wait runs
                    long.
                  </p>
                </div>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  When the restlessness starts, reach for one of these five
                  categories:
                </p>

                <ul className='list-disc pl-6 mb-4 space-y-2 text-lg text-gray-800 dark:text-gray-200'>
                  <li>
                    <strong>No-equipment talking games</strong> — I Spy, 20
                    Questions, Would You Rather
                  </li>
                  <li>
                    <strong>Games using what&apos;s on the table</strong> —
                    stacking packets, straw wrappers, napkin fun
                  </li>
                  <li>
                    <strong>Paper-and-crayon games</strong> on the kids&apos;
                    menu — tic-tac-toe, hangman, squiggle drawing
                  </li>
                  <li>
                    <strong>Quiet toddler wins</strong> — peekaboo, sticker pads,
                    color hunts
                  </li>
                  <li>
                    <strong>One smart screen option</strong> — a shared trivia
                    game, not a solo video
                  </li>
                </ul>
              </section>

              {/* Why the wait is hard */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Waiting for Food Is So Hard for Little Kids
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  A restaurant asks a lot of a small child all at once: sit still,
                  stay quiet, use nice manners, and wait patiently for something
                  you can smell but can&apos;t eat yet. The thrill of arriving
                  wears off in minutes, and there&apos;s nothing to do with all
                  that energy. Understanding why the wait is so hard makes it
                  easier to get ahead of a meltdown instead of just reacting to
                  one. Here&apos;s what&apos;s really going on.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🍽️</span> Hunger Meets Boredom
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Kids arrive hungry and then have to wait right next to the
                      smell of food with nothing to do — a tough combination for a
                      small nervous system.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🪑</span> Sitting Still Is a Big
                      Ask
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Young children aren&apos;t built to sit quietly for twenty
                      minutes. Their bodies need to move, and a chair at a table
                      works against that instinct.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>⏳</span> Novelty Wears Off Fast
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      The crayons and the new place are exciting for about three
                      minutes. After that, the clock starts ticking toward
                      restlessness.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>📏</span> Lots of Rules at Once
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Inside voice, stay seated, don&apos;t touch that —
                      restaurants pile on expectations that are genuinely hard for
                      a young child to hold all at the same time.
                    </p>
                  </div>
                </div>
              </section>

              {/* 20 Ideas */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  20 Things to Do With Kids While You Wait for Food
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Here are 20 ideas grouped into five easy categories. Mix and
                  match a couple from different groups, and rotate to a new one
                  the moment interest starts to fade — variety is what carries you
                  to the finish line.
                </p>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 mb-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200'>
                    💛 <strong>One thing before the list:</strong> the goal
                    isn&apos;t just to keep kids quiet — it&apos;s to be with
                    them. Notice that nearly every idea here is something you do{' '}
                    <em>together</em>. A few unhurried minutes of your full
                    attention are worth more than any gadget, and the wait is a
                    surprisingly good chance to talk, laugh, and hear what&apos;s
                    on their mind. Reach for a screen only when you&apos;ve
                    genuinely run out of steam — and even then, play it together.
                  </p>
                </div>

                <div className='space-y-10'>
                  {activityGroups.map((group) => (
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
                                  {'linkLead' in game && game.linkLead
                                    ? game.linkLead
                                    : 'Try our'}{' '}
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

              {/* Set the table up for success */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Set Your Table Up for Success
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  The games do a lot of the work, but a little planning before you
                  even walk in makes the whole meal smoother. These small moves
                  head off the most common wait-time meltdowns.
                </p>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      1. Order Kid Food the Moment You Sit
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Ask for their meal — plus a quick starter like bread or
                      fruit — as soon as you order drinks. A small snack in the
                      first few minutes buys you the crucial early window.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      2. Ask for the Little Extras
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      A cup with a lid, extra napkins, or a side of fruit can head
                      off spills and hunger tantrums before they start. Most
                      servers are happy to help when you ask early.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      3. Pick Your Seat and Timing Wisely
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      A booth contains wigglers better than a chair, a corner
                      keeps toddlers away from walkways, and an earlier dinner
                      beats the overtired rush-hour meltdown.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      4. Pack a Tiny Restaurant Kit
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Keep a small pouch with crayons, a couple of quiet toys, a
                      sticker pad, and wipes. Because it only comes out at
                      restaurants, it stays interesting week after week.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      5. Set Two Simple Expectations
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Before you walk in, agree on a couple of easy rules —
                      &quot;bottoms stay on seats, inside voices&quot; — so kids
                      know the plan instead of learning it in the moment.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      6. Tag-Team a Lap When Needed
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      If the wait runs long, take turns walking a restless little
                      one around the lobby or over to look at the fish tank. A
                      quick change of scenery resets everyone.
                    </p>
                  </div>
                </div>

                <div
                  id='cta'
                  className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-8 text-center'
                >
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    📱 The One Screen That Keeps Everyone at the Table
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                    When you&apos;ve worked through the table games and the wait
                    still isn&apos;t over, make the phone{' '}
                    <strong>Family Trivia</strong> instead of a solo video. The
                    whole table takes turns answering questions on a single
                    device — so you&apos;re still playing together, not tuning
                    out. Each player gets a difficulty that fits their age,
                    it&apos;s calm and quick, and it sneaks in a little learning
                    before the food arrives.
                  </p>

                  <DownloadButtons
                    containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center mb-6'
                    buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'
                  />

                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    ✓ One device &nbsp;•&nbsp; ✓ Take turns &nbsp;•&nbsp; ✓ Fair
                    for every age &nbsp;•&nbsp; ✓ Works for the whole table
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
                  The Wait Doesn&apos;t Have to Be the Hard Part
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Eating out with kids doesn&apos;t have to mean bracing for the
                  stretch between ordering and eating. With a few games in your
                  back pocket — and a snack ordered the second you sit down — you
                  can keep the whole table happy from the first &quot;I&apos;m
                  bored&quot; to the last bite. Most of these ideas cost nothing,
                  fit in your memory instead of your bag, and work just as well in
                  a waiting room or on a long drive.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  And here&apos;s the quiet upside: those fifteen minutes of
                  waiting can be some of the best face-to-face time in your day.
                  Played together, a round of I Spy or a silly story chain turns
                  &quot;time to kill&quot; into real connection — the kind kids
                  remember long after they&apos;ve forgotten what they ordered.
                  The screen is there if you need it, but you&apos;re the best
                  thing at the table.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Pick two or three favorites to try next time you go out. And the
                  games your kids love at the restaurant have a way of coming home
                  with you — when they do, turn them into a weekly tradition with
                  our{' '}
                  <Link
                    href='/blog/family-game-night-ideas'
                    className='text-primary font-semibold hover:underline'
                  >
                    family game night ideas
                  </Link>
                  .
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
