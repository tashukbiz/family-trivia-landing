import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema, OG_IMAGE_URL } from '@/lib/structured-data';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: 'Disney Movie Trivia: Classic & Modern Films for Families',
  description:
    'Disney movie trivia with classic favorites, modern Pixar hits, and villains & sidekicks questions, plus a quick family game format for kids and parents.',
  path: '/blog/disney-movie-trivia',
  keywords: [
    'disney movie trivia',
    'disney trivia',
    'disney trivia questions',
    'family trivia',
  ],
  publishedTime: '2025-02-10T00:00:00Z',
  modifiedTime: '2025-02-10T00:00:00Z',
});

export default function DisneyMovieTriviaPage() {
  const classicQuestions = [
    {
      q: 'In Cinderella, what does the Fairy Godmother turn into a carriage?',
      a: 'A pumpkin',
    },
    {
      q: 'Who is the villain in Sleeping Beauty?',
      a: 'Maleficent',
    },
    {
      q: 'In The Jungle Book, what kind of animal is Baloo?',
      a: 'A bear',
    },
    {
      q: 'In Peter Pan, who is afraid of the crocodile?',
      a: 'Captain Hook',
    },
    {
      q: 'In The Little Mermaid, what is Ariel’s human name after her wish?',
      a: 'She keeps the name Ariel',
    },
    {
      q: 'What is the name of the teacup in Beauty and the Beast?',
      a: 'Chip',
    },
    {
      q: 'In The Lion King, what is Simba’s mother’s name?',
      a: 'Sarabi',
    },
    {
      q: 'What animal does Pinocchio want to become a real version of?',
      a: 'A real boy (human)',
    },
  ] as const;

  const modernQuestions = [
    {
      q: 'In Frozen, what power does Elsa have?',
      a: 'Ice and snow magic',
    },
    {
      q: 'In Moana, who is the demigod who helps Moana?',
      a: 'Maui',
    },
    {
      q: 'In Turning Red, what animal does Mei transform into?',
      a: 'A red panda',
    },
    {
      q: 'In Toy Story, what does Andy call his dinosaur toy?',
      a: 'Rex',
    },
    {
      q: 'In Inside Out, which emotion is blue?',
      a: 'Sadness',
    },
    {
      q: 'In Brave, what is the name of Merida’s horse?',
      a: 'Angus',
    },
    {
      q: 'In Luca, where is the movie set?',
      a: 'Portorosso, Italy',
    },
    {
      q: 'In Encanto, which family member talks to animals?',
      a: 'Antonio',
    },
  ] as const;

  const villainsAndSidekicks = [
    {
      q: 'Who is the villain in Aladdin?',
      a: 'Jafar',
    },
    {
      q: 'What is the name of Mulan’s cricket friend?',
      a: 'Cri-Kee',
    },
    {
      q: 'Who is Hercules’ sidekick trainer in Hercules?',
      a: 'Philoctetes (Phil)',
    },
    {
      q: 'In The Princess and the Frog, what is Tiana’s friend’s name?',
      a: 'Charlotte La Bouff',
    },
    {
      q: 'What is the name of the hyena trio in The Lion King?',
      a: 'Shenzi, Banzai, and Ed',
    },
    {
      q: 'In Tangled, what is the name of Rapunzel’s horse friend?',
      a: 'Maximus',
    },
    {
      q: 'What is the name of Stitch’s creator in Lilo & Stitch?',
      a: 'Dr. Jumba Jookiba',
    },
    {
      q: 'In Monsters, Inc., what is the name of Sulley’s best friend?',
      a: 'Mike Wazowski',
    },
  ] as const;

  const faqItems = [
    {
      question: 'What counts as Disney movie trivia?',
      answer:
        'Disney movie trivia includes animated classics, modern Disney films, and Pixar movies. Many families mix them together in one round.',
    },
    {
      question: 'How do I balance classic and modern questions?',
      answer:
        'Try a 50/50 mix. Ask one classic question followed by one modern question so each generation has a turn to shine.',
    },
    {
      question: 'Are villains and sidekicks good trivia topics for kids?',
      answer:
        'Yes. Kids often remember sidekicks and villains because they are so distinctive, which makes those questions fun and approachable.',
    },
    {
      question: 'How many questions should I use for a movie trivia night?',
      answer:
        'A 15–20 question round keeps the pace lively while still covering several movies.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        type: 'BlogPosting',
        headline: 'Disney Movie Trivia: Classic & Modern Films',
        description: 'Disney movie trivia with classic favorites, modern Pixar hits, and villains & sidekicks questions, plus a quick family game format for kids and parents.',
        datePublished: '2025-02-10T00:00:00Z',
        dateModified: '2025-02-10T00:00:00Z',
        path: '/blog/disney-movie-trivia',
        keywords: 'disney movie trivia, disney trivia, disney trivia questions',
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
                  Disney Movie Trivia: Classic & Modern Films
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  A movie-focused Disney trivia round that mixes classics,
                  modern favorites, and the villains and sidekicks kids love.
                </p>
              </header>

              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  If your family loves Disney movies, this trivia round is built
                  for you. You’ll find a mix of classic films and modern Pixar
                  favorites, plus a section dedicated to villains and sidekicks
                  that kids remember instantly. For a bigger, all-in-one
                  collection, visit our{' '}
                  <Link
                    href='/blog/disney-trivia-questions'
                    className='text-primary font-semibold hover:underline'
                  >
                    Disney trivia questions hub
                  </Link>{' '}
                  for easy, medium, and hard rounds.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Classic Disney Movie Trivia
                </h2>
                <div className='space-y-4'>
                  {classicQuestions.map((item, index) => (
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
                  Modern Disney & Pixar Trivia
                </h2>
                <div className='space-y-4'>
                  {modernQuestions.map((item, index) => (
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
                  Villains & Sidekicks Trivia
                </h2>
                <div className='space-y-4'>
                  {villainsAndSidekicks.map((item, index) => (
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
                  How to Play Movie Trivia as a Family Game
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Use movie trivia as a warm-up before a film, or make it the
                  main event. Pick 12–15 questions, rotate turns, and let kids
                  choose the order so they feel involved.
                </p>
                <ul className='list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2'>
                  <li>Play before movie night while snacks are ready.</li>
                  <li>Give a bonus point for singing a famous song lyric.</li>
                  <li>Let the winner choose the next movie.</li>
                </ul>
              </section>

              <section
                id='cta'
                className='mb-12 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 text-center'
              >
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Make Movie Trivia a Quick Family Game
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  These questions are even more fun when played as a quick
                  family trivia game on one phone.
                </p>
                <DownloadButtons
                  containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center'
                  buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity'
                />
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Disney Movie Trivia FAQs
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
                  Explore More Disney Trivia
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  If you want a larger mix of difficulty levels, head back to
                  the{' '}
                  <Link
                    href='/blog/disney-trivia-questions'
                    className='text-primary font-semibold hover:underline'
                  >
                    Disney trivia questions hub
                  </Link>{' '}
                  and build a custom round for your family.
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
