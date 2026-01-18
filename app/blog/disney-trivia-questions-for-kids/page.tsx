import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'Disney Trivia Questions for Kids (With Answers): 50 Magical Questions | Family Trivia',
  description:
    'Looking for Disney trivia questions for kids? Here are 50 magical Disney trivia questions covering Pixar, princesses, villains, and classic movies. Perfect for Disney fans!',
  keywords: [
    'disney trivia questions for kids',
    'disney trivia for kids',
    'disney trivia questions',
    'disney trivia',
    'kids disney trivia',
    'Family Trivia app',
    'disney games for kids',
  ],
};

export default function DisneyTriviaQuestionsForKidsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline:
          'Disney Trivia Questions for Kids (With Answers): 50 Magical Questions',
        description:
          'Looking for Disney trivia questions for kids? Here are 50 magical Disney trivia questions covering Pixar, princesses, villains, and classic movies. Perfect for Disney fans!',
        image: 'https://familytrivia.app/og-image.png',
        datePublished: '2024-12-17T00:00:00Z',
        dateModified: '2024-12-17T00:00:00Z',
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
          '@id':
            'https://familytrivia.app/blog/disney-trivia-questions-for-kids',
        },
        keywords:
          'disney trivia questions for kids, disney trivia for kids, disney trivia questions, disney trivia',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What Disney movie should kids watch first?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "For young children, start with classics like The Lion King, Finding Nemo, or Moana. These movies have engaging stories, lovable characters, and positive messages that resonate with kids. For slightly older children, Frozen, Toy Story, or Encanto are excellent choices. The best first Disney movie depends on your child's age and interests!",
            },
          },
          {
            '@type': 'Question',
            name: 'What are the easiest Disney trivia questions for young kids?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For younger children (ages 4-7), stick to basic character identification and simple plot points from popular movies. Questions like "What color is Elsa\'s dress?" or "What is the name of Mickey\'s dog?" work perfectly. Visual questions about character appearances, animal types, and famous songs are great for this age group.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I make Disney trivia more fun?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Add a Disney soundtrack in the background, award small Disney-themed prizes, or let kids dress up as their favorite characters during the game. You can also show short clips from Disney movies after revealing answers, or use our Family Trivia app which adds exciting features like personalized questions, fair difficulty levels, and engaging gameplay that keeps kids entertained!',
            },
          },
          {
            '@type': 'Question',
            name: "What's the best Disney trivia for a birthday party?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For birthday parties, mix easy and medium-difficulty questions so all kids can participate successfully. Include questions about popular current movies (like Encanto or Frozen 2) alongside classics. Team-based trivia works great for parties, and you can theme teams around different Disney movies. Consider using multiple choice options to make it easier and keep the game moving quickly!',
            },
          },
          {
            '@type': 'Question',
            name: 'Are Pixar movies considered Disney trivia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes! Pixar is owned by Disney, so Pixar movies like Toy Story, Finding Nemo, The Incredibles, and Coco are all part of the Disney family. Many Disney trivia games and questions include Pixar content because these movies are beloved by the same audiences and share Disney's commitment to quality storytelling and memorable characters.",
            },
          },
        ],
      },
    ],
  };

  const disneyPrincessQuestions = [
    {
      q: 'What does Rapunzel use as a weapon in Tangled?',
      a: 'A frying pan',
    },
    {
      q: "What color is Belle's iconic ball gown in Beauty and the Beast?",
      a: 'Yellow (gold)',
    },
    {
      q: "What is the name of Ariel's fish friend in The Little Mermaid?",
      a: 'Flounder',
    },
    {
      q: 'Which Disney princess has a pet tiger named Rajah?',
      a: 'Jasmine',
    },
    {
      q: 'What does Elsa create when she sings "Let It Go"?',
      a: 'An ice palace',
    },
    {
      q: "What is the name of Moana's pet rooster?",
      a: 'Heihei',
    },
    {
      q: 'Which princess loses her glass slipper at midnight?',
      a: 'Cinderella',
    },
    {
      q: "What is Mulan's dragon companion named?",
      a: 'Mushu',
    },
    {
      q: "What color is Tiana's dress when she becomes a princess?",
      a: 'Green',
    },
    {
      q: "Which Disney princess is awakened by true love's kiss after eating a poisoned apple?",
      a: 'Snow White',
    },
  ] as const;

  const pixarQuestions = [
    {
      q: 'What is the name of the cowboy in Toy Story?',
      a: 'Woody',
    },
    {
      q: 'What type of fish is Nemo in Finding Nemo?',
      a: 'A clownfish',
    },
    {
      q: 'What is the name of the superhero family in The Incredibles?',
      a: 'The Parr family',
    },
    {
      q: 'What is the name of the rat who loves to cook in Ratatouille?',
      a: 'Remy',
    },
    {
      q: 'In Monsters, Inc., what powers the city of Monstropolis?',
      a: "Children's screams (later, their laughter)",
    },
    {
      q: 'What is the name of the old man in Up who ties balloons to his house?',
      a: 'Carl Fredricksen',
    },
    {
      q: 'In Inside Out, what color is the character Joy?',
      a: 'Yellow',
    },
    {
      q: "What is Lightning McQueen's racing number in Cars?",
      a: '95',
    },
    {
      q: 'What instrument does Miguel love to play in Coco?',
      a: 'Guitar',
    },
    {
      q: 'What does WALL-E collect and organize on Earth?',
      a: 'Trash (garbage)',
    },
  ] as const;

  const disneyVillainsQuestions = [
    {
      q: 'What is the name of the villain in The Little Mermaid?',
      a: 'Ursula',
    },
    {
      q: 'Who is the villain in Sleeping Beauty?',
      a: 'Maleficent',
    },
    {
      q: "What is the name of Simba's evil uncle in The Lion King?",
      a: 'Scar',
    },
    {
      q: 'Who tries to steal the puppies in 101 Dalmatians?',
      a: 'Cruella de Vil',
    },
    {
      q: 'What is the name of the evil queen in Snow White?',
      a: 'The Evil Queen (or Queen Grimhilde)',
    },
    {
      q: 'Who is the villain in Aladdin?',
      a: 'Jafar',
    },
    {
      q: 'What is the name of the bad guy in Toy Story 3 who smells like strawberries?',
      a: "Lots-o'-Huggin' Bear (Lotso)",
    },
    {
      q: "Who is the sea witch's favorite phrase in The Little Mermaid?",
      a: '"Poor unfortunate souls"',
    },
    {
      q: 'What does Gaston want from Belle in Beauty and the Beast?',
      a: 'To marry him',
    },
    {
      q: 'Who kidnaps Rapunzel as a baby in Tangled?',
      a: 'Mother Gothel',
    },
  ] as const;

  const classicDisneyQuestions = [
    {
      q: "What is the name of Mickey Mouse's dog?",
      a: 'Pluto',
    },
    {
      q: 'What does Hakuna Matata mean in The Lion King?',
      a: 'No worries',
    },
    {
      q: "What are the names of Cinderella's stepsisters?",
      a: 'Anastasia and Drizella',
    },
    {
      q: "What is the name of Aladdin's monkey?",
      a: 'Abu',
    },
    {
      q: 'In Peter Pan, what is Captain Hook afraid of?',
      a: 'A crocodile (the tick-tock crocodile)',
    },
    {
      q: "What does the Fairy Godmother turn into Cinderella's carriage?",
      a: 'A pumpkin',
    },
    {
      q: 'How many dwarfs does Snow White live with?',
      a: 'Seven',
    },
    {
      q: "What is the name of Simba's father in The Lion King?",
      a: 'Mufasa',
    },
    {
      q: 'In The Jungle Book, what kind of animal is Baloo?',
      a: 'A bear',
    },
    {
      q: 'What are the three wishes Genie grants Aladdin?',
      a: 'To be a prince, to be saved from drowning, and to free Genie',
    },
  ] as const;

  const modernDisneyQuestions = [
    {
      q: "What is the name of Anna and Elsa's kingdom in Frozen?",
      a: 'Arendelle',
    },
    {
      q: 'What magical gift does Mirabel NOT receive in Encanto?',
      a: "She doesn't receive a gift",
    },
    {
      q: "What does Moana's grandmother turn into after she passes away?",
      a: 'A manta ray',
    },
    {
      q: "In Zootopia, what is Judy Hopps' job?",
      a: 'Police officer',
    },
    {
      q: 'What is the name of the summer snowman in Frozen?',
      a: 'Olaf',
    },
    {
      q: 'What does Bruno see in Encanto?',
      a: 'The future (visions)',
    },
    {
      q: 'What is the name of the giant robot in Big Hero 6?',
      a: 'Baymax',
    },
    {
      q: 'In Frozen 2, what are the spirits Elsa encounters?',
      a: 'Earth, Water, Fire, and Air (Wind)',
    },
    {
      q: 'What is the name of the bunny in Zootopia who becomes a police officer?',
      a: 'Judy Hopps',
    },
    {
      q: 'What is the name of the chameleon in Tangled?',
      a: 'Pascal',
    },
  ] as const;

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
                  Disney Trivia Questions for Kids (With Answers): 50 Magical
                  Questions
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Test your Disney knowledge with 50 magical trivia questions
                  covering princesses, Pixar, villains, and classic movies
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Are you ready for some magical fun? Disney trivia questions
                  for kids are the perfect way to bring the enchantment of
                  Disney into your home! Whether your little ones dream of being
                  princesses, love rooting for superheroes, or can't stop
                  singing songs from Frozen and Encanto, Disney trivia games
                  capture their imagination while creating wonderful family
                  memories.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  From classic Disney movies like The Lion King and Aladdin to
                  beloved Pixar adventures like Toy Story and Finding Nemo,
                  Disney has created characters and stories that kids around the
                  world adore. Disney trivia for kids taps into this love and
                  transforms it into an exciting, educational activity that
                  everyone can enjoy together.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  In this collection, we've gathered 50 Disney trivia questions
                  for kids that cover the entire magical world of Disney –
                  princesses, heroes, villains, Pixar favorites, and modern
                  classics. Whether you're planning a Disney-themed birthday
                  party, looking for car ride entertainment, or just want to
                  test your family's Disney knowledge, these questions are
                  perfect for Disney fans of all ages!
                </p>
              </section>

              {/* Why Kids Love Disney Trivia */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Kids Love Disney Trivia
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Disney trivia isn't just another game – it's a celebration of
                  the stories and characters kids already love! Here's why
                  Disney trivia questions are so special for children:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>✨</span> Connects to Beloved
                      Characters
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Kids light up when they see questions about Elsa, Moana,
                      Buzz Lightyear, or Simba! Disney trivia lets them show off
                      their knowledge about characters they know and love,
                      making them feel like true Disney experts.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🎬</span> Celebrates Favorite
                      Movies
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Every Disney question brings back happy memories of
                      watching favorite movies together. It's like reliving the
                      magic of Disney storytelling while testing your memory!
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>🏰</span> Sparks Imagination
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Disney trivia encourages kids to think about magical
                      worlds, heroic adventures, and fantastical stories. It
                      keeps their imagination active and engaged while having
                      fun!
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>👨‍👩‍👧‍👦</span> Perfect for All Ages
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      From toddlers who just discovered Mickey Mouse to teens
                      who grew up with Pixar movies, Disney has something for
                      everyone. Disney trivia brings multiple generations
                      together!
                    </p>
                  </div>
                </div>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200 mb-4'>
                    <strong>💡 Pro Tip:</strong> Want endless Disney trivia
                    questions? Our{' '}
                    <a
                      href='#cta'
                      className='font-bold text-primary hover:underline'
                    >
                      Family Trivia app
                    </a>{' '}
                    includes unlimited Disney-themed questions plus hundreds of
                    other topics your kids will love!
                  </p>
                  <p className='text-gray-700 dark:text-gray-300'>
                    With AI-generated questions tailored to each player's age
                    and difficulty level, everyone from your Disney Princess fan
                    to your Marvel superhero enthusiast gets questions that are
                    just right for them. Make every family game night magical
                    with Family Trivia!
                  </p>
                </div>
              </section>

              {/* 50 Disney Trivia Questions */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  50 Disney Trivia Questions for Kids (With Answers)
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Ready to test your Disney knowledge? We've organized these 50
                  magical questions into five fun categories covering the entire
                  Disney universe. See how many you can get right!
                </p>

                {/* Section 1: Disney Princesses */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  🏰 Disney Princesses
                </h3>

                <div className='space-y-6 mb-10'>
                  {disneyPrincessQuestions.map((item, index) => (
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

                {/* Section 2: Pixar Movies */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  🚀 Pixar Movies
                </h3>

                <div className='space-y-6 mb-10'>
                  {pixarQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index + disneyPrincessQuestions.length + 1}
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

                {/* Section 3: Disney Villains */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  😈 Disney Villains
                </h3>

                <div className='space-y-6 mb-10'>
                  {disneyVillainsQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              disneyPrincessQuestions.length +
                              pixarQuestions.length +
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
                <div
                  id='cta'
                  className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-12 text-center'
                >
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    ✨ Love Disney Trivia? Get Unlimited Questions!
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                    These 50 Disney questions are just the beginning! With our{' '}
                    <strong>Family Trivia app</strong>, you'll unlock unlimited
                    Disney trivia questions covering every movie, character, and
                    magical moment your family loves.
                  </p>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                    Plus, explore hundreds of other fun topics – from Marvel
                    superheroes to Star Wars, animals, science, and more! Every
                    player gets personalized questions at their perfect
                    difficulty level.
                  </p>

                  <DownloadButtons
                    containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center mb-6'
                    buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'
                  />

                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    ✓ Free trial available &nbsp;•&nbsp; ✓ No ads &nbsp;•&nbsp;
                    ✓ Safe for kids &nbsp;•&nbsp; ✓ Endless Disney fun
                  </p>
                </div>

                {/* Section 4: Classic Disney */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  🎭 Classic Disney
                </h3>

                <div className='space-y-6 mb-10'>
                  {classicDisneyQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              disneyPrincessQuestions.length +
                              pixarQuestions.length +
                              disneyVillainsQuestions.length +
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

                {/* Section 5: Modern Disney */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  ⭐ Modern Disney
                </h3>

                <div className='space-y-6 mb-10'>
                  {modernDisneyQuestions.map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index +
                              disneyPrincessQuestions.length +
                              pixarQuestions.length +
                              disneyVillainsQuestions.length +
                              classicDisneyQuestions.length +
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

              {/* Disney Trivia FAQs */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Disney Trivia FAQs
                </h2>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What Disney movie should kids watch first?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      For young children, start with classics like The Lion
                      King, Finding Nemo, or Moana. These movies have engaging
                      stories, lovable characters, and positive messages that
                      resonate with kids. For slightly older children, Frozen,
                      Toy Story, or Encanto are excellent choices. The best
                      first Disney movie depends on your child's age and
                      interests!
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What are the easiest Disney trivia questions for young
                      kids?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      For younger children (ages 4-7), stick to basic character
                      identification and simple plot points from popular movies.
                      Questions like "What color is Elsa's dress?" or "What is
                      the name of Mickey's dog?" work perfectly. Visual
                      questions about character appearances, animal types, and
                      famous songs are great for this age group.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      How can I make Disney trivia more fun?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Add a Disney soundtrack in the background, award small
                      Disney-themed prizes, or let kids dress up as their
                      favorite characters during the game. You can also show
                      short clips from Disney movies after revealing answers, or
                      use our Family Trivia app which adds exciting features
                      like personalized questions, fair difficulty levels, and
                      engaging gameplay that keeps kids entertained!
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What's the best Disney trivia for a birthday party?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      For birthday parties, mix easy and medium-difficulty
                      questions so all kids can participate successfully.
                      Include questions about popular current movies (like
                      Encanto or Frozen 2) alongside classics. Team-based trivia
                      works great for parties, and you can theme teams around
                      different Disney movies. Consider using multiple choice
                      options to make it easier and keep the game moving
                      quickly!
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      Are Pixar movies considered Disney trivia?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Yes! Pixar is owned by Disney, so Pixar movies like Toy
                      Story, Finding Nemo, The Incredibles, and Coco are all
                      part of the Disney family. Many Disney trivia games and
                      questions include Pixar content because these movies are
                      beloved by the same audiences and share Disney's
                      commitment to quality storytelling and memorable
                      characters.
                    </p>
                  </div>
                </div>
              </section>

              {/* More Trivia Resources */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  More Fun Trivia for Kids
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  If your kids loved these Disney trivia questions, check out
                  our other trivia collections perfect for young minds:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <Link
                    href='/blog/trivia-questions-for-kids'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                      General Trivia Questions for Kids
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      20 fun and educational questions covering animals,
                      science, geography, and more!
                    </p>
                  </Link>

                  <Link
                    href='/blog/kids-trivia-questions'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                      Kids Trivia Questions
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Discover more age-appropriate trivia questions that kids
                      love!
                    </p>
                  </Link>

                  <Link
                    href='/blog/fun-trivia-questions-for-kids'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                      Fun Trivia Questions for Kids
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Hilarious and entertaining trivia that will have the whole
                      family laughing!
                    </p>
                  </Link>

                  <a
                    href='https://familytrivia.app/'
                    className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6 border-2 border-primary hover:bg-primary/20 transition-colors'
                  >
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                      Family Trivia App
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Get unlimited trivia questions on Disney and hundreds of
                      other topics!
                    </p>
                  </a>
                </div>
              </section>

              {/* Conclusion */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Bring Disney Magic Home Today!
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Disney trivia questions for kids are more than just a game –
                  they're a way to celebrate the magical stories and beloved
                  characters that bring joy to millions of families worldwide.
                  Whether you're testing knowledge about classic Disney
                  princesses, Pixar heroes, infamous villains, or modern
                  favorites, Disney trivia creates special moments of laughter,
                  learning, and family bonding.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  These 50 Disney trivia questions are perfect for getting
                  started, but why stop there? With the Family Trivia app, you
                  can access unlimited Disney questions plus hundreds of other
                  exciting topics. Every family member gets questions tailored
                  to their age and interests, making game night fair and fun for
                  everyone. Download Family Trivia today and let the magic
                  begin!
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
