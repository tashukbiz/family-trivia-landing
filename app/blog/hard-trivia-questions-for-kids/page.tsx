import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: '50 Hard Trivia Questions for Kids (With Answers) | Family Trivia',
  description: 'Looking for hard trivia questions for kids? Here are 50 challenging trivia questions with answers for older kids ages 9-12. Test the whole family in our app!',
  path: '/blog/hard-trivia-questions-for-kids',
  keywords: [
    'hard trivia questions for kids',
    'hard trivia questions for kids with answers',
    'difficult trivia questions for kids',
    'challenging trivia questions for kids',
    'hard trivia questions for older kids',
    'Family Trivia app',
    'family games',
  ],
  publishedTime: '2026-06-18T00:00:00Z',
  modifiedTime: '2026-06-18T00:00:00Z',
});

export default function HardTriviaQuestionsForKidsPage() {
  const scienceQuestions = [
    {
      q: 'What part of a cell is known as its "powerhouse"?',
      a: 'The mitochondria — it produces the energy the cell needs to work.',
    },
    {
      q: 'What is the hardest natural substance on Earth?',
      a: 'Diamond — it is made of carbon atoms arranged in a very strong pattern.',
    },
    {
      q: 'What gas do plants take in from the air to make their food?',
      a: 'Carbon dioxide. They use it during photosynthesis and release oxygen.',
    },
    {
      q: 'Is a tomato botanically a fruit or a vegetable?',
      a: 'Botanically it is a fruit, because it grows from a flower and contains seeds.',
    },
    {
      q: 'What is the process called when a solid turns directly into a gas without becoming a liquid first?',
      a: 'Sublimation — dry ice does this as it turns into carbon dioxide gas.',
    },
    {
      q: 'How many bones are in the adult human body?',
      a: '206. Babies are born with about 300, and some bones fuse together as we grow.',
    },
    {
      q: 'What force pulls objects toward the center of the Earth?',
      a: 'Gravity.',
    },
    {
      q: 'What is the chemical symbol for gold?',
      a: 'Au, from the Latin word "aurum."',
    },
    {
      q: 'What is the largest organ in the human body?',
      a: 'The skin.',
    },
  ] as const;

  const geographyQuestions = [
    {
      q: 'What is the longest river in the world?',
      a: 'The Nile (about 6,650 km) — though the Amazon is a very close second and some scientists argue it is longer.',
    },
    {
      q: 'Which mountain is the tallest from its base to its peak, even though Everest is the highest above sea level?',
      a: 'Mauna Kea in Hawaii — most of it is hidden underwater, making it taller base-to-peak than Everest.',
    },
    {
      q: 'What is the smallest country in the world?',
      a: 'Vatican City, which sits inside the city of Rome, Italy.',
    },
    {
      q: 'Which country has the most people living in it?',
      a: 'India, which recently passed China as the most populated country.',
    },
    {
      q: 'What is the largest desert in the world?',
      a: 'Antarctica — a desert is defined by how little it rains or snows, not by heat.',
    },
    {
      q: 'Which two countries share the longest land border in the world?',
      a: 'Canada and the United States.',
    },
    {
      q: 'What is the capital city of Australia?',
      a: 'Canberra — not Sydney, which is the largest city.',
    },
    {
      q: 'Which African country was never fully colonized by a European power?',
      a: 'Ethiopia.',
    },
  ] as const;

  const historyQuestions = [
    {
      q: 'Which ancient civilization built the pyramids at Giza?',
      a: 'The ancient Egyptians.',
    },
    {
      q: 'Who was the first person to walk on the Moon?',
      a: 'Neil Armstrong, in 1969.',
    },
    {
      q: 'What ship famously sank in 1912 after hitting an iceberg?',
      a: 'The Titanic.',
    },
    {
      q: 'Which wall divided the city of Berlin until it fell in 1989?',
      a: 'The Berlin Wall.',
    },
    {
      q: 'Who was the famous queen of ancient Egypt known for ruling with Mark Antony?',
      a: 'Cleopatra.',
    },
    {
      q: 'What was the name of the period when much of Europe rediscovered art and learning, starting in the 1300s?',
      a: 'The Renaissance.',
    },
    {
      q: 'Which explorer is often credited with sailing to the Americas in 1492?',
      a: 'Christopher Columbus.',
    },
    {
      q: 'What ancient wonder was a giant lighthouse near the city of Alexandria?',
      a: 'The Lighthouse of Alexandria (the Pharos).',
    },
  ] as const;

  const spaceQuestions = [
    {
      q: 'Which planet in our solar system is the hottest?',
      a: 'Venus. Its thick atmosphere traps heat, making it hotter than Mercury even though Mercury is closer to the Sun.',
    },
    {
      q: 'Is the Sun a planet or a star?',
      a: 'A star. It only looks different from other stars because it is so much closer to us.',
    },
    {
      q: 'Which planet is the largest in our solar system?',
      a: 'Jupiter — it is so big that more than 1,000 Earths could fit inside it.',
    },
    {
      q: 'What is the name of the galaxy we live in?',
      a: 'The Milky Way.',
    },
    {
      q: 'Which planet is famous for its bright rings made of ice and rock?',
      a: 'Saturn.',
    },
    {
      q: 'What do we call a rock from space that burns up as it streaks through our atmosphere?',
      a: 'A meteor (often called a shooting star).',
    },
    {
      q: 'How long does light from the Sun take to reach Earth?',
      a: 'About 8 minutes.',
    },
    {
      q: 'What is the closest planet to the Sun?',
      a: 'Mercury.',
    },
  ] as const;

  const brainTeaserQuestions = [
    {
      q: 'How many sides does a heptagon have?',
      a: 'Seven. The prefix "hept-" means seven.',
    },
    {
      q: 'What is the only even prime number?',
      a: '2 — every other even number can be divided by 2, so they are not prime.',
    },
    {
      q: 'If a clock reads 3:15, what is the smaller angle between the hour and minute hands?',
      a: '7.5 degrees — the hour hand moves a little past the 3 as the minutes pass.',
    },
    {
      q: 'What is the value of pi rounded to two decimal places?',
      a: '3.14.',
    },
    {
      q: 'A farmer has 17 sheep, and all but 9 run away. How many sheep are left?',
      a: 'Nine — "all but 9" means 9 stayed behind.',
    },
    {
      q: 'How many degrees are in the three angles of a triangle added together?',
      a: '180 degrees.',
    },
    {
      q: 'What is the next number in this pattern: 2, 4, 8, 16, ...?',
      a: '32 — each number is double the one before it.',
    },
    {
      q: 'What do you call a number that can only be divided evenly by 1 and itself?',
      a: 'A prime number.',
    },
  ] as const;

  const languageQuestions = [
    {
      q: 'Can the Great Wall of China be seen from space with the naked eye?',
      a: 'No — that is a popular myth. It is too narrow to spot from space without a camera or telescope.',
    },
    {
      q: 'What do you call a word that reads the same forwards and backwards, like "level" or "racecar"?',
      a: 'A palindrome.',
    },
    {
      q: 'How many of the Seven Wonders of the Ancient World still survive today?',
      a: 'Only one — the Great Pyramid of Giza.',
    },
    {
      q: 'What is the most widely spoken first language in the world?',
      a: 'Mandarin Chinese, by number of native speakers.',
    },
    {
      q: 'What do you call a word that means the opposite of another word, like "hot" and "cold"?',
      a: 'An antonym.',
    },
    {
      q: 'Which language has the most words borrowed into it and is spoken in the most countries as an official language?',
      a: 'English.',
    },
    {
      q: 'What is the longest-running ancient wonder still being added to the modern Seven Wonders list, found in India?',
      a: 'The Taj Mahal — one of the New Seven Wonders of the World.',
    },
    {
      q: 'What do you call a group of words, like "a piece of cake," that means something different from the actual words?',
      a: 'An idiom.',
    },
    {
      q: 'How many letters are in the English alphabet?',
      a: '26.',
    },
  ] as const;

  const triviaQuestions = [
    ...scienceQuestions,
    ...geographyQuestions,
    ...historyQuestions,
    ...spaceQuestions,
    ...brainTeaserQuestions,
    ...languageQuestions,
  ] as const;

  const faqQuestions = [
    {
      q: 'What are some hard trivia questions for kids?',
      a: 'Hard trivia questions for kids ask them to think beyond the basics, like "What part of a cell is the powerhouse?" (the mitochondria) or "Which planet is the hottest?" (Venus, not Mercury). The best ones have a single, clear answer that a sharp 9 to 12-year-old can reason their way to.',
    },
    {
      q: 'What is the hardest trivia question for kids?',
      a: 'A genuine stumper is "Which mountain is the tallest from its base to its peak?" The answer is Mauna Kea in Hawaii, because most of it is hidden underwater, even though Mount Everest is the highest point above sea level.',
    },
    {
      q: 'What age are hard trivia questions good for?',
      a: 'Hard trivia questions work best for older kids and tweens roughly ages 9 to 12, as well as teens. By this age, kids have enough school knowledge and reasoning skills to enjoy a real challenge without getting frustrated.',
    },
    {
      q: 'How do you make trivia questions harder for kids?',
      a: 'You can make trivia harder by asking for specific details instead of general ones, adding fact-traps that bust common myths, removing multiple-choice options, or asking kids to explain why an answer is true. Combining two facts in one question also raises the difficulty.',
    },
    {
      q: 'Where can I find more hard trivia questions for kids?',
      a: 'You can find unlimited challenging trivia in the Family Trivia app, which automatically scales the difficulty to each player, so an 8-year-old and a 14-year-old both get a fair challenge in the same game.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        type: 'Article',
        headline: '50 Hard Trivia Questions for Kids (With Answers)',
        description: 'Looking for hard trivia questions for kids? Here are 50 challenging trivia questions with answers for older kids ages 9-12. Test the whole family in our app!',
        path: '/blog/hard-trivia-questions-for-kids',
        keywords: 'hard trivia questions for kids, hard trivia questions for kids with answers, difficult trivia questions for kids, challenging trivia questions for kids',
      }),
      {
        '@type': 'FAQPage',
        mainEntity: [...triviaQuestions, ...faqQuestions].map((item) => ({
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

            {/* Article Header */}
            <article className='prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
                  50 Hard Trivia Questions for Kids (With Answers)
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Challenging trivia questions and answers for older kids ages
                  9–12 who are ready to level up.
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  If the easy questions have gotten too easy, it's time to raise
                  the bar. These <strong>hard trivia questions for kids</strong>{' '}
                  are designed for older kids and tweens, roughly ages 9 to 12,
                  who are ready for a real challenge. They go beyond the basics
                  and reward kids who think carefully, reason things out, and
                  love to learn.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Not quite ready for this level? Start with our{' '}
                  <Link
                    href='/blog/kids-trivia-questions'
                    className='text-primary hover:underline'
                  >
                    easy trivia questions for kids
                  </Link>{' '}
                  and work your way up. Every question here has a single, clear
                  answer that a sharp upper-elementary or middle-school student
                  can reach with a little thought — challenging, but never
                  adult-impossible.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Hard trivia questions for kids ages 9–12 push beyond basics —
                  asking things like what the powerhouse of the cell is (the
                  mitochondria), which planet is the hottest (Venus, not
                  Mercury), and how many sides a heptagon has (seven). Ready to
                  put your brain to the test? Click "Show Answer" to check each
                  one!
                </p>
              </section>

              {/* Why Hard Trivia Questions Are Great for Older Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Hard Trivia Is Great for Older Kids
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Challenging questions do more than test what kids already know.
                  They help older kids grow in important ways:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🧠</span> Builds Critical
                      Thinking
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Hard questions ask kids to reason, connect ideas, and rule
                      out wrong answers. That kind of thinking strengthens
                      problem-solving skills they will use in school and beyond.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>💪</span> Teaches Healthy
                      Challenge & Resilience
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      It's okay not to know! Tough questions teach kids that
                      being stumped is part of learning, helping them stay calm
                      and curious instead of giving up when something is hard.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>📚</span> Stretches Knowledge
                      Across Subjects
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      From science and space to history and geography, hard
                      trivia covers a wide range of topics, helping kids connect
                      what they learn in different classes into one big picture.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🏆</span> Makes Game Night
                      Competitive & Fun
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Older kids love a real contest. Harder questions keep the
                      competition fair and exciting, so tweens and teens stay
                      engaged instead of getting bored with questions that are
                      too easy.
                    </p>
                  </div>
                </div>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200 mb-4'>
                    <strong>💡 Pro Tip:</strong> Want unlimited challenging
                    questions that scale to each player's level? Our{' '}
                    <a
                      href='#cta'
                      className='font-bold text-primary hover:underline'
                    >
                      Family Trivia app
                    </a>{' '}
                    automatically adjusts difficulty, so an 8-year-old and a
                    14-year-old both get a fair challenge in the same game!
                  </p>
                  <p className='text-gray-700 dark:text-gray-300'>
                    With AI-generated questions personalized for each family
                    member, no one is stuck with questions that are too hard or
                    too easy. Everyone competes, everyone learns, and everyone
                    has fun.
                  </p>
                </div>
              </section>

              {/* 50 Hard Trivia Questions */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  50 Hard Trivia Questions for Kids (With Answers)
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Here are all 50 challenging questions, sorted into six tricky
                  categories. Take them one section at a time, or mix them up for
                  a full quiz-bowl-style round. Click "Show Answer" to reveal each
                  answer when you are ready!
                </p>

                {/* Section 1: Hard Science & Nature */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🔬 Hard Science & Nature Questions
                </h3>
                <div className='space-y-6 mb-8'>
                  {scienceQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index + 1}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                            {item.q}
                          </h3>
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

                {/* Section 2: Tricky Geography */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🗺️ Tricky Geography Questions
                </h3>
                <div className='space-y-6 mb-8'>
                  {geographyQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index + scienceQuestions.length + 1}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                            {item.q}
                          </h3>
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

                {/* Section 3: History Challenges */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🏛️ History Challenge Questions
                </h3>
                <div className='space-y-6 mb-8'>
                  {historyQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              scienceQuestions.length +
                              geographyQuestions.length +
                              1}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                            {item.q}
                          </h3>
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

                {/* Mid-Article CTA */}
                <div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl p-8 my-10 text-center'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    🏆 Finding These Hard Enough?
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                    You're halfway through the challenge! Want unlimited
                    difficult questions that grow with your kids? The{' '}
                    <strong>Family Trivia app</strong> auto-scales difficulty, so
                    an 8-year-old and a 14-year-old both get a fair challenge in
                    the very same game.
                  </p>
                  <DownloadButtons
                    containerClassName='flex flex-col items-center justify-center gap-3 sm:flex-row'
                    buttonClassName='inline-flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'
                    iosLabel='Get the App on iOS'
                    androidLabel='Get the App on Android'
                  />
                </div>

                {/* Section 4: Space & the Universe */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🚀 Space & the Universe Questions
                </h3>
                <div className='space-y-6 mb-8'>
                  {spaceQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              scienceQuestions.length +
                              geographyQuestions.length +
                              historyQuestions.length +
                              1}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                            {item.q}
                          </h3>
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

                {/* Section 5: Brain Teasers, Math & Logic */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🧩 Brain Teasers, Math & Logic
                </h3>
                <div className='space-y-6 mb-8'>
                  {brainTeaserQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              scienceQuestions.length +
                              geographyQuestions.length +
                              historyQuestions.length +
                              spaceQuestions.length +
                              1}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                            {item.q}
                          </h3>
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

                {/* Section 6: Language, Words & Wonders of the World */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🌐 Language, Words & Wonders of the World
                </h3>
                <div className='space-y-6'>
                  {languageQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              scienceQuestions.length +
                              geographyQuestions.length +
                              historyQuestions.length +
                              spaceQuestions.length +
                              brainTeaserQuestions.length +
                              1}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                            {item.q}
                          </h3>
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
              </section>

              {/* Turn It Into a Family Challenge */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Turn It Into a Family Challenge!
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Now that you have 50 brain-bending questions, it's time to turn
                  up the heat and challenge the whole family. Here are some fun
                  ways to play:
                </p>

                <ul className='list-disc pl-6 mb-8 space-y-2 text-lg text-gray-800 dark:text-gray-200'>
                  <li>Run a timed "challenge round" with a point for each correct answer</li>
                  <li>Play "beat the parents" — kids versus grown-ups</li>
                  <li>Use it as quiz-bowl practice before a school competition</li>
                  <li>Split into teams so everyone has a partner to think with</li>
                </ul>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Want a lighter round to mix in? Add a few of our 50{' '}
                  <Link
                    href='/blog/fun-trivia-questions-for-kids'
                    className='text-primary hover:underline'
                  >
                    fun trivia questions for kids
                  </Link>{' '}
                  to keep the energy up between the tough ones.
                </p>

                <div
                  id='cta'
                  className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-8 text-center'
                >
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    🎮 Want Unlimited Hard Trivia That Grows With Your Kids?
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                    These 50 questions are just the start! With{' '}
                    <strong>unlimited challenging questions</strong> across every
                    subject, the whole family can keep competing long after these
                    run out.
                  </p>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                    The best part: the <strong>Family Trivia app</strong>{' '}
                    automatically scales the difficulty for each player, so an
                    8-year-old and a 14-year-old both get a fair challenge in the
                    same game. No one is stuck with questions that are too hard or
                    too easy — everyone competes on a level playing field.
                  </p>

                  <DownloadButtons
                    containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center mb-6'
                    buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'
                  />

                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    ✓ Free trial available &nbsp;•&nbsp; ✓ No ads &nbsp;•&nbsp;
                    ✓ Safe for kids &nbsp;•&nbsp; ✓ Auto-scaling difficulty
                  </p>
                </div>

                <div className='bg-white dark:bg-slate-800 rounded-lg p-8 my-8 border border-gray-200 dark:border-slate-700'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    Why Families Love Our App:
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex items-start gap-3'>
                      <span className='text-green-500 text-2xl'>✓</span>
                      <div>
                        <strong className='text-gray-900 dark:text-white'>
                          Personalized for Every Player
                        </strong>
                        <p className='text-gray-700 dark:text-gray-300 text-sm'>
                          Each person gets questions matched to their age and
                          skill level
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <span className='text-green-500 text-2xl'>✓</span>
                      <div>
                        <strong className='text-gray-900 dark:text-white'>
                          AI-Generated Questions
                        </strong>
                        <p className='text-gray-700 dark:text-gray-300 text-sm'>
                          Never run out of fresh, challenging trivia questions
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <span className='text-green-500 text-2xl'>✓</span>
                      <div>
                        <strong className='text-gray-900 dark:text-white'>
                          Single Device Multiplayer
                        </strong>
                        <p className='text-gray-700 dark:text-gray-300 text-sm'>
                          Play together on one phone or tablet
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <span className='text-green-500 text-2xl'>✓</span>
                      <div>
                        <strong className='text-gray-900 dark:text-white'>
                          Educational & Fun
                        </strong>
                        <p className='text-gray-700 dark:text-gray-300 text-sm'>
                          Learning disguised as a competition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tips for Playing Hard Trivia with Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Tips for Playing Hard Trivia with Kids
                </h2>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      1. Allow Hints or Multiple Guesses
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      When a question is tough, give a small hint or let kids try
                      a few guesses. This keeps frustration low and helps them
                      learn the reasoning, not just the answer.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      2. Use It as a Learning Moment, Not a Test
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      The goal is curiosity, not a perfect score. When kids miss
                      one, explain the fact and why it surprised them. A missed
                      question is a great chance to learn something new together.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      3. Play in Teams to Keep It Fun
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Teaming up lets kids talk through their thinking and learn
                      from each other. It also takes the pressure off any one
                      player and makes the harder questions feel less daunting.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      4. Mix in a Few Easy Ones to Keep Momentum
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Sprinkle in a few simpler questions between the hard ones so
                      kids keep scoring points and stay motivated. A steady mix
                      keeps the game exciting instead of discouraging.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      5. Celebrate the "Aha!" Moments
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Make a big deal out of a clever guess or a hard-won correct
                      answer. Praising the effort and reasoning, not just the
                      result, builds resilience and a love of learning.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Frequently Asked Questions About Hard Kids' Trivia
                </h2>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What are some hard trivia questions for kids?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Hard trivia questions for kids ask them to think beyond the
                      basics, like "What part of a cell is the powerhouse?" (the
                      mitochondria) or "Which planet is the hottest?" (Venus, not
                      Mercury). The best ones have a single, clear answer that a
                      sharp 9 to 12-year-old can reason their way to.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What is the hardest trivia question for kids?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      A genuine stumper is "Which mountain is the tallest from its
                      base to its peak?" The answer is Mauna Kea in Hawaii,
                      because most of it is hidden underwater, even though Mount
                      Everest is the highest point above sea level.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What age are hard trivia questions good for?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Hard trivia questions work best for older kids and tweens
                      roughly ages 9 to 12, as well as teens. By this age, kids
                      have enough school knowledge and reasoning skills to enjoy a
                      real challenge without getting frustrated.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      How do you make trivia questions harder for kids?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      You can make trivia harder by asking for specific details
                      instead of general ones, adding fact-traps that bust common
                      myths, removing multiple-choice options, or asking kids to
                      explain why an answer is true. Combining two facts in one
                      question also raises the difficulty.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Where can I find more hard trivia questions for kids?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      You can find unlimited challenging trivia in the Family
                      Trivia app, which automatically scales the difficulty to
                      each player, so an 8-year-old and a 14-year-old both get a
                      fair challenge in the same game.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Ready to Level Up Game Night?
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  These 50 hard trivia questions are the perfect way to challenge
                  older kids, stretch their knowledge, and turn game night into a
                  friendly competition. The tougher the question, the bigger the
                  cheer when someone finally cracks it!
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Need a warm-up first, or have a younger sibling joining in? Mix
                  in our{' '}
                  <Link
                    href='/blog/trivia-questions-for-kids'
                    className='text-primary hover:underline'
                  >
                    trivia questions for kids
                  </Link>{' '}
                  for a gentler round. And when you're ready for unlimited
                  questions that scale to every player's level, download the
                  Family Trivia app and keep the challenge going all year long!
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
