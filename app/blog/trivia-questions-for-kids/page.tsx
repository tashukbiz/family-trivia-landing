import SignupButton from '@/components/SignupButton';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'Trivia Questions for Kids - 20 Fun Questions to Play at Home! | Family Trivia',
  description:
    'Looking for trivia questions for kids? Here are 20 fun and educational trivia questions perfect for children of all ages. Play at home with our Family Trivia app!',
  keywords: [
    'trivia questions',
    'trivia questions for kids',
    'Family Trivia app',
    'kids trivia',
    'family games',
    'educational games for kids',
  ],
};

export default function TriviaQuestionsForKidsPage() {
  const triviaQuestions = [
    {
      q: 'What is the largest animal on earth?',
      a: 'The blue whale',
    },
    {
      q: 'What color do you get when you mix red and yellow?',
      a: 'Orange',
    },
    { q: 'Which planet is closest to the sun?', a: 'Mercury' },
    { q: 'What food does a panda mostly eat?', a: 'Bamboo' },
    { q: 'How many legs does a spider have?', a: 'Eight' },
    { q: 'What is the capital city of France?', a: 'Paris' },
    {
      q: 'Who wrote the story of Harry Potter?',
      a: 'J.K. Rowling',
    },
    { q: 'What is the fastest land animal?', a: 'The cheetah' },
    {
      q: 'Which ocean is the biggest?',
      a: 'The Pacific Ocean',
    },
    {
      q: 'What superhero can climb walls and shoot webs?',
      a: 'Spider-Man',
    },
    {
      q: 'What fruit keeps the doctor away if you eat one a day?',
      a: 'An apple',
    },
    {
      q: 'What is the national flower of Japan?',
      a: 'Cherry blossom (or sakura)',
    },
    {
      q: 'Which instrument has black and white keys?',
      a: 'A piano',
    },
    {
      q: 'What machine flies in the sky with passengers?',
      a: 'An airplane (or aeroplane)',
    },
    { q: 'What is the tallest animal?', a: 'The giraffe' },
    {
      q: 'Which season comes after summer?',
      a: 'Autumn (or fall)',
    },
    { q: 'What is the largest continent?', a: 'Asia' },
    {
      q: 'What bird is known for repeating human words?',
      a: 'A parrot',
    },
    { q: 'How many continents are there?', a: 'Seven' },
    { q: 'What is the main ingredient in bread?', a: 'Flour' },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline:
          'Trivia Questions for Kids – 20 Fun Questions to Play at Home!',
        description:
          'Looking for trivia questions for kids? Here are 20 fun and educational trivia questions perfect for children of all ages. Play at home with our Family Trivia app!',
        image: 'https://familytrivia.app/og-image.png',
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
          '@id': 'https://familytrivia.app/blog/trivia-questions-for-kids',
        },
        keywords: 'trivia questions for kids, kids trivia, trivia questions',
      },
      {
        '@type': 'FAQPage',
        mainEntity: triviaQuestions.map((item) => ({
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
                  Trivia Questions for Kids – 20 Fun Questions to Play at Home!
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Discover fun and educational trivia questions perfect for
                  children of all ages
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Welcome to the wonderful world of trivia! If you're looking
                  for a fun and engaging way to spend quality time with your
                  kids, trivia games are the perfect solution. Not only do they
                  bring laughter and excitement to family gatherings, but they
                  also help children learn new facts in a playful, memorable
                  way.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Whether you're planning a game night, looking for car ride
                  entertainment, or just want to make screen time more
                  educational, trivia questions are a fantastic choice. Kids
                  love the challenge of answering questions, and parents love
                  watching their children's faces light up when they get the
                  answer right!
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  In this article, we've put together 20 trivia questions that
                  are perfect for kids, along with tips on how to make trivia
                  time even more fun for the whole family.
                </p>
              </section>

              {/* Why Trivia Questions Are Great for Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Trivia Questions Are Great for Kids
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Trivia games offer so much more than just entertainment –
                  they're powerful learning tools that benefit children in
                  numerous ways:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🧠</span> Boosts Memory and
                      Learning
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Trivia helps kids retain information by making learning
                      fun and interactive. When children are engaged and
                      enjoying themselves, they remember facts much better than
                      through traditional study methods.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>💪</span> Builds Confidence
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Every correct answer boosts a child's self-esteem. Trivia
                      games provide positive reinforcement and help kids feel
                      proud of what they know.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>👨‍👩‍👧‍👦</span> Strengthens Family
                      Bonds
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Playing trivia together creates lasting memories and gives
                      families a screen-free activity to enjoy together. It's
                      quality time that everyone can participate in.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🌍</span> Broadens Knowledge
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Trivia questions expose kids to a wide range of topics –
                      from science and geography to pop culture and history –
                      sparking curiosity about the world around them.
                    </p>
                  </div>
                </div>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200 mb-4'>
                    <strong>💡 Pro Tip:</strong> Looking for an even better
                    trivia experience? Our{' '}
                    <a
                      href='#cta'
                      className='font-bold text-primary hover:underline'
                    >
                      Family Trivia app
                    </a>{' '}
                    provides a safe, engaging trivia experience designed
                    specifically for kids and families!
                  </p>
                  <p className='text-gray-700 dark:text-gray-300'>
                    With endless AI-generated questions tailored to each
                    player's age and interests, everyone gets questions that are
                    just right for them. No more complaints about questions
                    being too hard or too easy – Family Trivia makes game night
                    fair and fun for everyone from toddlers to grandparents!
                  </p>
                </div>
              </section>

              {/* 20 Trivia Questions for Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  20 Trivia Questions for Kids
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Ready to test your knowledge? Here are 20 fun trivia questions
                  perfect for kids! We've organized them to cover a variety of
                  topics – from animals and science to geography and pop
                  culture. Try them out and see how many you can get right!
                </p>

                <div className='space-y-6'>
                  {triviaQuestions.map((item, index) => (
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
              </section>

              {/* Play Trivia as a Family */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Play Trivia as a Family!
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Now that you have 20 fun trivia questions to get started, it's
                  time to gather the family and start playing! These questions
                  are perfect for:
                </p>

                <ul className='list-disc pl-6 mb-8 space-y-2 text-lg text-gray-800 dark:text-gray-200'>
                  <li>Family game nights at home</li>
                  <li>Long car rides and road trips</li>
                  <li>Rainy day activities</li>
                  <li>Birthday parties and celebrations</li>
                  <li>Educational screen time alternatives</li>
                  <li>Waiting at restaurants</li>
                </ul>

                <div
                  id='cta'
                  className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-8 text-center'
                >
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    🎮 Want More Trivia Questions?
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                    These 20 questions are just the beginning! If your kids
                    loved these trivia questions, imagine having access to{' '}
                    <strong>unlimited trivia questions</strong> on hundreds of
                    topics – all specially designed for different ages and
                    difficulty levels.
                  </p>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                    With our <strong>Family Trivia app</strong>, every family
                    member can choose their own favorite topics and difficulty
                    level. Your 6-year-old can answer questions about dinosaurs
                    at an easy level, while your teenager tackles questions
                    about video games at a harder difficulty. Everyone plays
                    together, everyone has fun, and everyone learns!
                  </p>

                  <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-6'>
                    <SignupButton className='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'>
                      <span className='truncate'>Download for iOS</span>
                    </SignupButton>
                    <SignupButton className='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'>
                      <span className='truncate'>Download for Android</span>
                    </SignupButton>
                  </div>

                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    ✓ Free trial available &nbsp;•&nbsp; ✓ No ads &nbsp;•&nbsp;
                    ✓ Safe for kids &nbsp;•&nbsp; ✓ Endless fun
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
                          interests
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
                          Never run out of fresh, unique trivia questions
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
                          Learning disguised as entertainment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tips for Playing Trivia with Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Tips for Playing Trivia with Kids
                </h2>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      1. Keep It Light and Fun
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Remember, the goal is to have fun together! Don't worry
                      too much about keeping score or getting every answer
                      right. Celebrate correct answers and use wrong answers as
                      learning opportunities.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      2. Adjust Difficulty to Age
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Make sure questions are age-appropriate for your children.
                      Younger kids need simpler questions, while older children
                      can handle more complex topics. This is where the Family
                      Trivia app really shines – it automatically adjusts
                      difficulty for each player!
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      3. Encourage Discussion
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      When someone answers a question, take a moment to discuss
                      the topic. "Did you know that cheetahs can run up to 70
                      mph?" These conversations turn trivia into real learning
                      experiences.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      4. Let Kids Choose Topics
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Kids are more engaged when they're answering questions
                      about things they love. Whether it's dinosaurs, sports, or
                      their favorite movies, letting them pick topics makes
                      trivia more exciting.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      5. Make It a Regular Activity
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Consider making trivia a weekly family tradition. Whether
                      it's Friday night trivia or Sunday afternoon questions,
                      regular play helps kids look forward to this quality time
                      together.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Start Your Trivia Adventure Today!
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Trivia questions are more than just a game – they're a gateway
                  to learning, bonding, and creating wonderful family memories.
                  Whether you're using the questions we've shared here or
                  downloading the Family Trivia app for an even richer
                  experience, you're giving your family the gift of quality time
                  together.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  So gather your family, pick your favorite questions, and let
                  the fun begin! And remember, with the Family Trivia app,
                  you'll never run out of exciting new questions to explore.
                  Download it today and make every moment a learning adventure!
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
