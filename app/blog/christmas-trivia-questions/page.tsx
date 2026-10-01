import DownloadButtons from '@/components/DownloadButtons';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: 'Christmas Trivia Questions: 50 Fun Questions for Families (With Answers) | Family Trivia',
  description: 'Looking for Christmas trivia questions? Here are 50 festive questions with answers about Santa, Christmas movies, holiday food and traditions around the world. Perfect for kids and adults!',
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
  modifiedTime: '2026-10-01T00:00:00Z',
});

export default function ChristmasTriviaQuestionsPage() {
  const categories = [
    {
      title: '🌍 Christmas Traditions Around the World',
      questions: [
        {
          q: 'In which country did the tradition of decorating Christmas trees begin?',
          a: 'Germany',
        },
        {
          q: 'What do children in the Netherlands put out for Sinterklaas to fill with treats?',
          a: 'Their shoes (often with a carrot or hay for his horse)',
        },
        {
          q: 'In Mexico, what are the nine nights of candlelit processions before Christmas called?',
          a: 'Las Posadas',
        },
        {
          q: 'What fast food do many families in Japan eat on Christmas Eve?',
          a: 'Fried chicken from KFC',
        },
        {
          q: 'In Italy, which kind witch brings presents to children on the night before Epiphany?',
          a: 'La Befana',
        },
        {
          q: 'What plant do people traditionally kiss under at Christmas?',
          a: 'Mistletoe',
        },
        {
          q: 'What do people in the UK pull at the dinner table that goes "bang" and has a paper crown inside?',
          a: 'A Christmas cracker',
        },
        {
          q: 'What season is it in Australia at Christmas time?',
          a: 'Summer',
        },
        {
          q: 'In Iceland, how many mischievous Yule Lads visit children in the days before Christmas?',
          a: '13',
        },
        {
          q: 'Which red Christmas plant originally comes from Mexico?',
          a: 'The poinsettia',
        },
      ],
    },
    {
      title: '🎬 Christmas Movies and Stories',
      questions: [
        {
          q: 'In the movie "Elf," what is the name of Will Ferrell\'s character?',
          a: 'Buddy',
        },
        {
          q: 'What is the name of the Grinch\'s loyal dog?',
          a: 'Max',
        },
        {
          q: 'In "Home Alone," which city is Kevin\'s family flying to when they leave him behind?',
          a: 'Paris',
        },
        {
          q: 'In "The Polar Express," what is the first gift of Christmas that the boy receives?',
          a: 'A silver bell from Santa\'s sleigh',
        },
        {
          q: 'In "A Charlie Brown Christmas," what kind of Christmas tree does Charlie Brown choose?',
          a: 'A small, droopy real tree that nobody else wants',
        },
        {
          q: 'What brings Frosty the Snowman to life?',
          a: 'A magic hat',
        },
        {
          q: 'In "How the Grinch Stole Christmas!", what is the name of the town where the Whos live?',
          a: 'Whoville',
        },
        {
          q: 'Who wrote "A Christmas Carol"?',
          a: 'Charles Dickens',
        },
        {
          q: 'How many ghosts visit Ebenezer Scrooge in "A Christmas Carol"?',
          a: 'Four: Jacob Marley, then the Ghosts of Christmas Past, Present and Yet to Come',
        },
        {
          q: 'In "The Nutcracker" ballet, what is the name of the girl who receives the nutcracker?',
          a: 'Clara (called Marie in some versions)',
        },
      ],
    },
    {
      title: '🎅 Santa and His Reindeer',
      questions: [
        {
          q: 'Where does Santa Claus live?',
          a: 'The North Pole',
        },
        {
          q: 'How many reindeer pull Santa\'s sleigh, counting Rudolph?',
          a: 'Nine',
        },
        {
          q: 'Which reindeer has a glowing red nose?',
          a: 'Rudolph',
        },
        {
          q: 'What is the name of Santa\'s wife?',
          a: 'Mrs. Claus',
        },
        {
          q: 'Which saint is Santa Claus based on?',
          a: 'Saint Nicholas',
        },
        {
          q: 'What snack do children in the United States traditionally leave out for Santa?',
          a: 'Milk and cookies',
        },
        {
          q: 'What treat do children in the UK often leave out for Santa?',
          a: 'A mince pie (and a carrot for the reindeer)',
        },
        {
          q: 'According to tradition, what does Santa leave for naughty children?',
          a: 'A lump of coal',
        },
        {
          q: 'Who helps Santa make toys in his workshop?',
          a: 'Elves',
        },
        {
          q: 'Which famous poem, first published in 1823, gave Santa\'s reindeer their names?',
          a: '"A Visit from St. Nicholas," also known as "\'Twas the Night Before Christmas"',
        },
      ],
    },
    {
      title: '🍪 Christmas Food and Treats',
      questions: [
        {
          q: 'What letter does a candy cane look like?',
          a: 'The letter J',
        },
        {
          q: 'Which spice gives gingerbread its name?',
          a: 'Ginger',
        },
        {
          q: 'What creamy holiday drink is made from milk, eggs and sugar?',
          a: 'Eggnog',
        },
        {
          q: 'Which British Christmas dessert is sometimes set on fire before serving?',
          a: 'Christmas pudding',
        },
        {
          q: 'What tall Italian sweet bread full of dried fruit is popular at Christmas?',
          a: 'Panettone',
        },
        {
          q: 'What German Christmas bread is dusted with powdered sugar?',
          a: 'Stollen',
        },
        {
          q: 'What French Christmas cake is shaped like a log?',
          a: 'Bûche de Noël (Yule log)',
        },
        {
          q: 'Which bird is the most traditional Christmas dinner in the UK and the US?',
          a: 'Turkey',
        },
        {
          q: 'What small object is traditionally hidden in a Christmas pudding for good luck?',
          a: 'A silver coin',
        },
        {
          q: 'What do families build out of gingerbread and candy at Christmas?',
          a: 'A gingerbread house',
        },
      ],
    },
    {
      title: '❄️ Christmas History and Fun Facts',
      questions: [
        {
          q: 'The word "Noel" comes from a Latin word meaning what?',
          a: 'Birth',
        },
        {
          q: 'What does the "X" in "Xmas" stand for?',
          a: 'The Greek letter chi, the first letter of "Christ" in Greek',
        },
        {
          q: 'On what date do many Orthodox Christians, such as those in Russia, celebrate Christmas?',
          a: 'January 7',
        },
        {
          q: 'How many gifts are given in total in the song "The Twelve Days of Christmas"?',
          a: '364',
        },
        {
          q: 'Which country sends a giant Christmas tree to London\'s Trafalgar Square every year?',
          a: 'Norway',
        },
        {
          q: 'Before electric lights, what did people use to light up Christmas trees?',
          a: 'Candles',
        },
        {
          q: 'In which New York City landmark is a famous giant Christmas tree lit every year?',
          a: 'Rockefeller Center',
        },
        {
          q: 'What is a baby reindeer called?',
          a: 'A calf',
        },
        {
          q: 'Do female reindeer grow antlers?',
          a: 'Yes. Reindeer are the only deer where both males and females grow antlers',
        },
        {
          q: 'Which Bing Crosby song is the best-selling Christmas single of all time?',
          a: '"White Christmas"',
        },
      ],
    },
  ];

  const allQuestions = categories.flatMap((category) => category.questions);

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        metadata,
        type: 'Article',
        headline: 'Christmas Trivia Questions: 50 Fun Questions for Families (With Answers)',
        description: 'Looking for Christmas trivia questions? Here are 50 festive questions with answers about Santa, Christmas movies, holiday food and traditions around the world. Perfect for kids and adults!',
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
                  Christmas Trivia Questions: 50 Fun Questions for Families (With Answers)
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Santa, reindeer, holiday movies, festive food and traditions
                  from around the world, all in one Christmas quiz
                </p>
              </header>

              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Christmas is the one time of year when the whole family ends
                  up around the same table: grandparents, cousins, little ones
                  and teenagers who would usually be on their phones. A round
                  of Christmas trivia is one of the easiest ways to get
                  everyone talking, laughing and competing (politely) for
                  bragging rights until next December.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  We&apos;ve put together 50 Christmas trivia questions with
                  answers, split into five festive categories. There are easy
                  questions for young kids, trickier ones for grown-ups, and a
                  few surprises that will stump even the biggest Christmas fan
                  in your house. Tap &quot;Show Answer&quot; to reveal each
                  one.
                </p>
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
                    🎄 Want Endless Christmas Trivia?
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
