import { ReadAloudQuestions, TakeAlongRound } from '@/components/TakeAlongRound';
import categories from '@/lib/rounds/christmas.json';
import DownloadButtons from '@/components/DownloadButtons';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: '50 Christmas Trivia Questions for Kids and Families',
  description: 'Play 50 Christmas trivia questions with answers about Santa, movies, food and traditions. Start with 10 easy questions or print the round and host key.',
  path: '/blog/christmas-trivia-questions',
  keywords: [
    'christmas trivia questions',
    'christmas trivia',
    'christmas trivia questions and answers',
    'christmas trivia for kids',
    'christmas trivia for families',
    'christmas movie trivia',
    'Family Trivia app',
  ],
  publishedTime: '2026-10-01T00:00:00Z',
  modifiedTime: '2026-11-18T00:00:00Z',
});

export default function ChristmasTriviaQuestionsPage() {
  const allQuestions = categories.flatMap((category) => category.questions);

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        metadata,
        type: 'Article',
        headline: '50 Christmas Trivia Questions for Kids and Families',
        description: 'Play 50 Christmas trivia questions with answers about Santa, movies, food and traditions. Start with 10 easy questions or print the round and host key.',
        path: '/blog/christmas-trivia-questions',
        keywords: 'christmas trivia questions, christmas trivia, christmas trivia questions and answers, christmas trivia for kids',
      }),
      {
        '@type': 'FAQPage',
        mainEntity: allQuestions.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
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
                  50 Christmas Trivia Questions for Kids and Families
                </h1>
                <p className='mt-3 text-lg'>Try ten easy questions together, then choose a round about reindeer, movies or holiday traditions.</p>
                <a className='mt-3 inline-block underline' href='#easy-round'>Jump to 10 easy questions and the printable sheet</a>
              </header>

              <section id='easy-round' className='mb-10'>
                <h2 className='mb-4 text-2xl font-bold'>10 easy Christmas questions to play now</h2>
                <ReadAloudQuestions questions={categories.flatMap(group => group.questions).filter(item => 'sheet' in item && item.sheet)} />
                <TakeAlongRound sheet='christmas'>Heading to a holiday lunch? Print the easy round before you go. Give page one to the kids and keep the answers on page two for whoever is hosting.</TakeAlongRound>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  How to Host a Christmas Trivia Game
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>👨‍👩‍👧‍👦</span> Mix Up the Teams
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Pair a younger child with a grandparent or an older
                      cousin. Kids usually know the movies, while adults know
                      the history, so mixed teams stay close all game long.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🎁</span> Play for Festive Prizes
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Chocolate coins, the first pick from the cookie plate or
                      the right to choose the next Christmas movie all make
                      great prizes.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🕯️</span> Pick the Right Moment
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Christmas Eve after dinner, while the turkey is roasting,
                      or on a long drive to see relatives are all perfect times
                      for a quick round.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>⭐</span> Let Everyone Pick a Category
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Give each player or team a turn choosing the next
                      category below. Movie fans and foodies both get their
                      moment to shine.
                    </p>
                  </div>
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  50 Christmas Trivia Questions (With Answers)
                </h2>

                {categories.map((category, categoryIndex) => {
                  const offset = categories
                    .slice(0, categoryIndex)
                    .reduce((sum, previous) => sum + previous.questions.length, 0);

                  return (
                    <div key={category.title}>
                      <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                        {category.title}
                      </h3>

                      <div className='space-y-6 mb-8'>
                        {category.questions.map((item, index) => (
                          <div
                            key={item.q}
                            className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                          >
                            <div className='flex gap-4'>
                              <div className='flex-shrink-0'>
                                <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                                  {offset + index + 1}
                                </span>
                              </div>
                              <div className='flex-1'>
                                <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                                  {item.q}
                                  {'sheet' in item && item.sheet && <span className='ml-2 text-sm font-medium'>Easy round</span>}
                                </h4>
                                <details className='group'>
                                  <summary className='cursor-pointer text-primary hover:text-primary/80 font-medium flex items-center gap-2'>
                                    <span>Show Answer</span>
                                    <span className='material-symbols-outlined text-sm transition-transform group-open:rotate-180'>
                                      expand_more
                                    </span>
                                  </summary>
                                  <p className='mt-3 text-gray-700 dark:text-gray-300 bg-primary/5 dark:bg-primary/10 rounded p-3'>
                                    <strong>Answer:</strong> {item.a}
                                  </p>
                                </details>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </section>

              <section className='mb-12'>
                <div
                  id='cta'
                  className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-8 text-center'
                >
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    Play another Christmas round
                  </h2>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                    Ran out of questions before the pudding came out? In the{' '}
                    <strong>Family Trivia app</strong>, each player picks a
                    topic like Christmas, Christmas movies or winter animals,
                    plus their own difficulty level. Grandpa can take on hard
                    Christmas history while your six-year-old answers easy
                    questions about Santa, all on one phone or tablet.
                  </p>

                  <DownloadButtons
                    containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center'
                    buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'
                  />
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Tips for a Merry Trivia Night
                </h2>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      1. Give Little Ones a Head Start
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Read questions aloud for younger kids and offer two or
                      three answer choices when a question is tricky. A quick
                      win keeps them excited for the next round.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      2. Save the Hardest Questions for a Tie-Breaker
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Questions like the total number of gifts in &quot;The
                      Twelve Days of Christmas&quot; make perfect tie-breakers.
                      Closest guess wins.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      3. Share the Story Behind the Answer
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Did you know that both male and female reindeer grow
                      antlers? Little facts like this spark conversations and
                      turn a quiz into a family memory.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      4. Make It a Yearly Tradition
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Crown a Christmas trivia champion every year. A paper
                      crown from a Christmas cracker makes the perfect trophy.
                    </p>
                  </div>
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  More Trivia for the Holidays
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Need more rounds once the Christmas questions run out? Try
                  our{' '}
                  <Link
                    href='/blog/disney-movie-trivia'
                    className='text-primary font-semibold hover:underline'
                  >
                    Disney movie trivia
                  </Link>{' '}
                  for movie lovers, these{' '}
                  <Link
                    href='/blog/trivia-questions-for-adults'
                    className='text-primary font-semibold hover:underline'
                  >
                    trivia questions for adults
                  </Link>{' '}
                  for after the kids go to bed, or browse more{' '}
                  <Link
                    href='/blog/family-game-night-ideas'
                    className='text-primary font-semibold hover:underline'
                  >
                    family game night ideas
                  </Link>{' '}
                  for the rest of the school holidays.
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
    </>
  );
}
