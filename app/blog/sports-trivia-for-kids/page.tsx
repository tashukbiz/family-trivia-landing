import SignupButton from '@/components/SignupButton';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'Sports Trivia for Kids: 50 Fun Questions (With Answers) | Family Trivia',
  description:
    'Looking for sports trivia for kids? Here are 50 fun sports trivia questions covering soccer, basketball, Olympics, and more. Perfect for young sports fans!',
  keywords: [
    'sports trivia for kids',
    'sports trivia questions',
    'sports trivia questions and answers',
    'kids sports trivia',
    'Family Trivia app',
    'sports games for kids',
  ],
};

export default function SportsTriviaForKidsPage() {
  const soccerQuestions = [
    {
      q: 'What is the most popular sport in the world?',
      a: 'Soccer (also called football)',
    },
    {
      q: 'How many players are on a soccer team on the field at one time?',
      a: '11 players',
    },
    {
      q: 'What is it called when a player scores three goals in one game?',
      a: 'A hat trick',
    },
    {
      q: 'Which country has won the most FIFA World Cup titles?',
      a: 'Brazil (with 5 World Cup wins)',
    },
    {
      q: 'What is the name of the position that guards the goal?',
      a: 'Goalkeeper (or goalie)',
    },
    {
      q: "Which famous soccer player is from Argentina and has won multiple Ballon d'Or awards?",
      a: 'Lionel Messi',
    },
    {
      q: 'How long is a professional soccer match?',
      a: '90 minutes (two 45-minute halves)',
    },
    {
      q: 'What color card does a referee show for a serious foul?',
      a: 'Red card',
    },
    {
      q: 'Which country hosted the first FIFA World Cup in 1930?',
      a: 'Uruguay',
    },
    {
      q: 'What is the shape of a soccer ball?',
      a: 'Spherical (a round ball with pentagon and hexagon patterns)',
    },
  ] as const;

  const basketballQuestions = [
    {
      q: 'How many points is a basketball shot from beyond the arc worth?',
      a: 'Three points',
    },
    {
      q: 'Which NBA team is LeBron James famous for playing with early in his career?',
      a: 'Cleveland Cavaliers',
    },
    {
      q: 'How many players from each team are on the basketball court at once?',
      a: '5 players',
    },
    {
      q: 'What is the name of the circular hoop that players shoot the ball through?',
      a: 'The basket (or rim)',
    },
    {
      q: 'Which legendary basketball player wore the number 23 for the Chicago Bulls?',
      a: 'Michael Jordan',
    },
    {
      q: 'How many quarters are in a professional NBA game?',
      a: 'Four quarters',
    },
    {
      q: 'What violation occurs when a player takes too many steps without dribbling?',
      a: 'Traveling',
    },
    {
      q: 'How high is a regulation basketball hoop from the ground?',
      a: '10 feet (or 3.05 meters)',
    },
    {
      q: 'Which country invented basketball?',
      a: 'United States (invented by James Naismith)',
    },
    {
      q: 'What does NBA stand for?',
      a: 'National Basketball Association',
    },
  ] as const;

  const olympicsQuestions = [
    {
      q: 'How often are the Summer Olympic Games held?',
      a: 'Every 4 years',
    },
    {
      q: 'What are the five colors of the Olympic rings?',
      a: 'Blue, yellow, black, green, and red',
    },
    {
      q: 'Which athlete has won the most Olympic gold medals in history?',
      a: 'Michael Phelps (swimmer from USA with 23 gold medals)',
    },
    {
      q: 'In which sport would you perform a vault, floor routine, or balance beam?',
      a: 'Gymnastics',
    },
    {
      q: 'What is the fastest track event in the Olympics?',
      a: 'The 100-meter sprint',
    },
    {
      q: 'Which country traditionally enters first in the Olympic opening ceremony?',
      a: 'Greece',
    },
    {
      q: 'What type of race combines running, swimming, and cycling?',
      a: 'Triathlon',
    },
    {
      q: 'Which Jamaican sprinter is known as the fastest man in the world?',
      a: 'Usain Bolt',
    },
    {
      q: 'In the Winter Olympics, which sport involves sliding stones on ice toward a target?',
      a: 'Curling',
    },
    {
      q: 'What do athletes receive for first, second, and third place at the Olympics?',
      a: 'Gold, silver, and bronze medals',
    },
  ] as const;

  const otherSportsQuestions = [
    {
      q: 'How many bases are there on a baseball diamond?',
      a: 'Four bases (first, second, third, and home plate)',
    },
    {
      q: 'In American football, how many points is a touchdown worth?',
      a: '6 points',
    },
    {
      q: 'What sport does Serena Williams play?',
      a: 'Tennis',
    },
    {
      q: 'In baseball, what is it called when a batter hits the ball out of the park?',
      a: 'A home run',
    },
    {
      q: 'How many holes are played in a standard round of golf?',
      a: '18 holes',
    },
    {
      q: 'What is the championship game of the NFL called?',
      a: 'The Super Bowl',
    },
    {
      q: 'In tennis, what is the score when both players have 40 points?',
      a: 'Deuce',
    },
    {
      q: 'Which swimmer has won the most Olympic medals of all time?',
      a: 'Michael Phelps',
    },
    {
      q: 'In ice hockey, what is the disc that players hit called?',
      a: 'A puck',
    },
    {
      q: 'What sport is played at Wimbledon?',
      a: 'Tennis',
    },
  ] as const;

  const funSportsFactsQuestions = [
    {
      q: 'Which sport is known as "the beautiful game"?',
      a: 'Soccer (or football)',
    },
    {
      q: 'How many innings are in a standard baseball game?',
      a: '9 innings',
    },
    {
      q: 'What is the only sport to have been played on the moon?',
      a: 'Golf (astronaut Alan Shepard hit golf balls on the moon)',
    },
    {
      q: 'In which sport would you do a slam dunk?',
      a: 'Basketball',
    },
    {
      q: 'What color belt is the highest rank in karate?',
      a: 'Black belt',
    },
    {
      q: 'How many players are on a volleyball team on the court?',
      a: '6 players',
    },
    {
      q: 'Which boxer was known as "The Greatest" and "The People\'s Champion"?',
      a: 'Muhammad Ali',
    },
    {
      q: 'In bowling, what is it called when you knock down all 10 pins with one ball?',
      a: 'A strike',
    },
    {
      q: 'What sport uses terms like "birdie," "eagle," and "par"?',
      a: 'Golf',
    },
    {
      q: 'Which sport is Tiger Woods famous for playing?',
      a: 'Golf',
    },
  ] as const;

  const allQuestions = [
    ...soccerQuestions,
    ...basketballQuestions,
    ...olympicsQuestions,
    ...otherSportsQuestions,
    ...funSportsFactsQuestions,
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Sports Trivia for Kids: 50 Fun Questions (With Answers)',
        description:
          'Looking for sports trivia for kids? Here are 50 fun sports trivia questions covering soccer, basketball, Olympics, and more. Perfect for young sports fans!',
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
          '@id': 'https://familytrivia.app/blog/sports-trivia-for-kids',
        },
        keywords:
          'sports trivia for kids, sports trivia questions, sports trivia questions and answers, kids sports trivia',
      },
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
                  Sports Trivia for Kids: 50 Fun Questions (With Answers)
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Discover exciting sports trivia questions perfect for young
                  sports fans, covering soccer, basketball, Olympics, and more!
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Are you ready to test your sports knowledge? Sports trivia for
                  kids is an exciting way to learn about famous athletes, iconic
                  moments, and fascinating facts from the world of sports.
                  Whether your child is a budding soccer star, basketball
                  enthusiast, or simply curious about the Olympics, these trivia
                  questions will spark their interest and get them talking about
                  their favorite sports!
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Sports trivia isn't just fun – it's a fantastic way to
                  encourage kids to learn about different sports, develop an
                  appreciation for athletic achievement, and maybe even inspire
                  them to try a new sport themselves. From the soccer fields to
                  the basketball courts, from Olympic stadiums to baseball
                  diamonds, we've gathered 50 kid-friendly questions that cover
                  a wide range of sports and interesting facts.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Whether you're planning a sports-themed party, looking for car
                  ride entertainment, or just want to make family game night
                  more exciting, these sports trivia questions for kids are
                  perfect for young athletes and sports fans of all levels!
                </p>
              </section>

              {/* Why Sports Trivia Is Great for Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Sports Trivia Is Great for Kids
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Sports trivia offers unique benefits that go beyond just
                  having fun. Here's why sports trivia questions are perfect for
                  kids:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>⚽</span> Encourages Physical
                      Activity
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Learning about sports heroes and amazing athletic feats
                      can inspire kids to get active themselves. Sports trivia
                      can spark interest in trying new sports and staying
                      physically fit.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🌍</span> Teaches Global
                      Awareness
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Sports are universal! Learning about international events
                      like the Olympics and World Cup helps kids understand
                      different cultures and countries around the world.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🏆</span> Builds Sportsmanship
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Through sports trivia, kids learn about fair play,
                      teamwork, and perseverance. They discover stories of
                      athletes who overcame challenges to achieve greatness.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🧠</span> Develops Knowledge
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Sports trivia helps kids learn about history, geography,
                      math (scores and statistics!), and science (how the body
                      works during exercise). It's education in disguise!
                    </p>
                  </div>
                </div>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200 mb-4'>
                    <strong>💡 Pro Tip:</strong> Want unlimited sports trivia
                    questions? Our{' '}
                    <a
                      href='https://familytrivia.app/'
                      className='font-bold text-primary hover:underline'
                    >
                      Family Trivia app
                    </a>{' '}
                    offers thousands of sports questions across all difficulty
                    levels!
                  </p>
                  <p className='text-gray-700 dark:text-gray-300'>
                    With AI-generated questions tailored to each player's age
                    and interests, your sports-loving kids can enjoy endless
                    trivia about their favorite teams, athletes, and sports.
                    Plus, the whole family can play together with personalized
                    difficulty levels for everyone!
                  </p>
                </div>
              </section>

              {/* 50 Sports Trivia Questions for Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  50 Sports Trivia Questions for Kids (With Answers)
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Ready to put your sports knowledge to the test? We've
                  organized these 50 questions into five exciting categories
                  covering different sports. Click "Show Answer" to reveal each
                  answer!
                </p>

                {/* Section 1: Soccer/Football */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  ⚽ Soccer/Football Trivia
                </h3>

                <div className='space-y-6 mb-8'>
                  {soccerQuestions.map((item, index) => (
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

                {/* Section 2: Basketball */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🏀 Basketball Trivia
                </h3>

                <div className='space-y-6 mb-8'>
                  {basketballQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index + soccerQuestions.length + 1}
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

                {/* Section 3: Olympics & International Sports */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🏅 Olympics & International Sports Trivia
                </h3>

                <div className='space-y-6 mb-8'>
                  {olympicsQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              soccerQuestions.length +
                              basketballQuestions.length +
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

                {/* Mid-article CTA */}
                <div
                  id='cta'
                  className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-12 text-center'
                >
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    🎮 Love Sports Trivia?
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                    These 50 questions are just the beginning! With the{' '}
                    <strong>Family Trivia app</strong>, you get unlimited sports
                    trivia covering hundreds of athletes, sports, and amazing
                    moments from sports history.
                  </p>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                    Whether your kids love soccer, basketball, gymnastics, or
                    any other sport, they'll find endless questions perfectly
                    matched to their age and interest level. Plus, compete with
                    the whole family in multiplayer mode!
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
                    ✓ Unlimited sports questions &nbsp;•&nbsp; ✓ All ages
                    welcome &nbsp;•&nbsp; ✓ Safe for kids &nbsp;•&nbsp; ✓
                    Multiplayer fun
                  </p>
                </div>

                {/* Section 4: Baseball, American Football & Other Sports */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  ⚾ Baseball, Football & Other Sports Trivia
                </h3>

                <div className='space-y-6 mb-8'>
                  {otherSportsQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              soccerQuestions.length +
                              basketballQuestions.length +
                              olympicsQuestions.length +
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

                {/* Section 5: Fun Sports Facts & Records */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8'>
                  🎯 Fun Sports Facts & Records Trivia
                </h3>

                <div className='space-y-6 mb-8'>
                  {funSportsFactsQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              soccerQuestions.length +
                              basketballQuestions.length +
                              olympicsQuestions.length +
                              otherSportsQuestions.length +
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

              {/* FAQ Section */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Sports Trivia FAQs
                </h2>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What are easy sports trivia questions for kids?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Easy sports trivia questions for kids focus on basic
                      rules, famous athletes, and well-known sports. Examples
                      include asking how many players are on a soccer team, what
                      color card means a serious foul, or naming famous athletes
                      like Lionel Messi or LeBron James. Start with questions
                      about sports your child is familiar with, then gradually
                      introduce new sports to broaden their knowledge.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What sports should kids know about?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Kids benefit from learning about a variety of sports
                      including soccer (the world's most popular sport),
                      basketball, baseball, tennis, swimming, and track and
                      field. The Olympics are also great for introducing kids to
                      lesser-known sports like gymnastics, skiing, and curling.
                      Exposure to different sports helps children find
                      activities they might enjoy and appreciate athletic
                      achievement across various disciplines.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      How do you make sports trivia fun for kids who don't play
                      sports?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Focus on interesting facts and stories rather than complex
                      rules or statistics. Share fun trivia like "golf was
                      played on the moon" or talk about inspiring athletes who
                      overcame challenges. Use visual aids, videos of amazing
                      sports moments, and keep questions light and entertaining.
                      The{' '}
                      <Link
                        href='/blog/trivia-questions-for-kids'
                        className='text-primary hover:underline'
                      >
                        Family Trivia app
                      </Link>{' '}
                      mixes sports questions with other topics, so non-sports
                      fans can still participate and enjoy the game.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What are good sports trivia topics for elementary kids?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Great topics include basic rules of popular sports
                      (soccer, basketball, baseball), famous athletes kids
                      recognize (Michael Jordan, Serena Williams, Usain Bolt),
                      Olympic sports and medals, fun sports records and
                      achievements, and interesting facts about different
                      sports. Avoid overly technical statistics or niche
                      professional sports details. Focus on questions that teach
                      something new while being accessible to kids at different
                      knowledge levels.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Can sports trivia help kids get more active?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Absolutely! Learning about amazing athletes and exciting
                      sports moments can inspire kids to try new activities.
                      After playing sports trivia, consider taking the
                      conversation outside – shoot some baskets, kick a soccer
                      ball, or try a new sport you learned about. Sports trivia
                      can spark curiosity and motivation to get moving. You can
                      also explore more{' '}
                      <Link
                        href='/blog/fun-trivia-questions-for-kids'
                        className='text-primary hover:underline'
                      >
                        fun trivia questions
                      </Link>{' '}
                      on other topics to keep learning exciting!
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Start Your Sports Trivia Adventure!
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Sports trivia for kids is more than just answering questions –
                  it's about celebrating athletic achievement, learning about
                  different cultures through international sports, and maybe
                  even discovering a new favorite sport to play or watch.
                  Whether your child is already a sports enthusiast or just
                  beginning to explore the world of athletics, these 50
                  questions provide a fun starting point.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Remember, the goal is to have fun and learn together! Don't
                  worry if some questions are too challenging – use them as
                  opportunities to explore new topics and athletes. You might be
                  surprised at what your kids already know, and they'll love
                  showing off their sports knowledge!
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Want even more sports trivia questions and answers? Check out
                  our{' '}
                  <Link
                    href='/blog/kids-trivia-questions'
                    className='text-primary hover:underline'
                  >
                    kids trivia questions
                  </Link>{' '}
                  for more topics, or download the Family Trivia app for
                  unlimited sports trivia covering every major sport, athlete,
                  and amazing moment in sports history. From soccer to swimming,
                  basketball to baseball, we've got questions that will
                  challenge and delight sports fans of all ages!
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
