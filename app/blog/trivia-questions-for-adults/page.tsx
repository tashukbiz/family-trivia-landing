import SignupButton from '@/components/SignupButton';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'Trivia Questions for Adults - 20 Challenging Questions for Game Night! | Family Trivia',
  description:
    'Looking for trivia questions for adults? Discover 20 challenging trivia questions perfect for game night, gatherings, and parties. Test your knowledge with our Family Trivia app!',
  keywords: [
    'trivia questions',
    'trivia questions for adults',
    'Family Trivia app',
    'adult trivia',
    'game night ideas',
    'trivia games',
    'party games for adults',
  ],
};

export default function TriviaQuestionsForAdultsPage() {
  const triviaQuestions = [
    {
      q: 'Which year did the Berlin Wall fall?',
      a: '1989',
    },
    {
      q: 'What is the chemical symbol for gold?',
      a: 'Au',
    },
    {
      q: "Who wrote the novel '1984'?",
      a: 'George Orwell',
    },
    {
      q: 'What is the largest planet in our solar system?',
      a: 'Jupiter',
    },
    {
      q: 'Who painted the ceiling of the Sistine Chapel?',
      a: 'Michelangelo',
    },
    {
      q: 'Which country is known as the Land of the Rising Sun?',
      a: 'Japan',
    },
    {
      q: 'What is the smallest prime number?',
      a: '2',
    },
    {
      q: "Which U.S. state is nicknamed the 'Sunshine State'?",
      a: 'Florida',
    },
    {
      q: 'Who discovered penicillin?',
      a: 'Alexander Fleming',
    },
    {
      q: 'What is the capital city of Canada?',
      a: 'Ottawa',
    },
    {
      q: 'Which classic film features the quote, "Here\'s looking at you, kid"?',
      a: 'Casablanca',
    },
    {
      q: 'What is the hardest natural substance on Earth?',
      a: 'Diamond',
    },
    {
      q: 'Which Shakespeare play features the characters Oberon and Titania?',
      a: "A Midsummer Night's Dream",
    },
    {
      q: 'Who was the first woman to win a Nobel Prize?',
      a: 'Marie Curie',
    },
    {
      q: 'What is the square root of 144?',
      a: '12',
    },
    {
      q: 'Which artist had a hit with the song "Purple Rain"?',
      a: 'Prince',
    },
    {
      q: 'In computing, what does HTML stand for?',
      a: 'HyperText Markup Language',
    },
    {
      q: 'Which ancient civilization built Machu Picchu?',
      a: 'The Inca civilization',
    },
    {
      q: 'What organ is affected by hepatitis?',
      a: 'The liver',
    },
    {
      q: 'What is the boiling point of water in Celsius?',
      a: '100 degrees Celsius',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline:
          'Trivia Questions for Adults – 20 Challenging Questions for Game Night!',
        description:
          'Looking for trivia questions for adults? Discover 20 challenging trivia questions perfect for game night, gatherings, and parties. Test your knowledge with our Family Trivia app!',
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
          '@id': 'https://familytrivia.app/blog/trivia-questions-for-adults',
        },
        keywords: 'trivia questions for adults, adult trivia, trivia questions',
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
                  Trivia Questions for Adults – 20 Challenging Questions for
                  Game Night!
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Test your knowledge with engaging trivia questions perfect for
                  adults, parties, and game nights
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  There's something uniquely satisfying about a great trivia
                  night. Whether you're gathering with friends for game night,
                  hosting a dinner party, or looking for the perfect ice-breaker
                  activity, trivia questions for adults offer the ideal blend of
                  entertainment, friendly competition, and intellectual
                  stimulation.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Adults love trivia because it taps into our natural
                  competitive spirit while celebrating the diverse knowledge
                  we've accumulated over the years. From pop culture to world
                  history, science to literature, a well-rounded trivia game
                  brings people together and sparks engaging conversations that
                  last long after the final question.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  In this article, we've compiled 20 original trivia questions
                  specifically designed for adults. These questions span various
                  topics and difficulty levels, ensuring everyone in your group
                  gets a chance to shine. Plus, we'll share why trivia is such a
                  powerful tool for connection and how you can take your game
                  night to the next level.
                </p>
              </section>

              {/* Why Adults Love Trivia Games */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Adults Love Trivia Games
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Trivia games have exploded in popularity among adults, and
                  it's easy to see why. Beyond the fun and laughter, trivia
                  offers numerous benefits that make it a go-to activity for
                  gatherings of all kinds:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🧠</span> Mental Stimulation
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Trivia keeps your mind sharp by engaging memory recall,
                      critical thinking, and problem-solving skills. It's like a
                      workout for your brain that happens to be incredibly fun.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🎉</span> Social Connection
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Trivia games break the ice and get people talking. They
                      create shared experiences and friendly competition that
                      strengthens relationships and builds camaraderie.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🏆</span> Healthy Competition
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      There's something thrilling about testing your knowledge
                      against others. Trivia offers low-stakes competition that
                      brings out everyone's competitive spirit in a fun,
                      lighthearted way.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>📚</span> Continuous Learning
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Every trivia game exposes you to new facts and
                      perspectives. Even when you don't know the answer, you
                      learn something new, expanding your knowledge base
                      organically.
                    </p>
                  </div>
                </div>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200 mb-4'>
                    <strong>💡 Ready for Unlimited Trivia?</strong> While these
                    20 questions are a great start, imagine having access to
                    thousands of trivia questions across every topic imaginable!
                  </p>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Our{' '}
                    <a
                      href='#cta'
                      className='font-bold text-primary hover:underline'
                    >
                      Family Trivia app
                    </a>{' '}
                    uses AI to generate personalized trivia questions for every
                    player, no matter their age or interests. Whether you're
                    playing with adults only or mixing generations, everyone
                    gets questions perfectly matched to their level. It's the
                    ultimate solution for inclusive, engaging game nights!
                  </p>
                </div>
              </section>

              {/* 20 Trivia Questions for Adults */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  20 Trivia Questions for Adults
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Ready to put your knowledge to the test? Here are 20 carefully
                  crafted trivia questions for adults covering history, science,
                  pop culture, geography, and more. These questions range from
                  moderately challenging to genuinely difficult – perfect for an
                  engaging adult game night!
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

              {/* Benefits of Regular Trivia Play */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  The Benefits of Engaging with Trivia Games
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Playing trivia regularly offers more than just an evening's
                  entertainment. Research and anecdotal evidence suggest
                  numerous cognitive and social benefits:
                </p>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Improves Memory Retention
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Regular trivia play strengthens neural pathways associated
                      with memory and recall. The process of retrieving
                      information from long-term memory actually makes those
                      memories more accessible in the future – it's the "use it
                      or lose it" principle in action.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Reduces Stress and Anxiety
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Engaging in trivia provides a welcome mental break from
                      daily stressors. The focused attention required for trivia
                      creates a form of active meditation, while the social
                      aspect and laughter that accompanies game play naturally
                      reduces stress hormones.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Enhances Problem-Solving Skills
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      When you don't know an answer outright, trivia encourages
                      deductive reasoning and lateral thinking. You learn to
                      make connections between different pieces of information,
                      a skill that translates to real-world problem-solving.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Builds Confidence and Self-Esteem
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Successfully answering trivia questions provides immediate
                      positive reinforcement. Over time, this builds confidence
                      in your knowledge and abilities, which can positively
                      impact other areas of life.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Promotes Lifelong Learning
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Trivia cultivates curiosity and a love of learning. When
                      you encounter an interesting fact or topic during a game,
                      it often inspires you to learn more, fostering a mindset
                      of continuous education and intellectual growth.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className='mb-12'>
                <div
                  id='cta'
                  className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-8 text-center'
                >
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    🎮 Access Unlimited Trivia Questions!
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                    These 20 questions are just the tip of the iceberg! If you
                    enjoyed testing your knowledge with these trivia questions,
                    you'll love having access to{' '}
                    <strong>unlimited AI-generated trivia questions</strong> on
                    any topic you can imagine.
                  </p>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                    The <strong>Family Trivia app</strong> is perfect for adults
                    who love trivia, whether you're playing solo, competing with
                    friends, or hosting a multi-generational gathering. Choose
                    from hundreds of topics, select your preferred difficulty
                    level, and get questions that are perfectly calibrated to
                    challenge and entertain you. Never run out of fresh content
                    for your next game night, party, or casual trivia session!
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
                    ✓ Personalized difficulty &nbsp;•&nbsp; ✓ Endless topics
                  </p>
                </div>

                <div className='bg-white dark:bg-slate-800 rounded-lg p-8 my-8 border border-gray-200 dark:border-slate-700'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    Why Adults Choose Family Trivia:
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex items-start gap-3'>
                      <span className='text-green-500 text-2xl'>✓</span>
                      <div>
                        <strong className='text-gray-900 dark:text-white'>
                          Sophisticated AI Questions
                        </strong>
                        <p className='text-gray-700 dark:text-gray-300 text-sm'>
                          Questions that challenge adults while remaining
                          accessible and fun
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <span className='text-green-500 text-2xl'>✓</span>
                      <div>
                        <strong className='text-gray-900 dark:text-white'>
                          Hundreds of Topics
                        </strong>
                        <p className='text-gray-700 dark:text-gray-300 text-sm'>
                          From history and science to pop culture and sports –
                          find your expertise
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <span className='text-green-500 text-2xl'>✓</span>
                      <div>
                        <strong className='text-gray-900 dark:text-white'>
                          Perfect for Social Gatherings
                        </strong>
                        <p className='text-gray-700 dark:text-gray-300 text-sm'>
                          Single-device multiplayer makes hosting game night
                          effortless
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <span className='text-green-500 text-2xl'>✓</span>
                      <div>
                        <strong className='text-gray-900 dark:text-white'>
                          Multi-Generational Play
                        </strong>
                        <p className='text-gray-700 dark:text-gray-300 text-sm'>
                          Include kids, parents, and grandparents with
                          personalized difficulty
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tips for Hosting Adult Trivia Night */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Tips for Hosting an Epic Adult Trivia Night
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Want to take your trivia game to the next level? Here are some
                  proven strategies for hosting a memorable trivia night that
                  your friends will be talking about for weeks:
                </p>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      1. Set the Right Atmosphere
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Create a comfortable, inviting space with good lighting
                      and minimal distractions. Consider ambient music between
                      rounds, comfortable seating, and refreshments. The right
                      atmosphere turns a simple game into a memorable event.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      2. Mix Up the Categories
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Variety keeps everyone engaged. Include questions from
                      different categories – history, science, entertainment,
                      sports, literature, and current events. This ensures that
                      everyone has a chance to shine in their area of expertise.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      3. Keep Teams Balanced
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      If playing in teams, mix different knowledge strengths
                      together. The goal is friendly competition, not
                      domination. Balanced teams lead to closer games and more
                      excitement throughout the night.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      4. Use Technology to Your Advantage
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Apps like Family Trivia eliminate the work of sourcing
                      questions and keeping score. You can focus on being a
                      great host and participating in the fun, rather than
                      managing logistics. Plus, AI-generated questions mean
                      you'll never run out of fresh content.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      5. Encourage Friendly Competition
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Keep the mood light and fun. Celebrate great answers,
                      laugh at silly mistakes, and remind everyone that the goal
                      is entertainment first, winning second. The best trivia
                      nights are the ones where everyone leaves smiling,
                      regardless of the final score.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Ready for Your Next Trivia Challenge?
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Trivia questions for adults offer the perfect combination of
                  mental stimulation, social connection, and pure entertainment.
                  Whether you're looking to spice up game night, break the ice
                  at a party, or simply enjoy some intellectual competition with
                  friends, trivia delivers every time.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  The 20 questions we've shared here are just the beginning. For
                  endless trivia fun that never gets old, download the{' '}
                  <strong>Family Trivia app</strong> and discover thousands of
                  AI-generated questions across every topic imaginable. With
                  personalized difficulty levels and unlimited content, you'll
                  always have fresh questions ready for your next gathering.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Don't let another game night pass with the same old
                  activities. Download Family Trivia today and transform your
                  next gathering into an unforgettable experience. Your friends
                  will thank you, and you might just learn something new along
                  the way!
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
