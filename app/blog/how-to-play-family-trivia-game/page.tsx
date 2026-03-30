import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'How to Use Family Trivia App + 10 Best Topics to Start (Movie, Disney, Sports, Bible)',
  description:
    'Step-by-step guide to using the Family Trivia app on one shared device. Learn setup, rounds, turn flow, and 10 top trivia topics including movie, Disney, sports, and Bible trivia.',
  keywords: [
    'movie trivia questions',
    'disney trivia questions',
    'sports trivia questions and answers',
    'bible trivia questions and answers',
    'family trivia app',
  ],
  alternates: {
    canonical: 'https://familytrivia.app/blog/how-to-play-family-trivia-game',
  },
  openGraph: {
    title:
      'How to Use Family Trivia App + 10 Best Topics to Start (Movie, Disney, Sports, Bible)',
    description:
      'Step-by-step guide to using the Family Trivia app on one shared device. Learn setup, rounds, turn flow, and 10 top trivia topics including movie, Disney, sports, and Bible trivia.',
    url: 'https://familytrivia.app/blog/how-to-play-family-trivia-game',
    siteName: 'Family Trivia',
    type: 'article',
    images: [
      {
        url: 'https://familytrivia.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Family Trivia app gameplay',
      },
    ],
  },
};

export default function HowToPlayFamilyTriviaGamePage() {
  const topTopics = [
    {
      name: 'Movie Trivia',
      why: 'Broad, fast, and perfect for mixed ages. You can run easy character questions and hard release-year tie-breakers.',
      keywords: ['movie trivia', 'movie trivia questions', 'movie trivia questions and answers'],
    },
    {
      name: 'Christmas Movie Trivia',
      why: 'Excellent seasonal round for December family gatherings and holiday road trips.',
      keywords: ['christmas movie trivia'],
    },
    {
      name: 'Disney Trivia',
      why: 'One of the easiest categories for kids and adults to play together.',
      keywords: ['disney trivia', 'disney trivia questions', 'disney trivia game'],
    },
    {
      name: 'Disney Trivia for Kids',
      why: 'Ideal for younger readers: clear characters, songs, and simple plot moments.',
      keywords: ['disney trivia for kids', 'disney movie trivia'],
    },
    {
      name: 'Sports Trivia',
      why: 'Great for competitive groups and team play with quick scoring.',
      keywords: ['sports trivia', 'sports trivia questions', 'sports trivia questions and answers'],
    },
    {
      name: 'Daily Sports Trivia',
      why: 'Use recent sports moments for one current-events round each game night.',
      keywords: ['daily sports trivia'],
    },
    {
      name: 'Bible Trivia (Easy + Hard Mix)',
      why: 'Works well for church groups and families when you split by difficulty level.',
      keywords: ['bible trivia', 'easy bible trivia', 'hard bible trivia'],
    },
    {
      name: 'Bible Trivia for Kids & Teens',
      why: 'A friendly faith-based format for youth groups and family learning.',
      keywords: ['bible trivia for kids', 'bible trivia for teens', 'kids bible trivia'],
    },
    {
      name: 'Pop Culture Trivia',
      why: 'Good fallback category when players have very different interests.',
      keywords: ['pop culture trivia'],
    },
    {
      name: 'History & Geography Challenge',
      why: 'Balanced educational round that lets adults and older kids collaborate.',
      keywords: ['history trivia', 'geography trivia'],
    },
  ] as const;

  const faqItems = [
    {
      question: 'How many people can play Family Trivia on one device?',
      answer:
        'Family Trivia supports 1 to 10 players or teams in local multiplayer on a single shared device.',
    },
    {
      question: 'How many rounds should we choose?',
      answer:
        'You can set between 3 and 15 rounds. Most families start with 5 to 8 rounds for a quick, fun session.',
    },
    {
      question: 'Can each player choose different topics and difficulty?',
      answer:
        'Yes. Each player or team can pick their own name, trivia topic, and difficulty level (Easy, Medium, Hard).',
    },
    {
      question: 'Is Family Trivia online multiplayer?',
      answer:
        'No. Family Trivia is designed for shared-device play, where people pass one phone or tablet between turns.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline:
          'How to Use Family Trivia App + 10 Best Topics to Start (Movie, Disney, Sports, Bible)',
        description:
          'Step-by-step guide to using the Family Trivia app on one shared device. Learn setup, rounds, turn flow, and 10 top trivia topics including movie, Disney, sports, and Bible trivia.',
        image: 'https://familytrivia.app/og-image.jpg',
        datePublished: '2026-03-29T00:00:00Z',
        dateModified: '2026-03-29T00:00:00Z',
        author: {
          '@type': 'Organization',
          name: 'Family Trivia',
          url: 'https://familytrivia.app',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Family Trivia',
          logo: {
            '@type': 'ImageObject',
            url: 'https://familytrivia.app/favicon.ico',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://familytrivia.app/blog/how-to-play-family-trivia-game',
        },
        keywords:
          'movie trivia questions, disney trivia questions, sports trivia questions and answers, bible trivia questions and answers',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
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
              <header className='mb-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
                  How to Use the Family Trivia App (Step by Step)
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  This guide explains exactly how Family Trivia works on one
                  shared device and gives you the best 10 topics to start with.
                </p>
              </header>

              <section className='mb-10'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Quick Answer
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Family Trivia is a local multiplayer trivia app for{' '}
                  <strong>1 to 10 players</strong> on a single device. One person
                  sets up the game, players take turns answering, and the app
                  clearly shows whose turn it is and which round you are on.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  You can run <strong>3 to 15 rounds</strong>, and each player can
                  choose their own <strong>name, topic, and difficulty</strong>{' '}
                  (Easy, Medium, Hard).
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  How to Play Family Trivia in 6 Steps
                </h2>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  1) Start Local Multiplayer on One Device
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  Open the app and choose your local game. Family Trivia is
                  designed for shared-device gameplay, so everyone plays on one
                  phone or tablet.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  2) Add Players or Teams (1-10)
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  Enter each player/team name. You can play solo, as a couple,
                  or with a full group of up to 10.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  3) Pick Round Count (3-15)
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  Choose how long you want the session to be. For first-time
                  groups, 5 to 8 rounds is a sweet spot.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  4) Customize Each Player
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  Every player (or team) can select a trivia topic and difficulty
                  level independently, so beginners and experts can both enjoy
                  the same game.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  5) Pass the Device Each Turn
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  The facilitator sets the flow, but the app makes turns clear so
                  the device can pass smoothly from player to player.
                </p>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  6) Track Progress by Round
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  During play, everyone sees the current round and total rounds,
                  making pacing easier for road trips, family nights, and casual
                  gatherings.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-5'>
                  Top 10 Topics to Begin With
                </h2>
                <div className='space-y-5'>
                  {topTopics.map((topic, idx) => (
                    <div
                      key={topic.name}
                      className='bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-200 dark:border-slate-700'
                    >
                      <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                        {idx + 1}. {topic.name}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300 mb-2'>
                        {topic.why}
                      </p>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        Related searches: {topic.keywords.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Internal Linking Ideas
                </h2>
                <ul className='list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2'>
                  <li>
                    Link “disney trivia questions” to{' '}
                    <Link
                      href='/blog/disney-trivia-questions'
                      className='text-primary font-semibold hover:underline'
                    >
                      Disney Trivia Questions
                    </Link>
                    .
                  </li>
                  <li>
                    Link “disney trivia game” to{' '}
                    <Link
                      href='/blog/disney-trivia-game'
                      className='text-primary font-semibold hover:underline'
                    >
                      Disney Trivia Game
                    </Link>
                    .
                  </li>
                  <li>
                    Link “sports trivia questions” to{' '}
                    <Link
                      href='/blog/sports-trivia-for-kids'
                      className='text-primary font-semibold hover:underline'
                    >
                      Sports Trivia for Kids
                    </Link>
                    .
                  </li>
                  <li>
                    Link “bible trivia for kids” to{' '}
                    <Link
                      href='/blog/bible-trivia-questions-for-kids'
                      className='text-primary font-semibold hover:underline'
                    >
                      Bible Trivia Questions for Kids
                    </Link>
                    .
                  </li>
                  <li>
                    Link “movie trivia” to{' '}
                    <Link
                      href='/blog/disney-movie-trivia'
                      className='text-primary font-semibold hover:underline'
                    >
                      Disney Movie Trivia
                    </Link>
                    .
                  </li>
                </ul>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  SEO Snippet Pack
                </h2>
                <p className='text-gray-700 dark:text-gray-300 mb-3'>
                  <strong>SEO title:</strong> How to Use Family Trivia App + 10
                  Best Topics to Start (Movie, Disney, Sports, Bible)
                </p>
                <p className='text-gray-700 dark:text-gray-300'>
                  <strong>Meta description:</strong> Step-by-step guide to using
                  the Family Trivia app on one shared device. Learn setup,
                  rounds, turn flow, and 10 top trivia topics including movie,
                  Disney, sports, and Bible trivia.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Frequently Asked Questions
                </h2>
                <div className='space-y-5'>
                  {faqItems.map((faq) => (
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

            <BlogCtaSection />

            <section
              id='cta'
              className='mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Ready to Play?
              </h2>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Set up your first Family Trivia session in minutes and rotate
                through your top 10 topics tonight.
              </p>
              <DownloadButtons
                containerClassName='flex-wrap gap-4 flex justify-center'
                buttonClassName='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'
              />
            </section>
          </div>
        </div>
      </div>
      <SignupForm />
    </>
  );
}
