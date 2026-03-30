import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema, OG_IMAGE_URL } from '@/lib/structured-data';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: 'Disney Trivia Game: How to Play With Kids on One Phone',
  description:
    'Learn how to run a Disney trivia game on one phone with kids, compare formats, and start a quick family round in minutes at home or on trips with no prep.',
  path: '/blog/disney-trivia-game',
  keywords: [
    'disney trivia game',
    'disney trivia for kids',
    'disney trivia questions',
    'family trivia',
  ],
  publishedTime: '2025-02-10T00:00:00Z',
  modifiedTime: '2025-02-10T00:00:00Z',
});

export default function DisneyTriviaGamePage() {
  const sampleQuestions = [
    {
      q: 'In Moana, what is the name of the demigod who helps Moana?',
      a: 'Maui',
    },
    {
      q: 'What is the name of the cowboy toy in Toy Story?',
      a: 'Woody',
    },
    {
      q: 'In Frozen, what is the name of Elsa’s sister?',
      a: 'Anna',
    },
    {
      q: 'What kind of animal is Simba?',
      a: 'A lion',
    },
    {
      q: 'In Encanto, who is the super-strong sister?',
      a: 'Luisa',
    },
    {
      q: 'What is the name of the fish in Finding Nemo?',
      a: 'Nemo',
    },
  ] as const;

  const faqItems = [
    {
      question: 'How long should a Disney trivia game last?',
      answer:
        'A 10–15 minute round is perfect for kids. It feels fun and fast without losing attention.',
    },
    {
      question: 'What’s the easiest way to play without prep?',
      answer:
        'Use a shared device game so each player gets a turn with questions suited to their age.',
    },
    {
      question: 'How do I keep a Disney trivia game fair for siblings?',
      answer:
        'Mix easy and medium questions, and rotate turns. Give younger kids a hint after a few seconds.',
    },
    {
      question: 'Do I need printed cards or a game board?',
      answer:
        'No. A list of questions or a simple phone-based game is enough for a full family round.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        type: 'BlogPosting',
        headline: 'Disney Trivia Game: How to Play With Kids on One Phone',
        description: 'Learn how to run a Disney trivia game on one phone with kids, compare formats, and start a quick family round in minutes at home or on trips with no prep.',
        datePublished: '2025-02-10T00:00:00Z',
        dateModified: '2025-02-10T00:00:00Z',
        path: '/blog/disney-trivia-game',
        keywords: 'disney trivia game, disney trivia for kids, disney trivia questions',
      }),
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
              <header className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
                  Disney Trivia Game: How to Play With Kids on One Phone
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  A practical guide to running a Disney trivia game with kids,
                  whether you use paper, cards, or a shared device.
                </p>
              </header>

              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  If your kids love Disney, a trivia game is an easy win for
                  family time. You can keep it quick, play with mixed ages, and
                  use questions your kids already know from favorite movies. For
                  a big set of questions, start with the{' '}
                  <Link
                    href='/blog/disney-trivia-questions'
                    className='text-primary font-semibold hover:underline'
                  >
                    Disney trivia questions hub
                  </Link>{' '}
                  and then use the tips below to turn them into a game.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Different Ways Families Play Disney Trivia
                </h2>
                <ul className='list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2'>
                  <li>Quick round in the car using oral questions.</li>
                  <li>Family game night with a score sheet.</li>
                  <li>Team play with siblings vs. parents.</li>
                  <li>Shared-device trivia on one phone.</li>
                </ul>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Pros and Cons of Paper, Cards, Videos, and Apps
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Paper or Index Cards
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Great for customizing, but they take time to prepare and
                      can be hard to reuse on the go.
                    </p>
                  </div>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Trivia Videos
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Fun visuals, but they move at someone else’s pace and
                      don’t always match your kids’ age levels.
                    </p>
                  </div>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Board or Card Games
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Great for family nights, but not always portable or
                      tailored to Disney themes.
                    </p>
                  </div>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Trivia Apps
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Easy to start, portable, and can adjust difficulty for
                      each player.
                    </p>
                  </div>
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Shared-Device Trivia Works Well for Families
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  One phone keeps the focus on conversation rather than screens.
                  Kids take turns, parents can help with reading, and everyone
                  stays engaged. It’s especially helpful when siblings are at
                  different reading levels or have different Disney favorites.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  How to Play as a Family Game
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Use a short round of 10–12 questions. Let each player choose
                  a category or movie, and give one point per correct answer.
                  Keep it light and celebrate good guesses.
                </p>
                <div className='space-y-4'>
                  {sampleQuestions.map((item, index) => (
                    <div
                      key={item.q}
                      className='bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <p className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                        {index + 1}. {item.q}
                      </p>
                      <p className='text-gray-700 dark:text-gray-300'>
                        <strong>Answer:</strong> {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  How to Start a Disney Trivia Game in Minutes
                </h2>
                <ol className='list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2'>
                  <li>Pick a short round length (10–15 minutes).</li>
                  <li>Choose easy questions for younger kids.</li>
                  <li>Rotate turns so every player participates.</li>
                  <li>End with a fun prize like choosing the next movie.</li>
                </ol>
              </section>

              <section
                id='cta'
                className='mb-12 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 text-center'
              >
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Start a Disney Trivia Game on One Phone
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Family Trivia lets each player choose their own topic and
                  difficulty — Disney for kids, something else for parents.
                </p>
                <DownloadButtons
                  containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center'
                  buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity'
                />
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Disney Trivia Game FAQs
                </h2>
                <div className='space-y-6'>
                  {faqItems.map((item) => (
                    <div
                      key={item.question}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'
                    >
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                        {item.question}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  More Disney Trivia for Families
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Pair this game guide with our{' '}
                  <Link
                    href='/blog/disney-trivia-for-kids'
                    className='text-primary font-semibold hover:underline'
                  >
                    Disney trivia for kids
                  </Link>{' '}
                  and the full{' '}
                  <Link
                    href='/blog/disney-trivia-questions'
                    className='text-primary font-semibold hover:underline'
                  >
                    Disney trivia questions hub
                  </Link>{' '}
                  to build a longer round.
                </p>
                <BlogCtaSection />
              </section>
            </article>

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
