import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema, OG_IMAGE_URL } from '@/lib/structured-data';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: 'Disney Trivia Questions for Kids & Families (Free Game)',
  description:
    'Enjoy Disney trivia questions for kids and families with easy, medium, and hard rounds, a family game guide, and a quick phone-friendly way to play together.',
  path: '/blog/disney-trivia-questions',
  keywords: [
    'disney trivia questions',
    'disney trivia',
    'disney trivia for kids',
    'disney trivia game',
    'family trivia',
  ],
  publishedTime: '2025-02-10T00:00:00Z',
  modifiedTime: '2025-02-10T00:00:00Z',
});

export default function DisneyTriviaQuestionsPage() {
  const easyQuestions = [
    {
      q: 'What is the name of Mickey Mouse’s dog?',
      a: 'Pluto',
    },
    {
      q: 'In Frozen, what is the name of the snowman?',
      a: 'Olaf',
    },
    {
      q: 'Who is Simba’s father in The Lion King?',
      a: 'Mufasa',
    },
    {
      q: 'What kind of animal is Dumbo?',
      a: 'An elephant',
    },
    {
      q: 'What is the name of Ariel’s fish friend in The Little Mermaid?',
      a: 'Flounder',
    },
    {
      q: 'What color is the genie in Aladdin?',
      a: 'Blue',
    },
    {
      q: 'What does Hakuna Matata mean in The Lion King?',
      a: 'No worries',
    },
    {
      q: 'Who is Moana’s animal sidekick rooster?',
      a: 'Heihei',
    },
    {
      q: 'What is the name of the cowboy toy in Toy Story?',
      a: 'Woody',
    },
    {
      q: 'In Encanto, what is the family’s last name?',
      a: 'Madrigal',
    },
  ] as const;

  const movieQuestions = [
    {
      q: 'What is the name of the kingdom in Frozen?',
      a: 'Arendelle',
    },
    {
      q: 'In Finding Nemo, what type of fish is Nemo?',
      a: 'A clownfish',
    },
    {
      q: 'What is the name of the toy astronaut in Toy Story?',
      a: 'Buzz Lightyear',
    },
    {
      q: 'Which Disney movie features a robot named WALL-E?',
      a: 'WALL-E',
    },
    {
      q: 'What is the name of the princess in The Princess and the Frog?',
      a: 'Tiana',
    },
    {
      q: 'In Tangled, what is the name of Rapunzel’s chameleon friend?',
      a: 'Pascal',
    },
    {
      q: 'What is the name of the city in Big Hero 6?',
      a: 'San Fransokyo',
    },
    {
      q: 'In Coco, what instrument does Miguel play?',
      a: 'Guitar',
    },
    {
      q: 'In Zootopia, what is Judy Hopps’ job?',
      a: 'Police officer',
    },
    {
      q: 'What is the name of the magical candle in Encanto?',
      a: 'The Miracle Candle (the Encanto candle)',
    },
  ] as const;

  const hardQuestions = [
    {
      q: 'What is the name of the villain in The Princess and the Frog?',
      a: 'Dr. Facilier',
    },
    {
      q: 'In The Little Mermaid, what is Prince Eric’s ship called?',
      a: 'The Eric (Prince Eric’s ship)',
    },
    {
      q: 'What is the name of the restaurant in Ratatouille?',
      a: 'Gusteau’s',
    },
    {
      q: 'In Hercules, what is the name of Meg’s full name?',
      a: 'Megara',
    },
    {
      q: 'What are the three fairies’ names in Sleeping Beauty?',
      a: 'Flora, Fauna, and Merryweather',
    },
    {
      q: 'In The Jungle Book, what kind of animal is Shere Khan?',
      a: 'A tiger',
    },
    {
      q: 'In Beauty and the Beast, what is the name of the teapot?',
      a: 'Mrs. Potts',
    },
    {
      q: 'In The Incredibles, what is the family’s last name?',
      a: 'Parr',
    },
  ] as const;

  const faqItems = [
    {
      question: 'How many Disney trivia questions should I use for a game? ',
      answer:
        'For a quick family round, 10–15 questions is plenty. For a longer game night, try 25–30 questions split into easy, medium, and hard rounds.',
    },
    {
      question: 'What age is Disney trivia best for?',
      answer:
        'Disney trivia works well for ages 5–12, especially when you mix easy and medium questions so everyone can participate.',
    },
    {
      question: 'Do I need Disney movies to play Disney trivia?',
      answer:
        'No. You can read the questions aloud or use a simple turn-based format on a phone so everyone can play without extra materials.',
    },
    {
      question: 'How do I keep Disney trivia fair for siblings?',
      answer:
        'Use easy questions for younger kids and medium or hard questions for older kids and parents. Rotating difficulty keeps the game balanced.',
    },
    {
      question: 'What’s a simple prize idea for Disney trivia?',
      answer:
        'Let the winner choose the next movie, pick the family dessert, or choose the next game theme.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        type: 'BlogPosting',
        headline: 'Disney Trivia Questions for Kids & Families (Free Game Included)',
        description: 'Enjoy Disney trivia questions for kids and families with easy, medium, and hard rounds, a family game guide, and a quick phone-friendly way to play together.',
        datePublished: '2025-02-10T00:00:00Z',
        dateModified: '2025-02-10T00:00:00Z',
        path: '/blog/disney-trivia-questions',
        keywords: 'disney trivia questions, disney trivia, disney trivia for kids, disney trivia game',
      }),
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question.trim(),
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

            <article className='prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
                  Disney Trivia Questions for Kids & Families (Free Game
                  Included)
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  A complete Disney trivia collection with easy, medium, and
                  hard rounds that make family game night feel magical.
                </p>
              </header>

              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Disney trivia is one of those rare family activities that
                  works for almost everyone. Little kids recognize the
                  characters, older kids remember the movie plots, and parents
                  can jump in with the classics they grew up with. It’s quick to
                  set up, no prep is required, and it’s a sweet way to connect
                  during a busy weeknight.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  This page is your hub for Disney trivia questions. Use the
                  easy round for younger kids, the movie round for most family
                  groups, and the harder round for parents or older kids who
                  want a challenge. You can also jump to related Disney trivia
                  articles below if you want more of a specific style.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Disney Trivia for Kids (Easy)
                </h2>
                <div className='space-y-4'>
                  {easyQuestions.map((item, index) => (
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
                  Disney Movie Trivia (Medium)
                </h2>
                <div className='space-y-4'>
                  {movieQuestions.map((item, index) => (
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
                  Hard Disney Trivia (For Parents & Older Kids)
                </h2>
                <div className='space-y-4'>
                  {hardQuestions.map((item, index) => (
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
                  How to Play Disney Trivia as a Family Game
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Keep it simple so kids stay engaged. Pick one round, set a
                  quick time limit (10–15 minutes), and let each player answer a
                  question before moving to the next person. If you have a wide
                  age range, let younger kids get easier questions and save the
                  harder ones for older kids or parents.
                </p>
                <ul className='list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2'>
                  <li>Choose 10–15 questions for a short round.</li>
                  <li>Rotate turns so every player gets a chance.</li>
                  <li>Offer a hint after 5 seconds for younger kids.</li>
                  <li>Celebrate good guesses instead of keeping strict score.</li>
                </ul>
              </section>

              <section
                id='cta'
                className='mb-12 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 text-center'
              >
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Play Disney Trivia Instantly on Your Phone
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Want to play this as a real game where everyone takes turns
                  and chooses their own topics? Try Family Trivia — no ads, no
                  sign-up.
                </p>
                <DownloadButtons
                  containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center'
                  buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity'
                />
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Disney Trivia FAQs
                </h2>
                <div className='space-y-6'>
                  {faqItems.map((item) => (
                    <div
                      key={item.question}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'
                    >
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                        {item.question.trim()}
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
                  Related Disney Trivia Articles
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <Link
                    href='/blog/disney-trivia-for-kids'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                      Disney Trivia for Kids (Ages 5–10)
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Age-appropriate Disney trivia questions grouped by age
                      band for younger players.
                    </p>
                  </Link>
                  <Link
                    href='/blog/disney-movie-trivia'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                      Disney Movie Trivia
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Classic and modern movie questions including Pixar,
                      villains, and sidekicks.
                    </p>
                  </Link>
                  <Link
                    href='/blog/disney-trivia-game'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                      Disney Trivia Game Guide
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      How to run a Disney trivia game on one phone in minutes.
                    </p>
                  </Link>
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Ready for the Next Round?
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Disney trivia questions are a simple way to bring everyone
                  together, whether you’re at home, on a road trip, or waiting
                  for dinner. Mix the rounds, keep it light, and enjoy the
                  shared laughs that come with remembering favorite Disney
                  moments.
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
