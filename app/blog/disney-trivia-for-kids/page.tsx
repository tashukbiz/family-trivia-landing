import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildBlogPostingSchema, OG_IMAGE_URL } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Disney Trivia for Kids (Ages 5–10) | Family Trivia',
  description:
    'Disney trivia for kids ages 5–10 with easy questions by age, tips for mixed ages, and a simple way to play together as a family game at home or on trips.',
  keywords: [
    'disney trivia for kids',
    'disney trivia questions',
    'disney trivia game',
    'family trivia',
  ],
  alternates: {
    canonical: 'https://familytrivia.app/blog/disney-trivia-for-kids',
  },
  openGraph: {
    title: 'Disney Trivia for Kids (Ages 5–10) | Family Trivia',
    description:
      'Disney trivia for kids ages 5–10 with easy questions by age, tips for mixed ages, and a simple way to play together as a family game at home or on trips.',
    url: 'https://familytrivia.app/blog/disney-trivia-for-kids',
    siteName: 'Family Trivia',
    type: 'article',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Family Trivia',
      },
    ],
  },
};

export default function DisneyTriviaForKidsPage() {
  const agesFiveSix = [
    {
      q: 'What is the name of Mickey Mouse’s girlfriend?',
      a: 'Minnie Mouse',
    },
    {
      q: 'In Frozen, what is the snowman’s name?',
      a: 'Olaf',
    },
    {
      q: 'What animal is Simba in The Lion King?',
      a: 'A lion',
    },
    {
      q: 'What color is Donald Duck’s bow tie?',
      a: 'Red',
    },
    {
      q: 'Who is the fish that looks for his son in Finding Nemo?',
      a: 'Marlin',
    },
    {
      q: 'What is the name of the pig in Moana?',
      a: 'Pua',
    },
    {
      q: 'What kind of animal is Bambi?',
      a: 'A deer',
    },
    {
      q: 'In Toy Story, what is the cowgirl’s name?',
      a: 'Jessie',
    },
  ] as const;

  const agesSevenEight = [
    {
      q: 'What is the name of the queen in Frozen?',
      a: 'Elsa',
    },
    {
      q: 'In Aladdin, what does the Genie live in?',
      a: 'A lamp',
    },
    {
      q: 'What is the name of the rabbit in Zootopia?',
      a: 'Judy Hopps',
    },
    {
      q: 'What type of fish is Dory in Finding Nemo?',
      a: 'A blue tang',
    },
    {
      q: 'In Encanto, what is the name of the family’s house?',
      a: 'Casita',
    },
    {
      q: 'Who is the chef rat in Ratatouille?',
      a: 'Remy',
    },
    {
      q: 'What is the name of Moana’s island?',
      a: 'Motunui',
    },
    {
      q: 'In The Incredibles, what is the baby’s name?',
      a: 'Jack-Jack',
    },
  ] as const;

  const agesNineTen = [
    {
      q: 'What is the name of the villain in The Little Mermaid?',
      a: 'Ursula',
    },
    {
      q: 'Which Disney movie features a house that floats with balloons?',
      a: 'Up',
    },
    {
      q: 'In Tangled, what is the name of Flynn Rider’s real identity?',
      a: 'Eugene Fitzherbert',
    },
    {
      q: 'What is the name of Mulan’s dragon friend?',
      a: 'Mushu',
    },
    {
      q: 'What is the name of the snow queen’s sister in Frozen?',
      a: 'Anna',
    },
    {
      q: 'In Coco, what do people place on the ofrenda to remember loved ones?',
      a: 'Photos (pictures)',
    },
    {
      q: "What is Belle's father's name in Beauty and the Beast?",
      a: 'Maurice',
    },
    {
      q: 'Which Pixar movie features a chef who is a rat?',
      a: 'Ratatouille',
    },
  ] as const;

  const faqItems = [
    {
      question: 'What makes Disney trivia kid-friendly?',
      answer:
        'Kid-friendly Disney trivia uses familiar characters, simple plots, and clear answers. It avoids tricky timelines or behind-the-scenes facts.',
    },
    {
      question: 'How long should a Disney trivia game last for young kids?',
      answer:
        'Aim for 10–15 minutes with 8–12 questions. Short rounds keep attention strong and end on a happy note.',
    },
    {
      question: 'Should I read the questions or let kids read them?',
      answer:
        'For ages 5–7, reading aloud is best. Older kids can take turns reading to feel more involved.',
    },
    {
      question: 'What if my kids know different Disney movies?',
      answer:
        'Mix newer and classic films, and let kids pick their favorite category. It keeps the game fair and fun.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        type: 'BlogPosting',
        headline: 'Disney Trivia for Kids (Ages 5–10): Easy & Fun Questions',
        description: 'Disney trivia for kids ages 5–10 with easy questions by age, tips for mixed ages, and a simple way to play together as a family game at home or on trips.',
        datePublished: '2025-02-10T00:00:00Z',
        dateModified: '2025-02-10T00:00:00Z',
        path: '/blog/disney-trivia-for-kids',
        keywords: 'disney trivia for kids, disney trivia questions, disney trivia game',
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
                  Disney Trivia for Kids (Ages 5–10): Easy & Fun Questions
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Easy Disney trivia questions grouped by age to keep kids
                  confident and smiling.
                </p>
              </header>

              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Disney trivia for kids works best when the questions match a
                  child’s age and attention span. Younger kids love character
                  names and colors, while older kids can handle simple plot
                  details. For a bigger Disney collection, start with our{' '}
                  <Link
                    href='/blog/disney-trivia-questions'
                    className='text-primary font-semibold hover:underline'
                  >
                    Disney trivia questions hub
                  </Link>{' '}
                  and then come back here for a kid-focused round.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Below you’ll find easy Disney trivia questions by age group.
                  Feel free to mix and match to fit your family.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Easy Disney Trivia (Ages 5–6)
                </h2>
                <div className='space-y-4'>
                  {agesFiveSix.map((item, index) => (
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
                  Easy Disney Trivia (Ages 7–8)
                </h2>
                <div className='space-y-4'>
                  {agesSevenEight.map((item, index) => (
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
                  Easy Disney Trivia (Ages 9–10)
                </h2>
                <div className='space-y-4'>
                  {agesNineTen.map((item, index) => (
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
                  Tips for Playing with Mixed Ages
                </h2>
                <ul className='list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2'>
                  <li>Start with a warm-up question everyone can answer.</li>
                  <li>Let younger kids answer first so they feel confident.</li>
                  <li>Offer a hint if a younger player needs help.</li>
                  <li>Mix in a few harder questions just for parents.</li>
                </ul>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  How to Play as a Family Game
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  For a quick Disney round, pick 10–12 questions and rotate
                  turns. Keep score if your kids enjoy it, or just cheer each
                  other on. The goal is a few minutes of shared fun rather than
                  perfection.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  If you want a turn-based format that keeps questions balanced
                  for each player, a shared device game works really well.
                </p>
              </section>

              <section
                id='cta'
                className='mb-12 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 text-center'
              >
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Turn These Questions Into a Family Game
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Instead of reading questions aloud, you can play Disney trivia
                  as a simple turn-based game on one phone.
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
                  Keep the Disney Fun Going
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  For a bigger mix of easy, medium, and hard questions, visit
                  our{' '}
                  <Link
                    href='/blog/disney-trivia-questions'
                    className='text-primary font-semibold hover:underline'
                  >
                    Disney trivia questions hub
                  </Link>{' '}
                  and build the perfect round for your family.
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
