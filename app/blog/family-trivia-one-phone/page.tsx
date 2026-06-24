import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '@/lib/seo';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = buildBlogArticleMetadata({
  title: 'How to Run Family Trivia Night With Just One Phone | Family Trivia',
  description:
    'Run a whole family trivia night on a single phone — pass it around, each player picks their own topic and difficulty, and AI keeps questions fresh. No accounts, no downloads for everyone else.',
  path: '/blog/family-trivia-one-phone',
  keywords: [
    'family trivia one phone',
    'pass and play trivia',
    'trivia game one device',
    'family trivia night',
    'trivia game no accounts',
    'one phone party game',
    'pass the phone trivia',
    'shared device trivia',
  ],
});

export default function FamilyTriviaOnePhonePage() {
  const steps = [
    {
      title: 'Open Family Trivia on one phone',
      body: 'Only one person needs the app installed. Open it on whatever phone or tablet is closest — that single device runs the whole night.',
    },
    {
      title: 'Add everyone as players or teams',
      body: 'Type in each player or team name (1 to 10 of them). Solo, couples, or the whole extended family all work on the same screen.',
    },
    {
      title: 'Let each player pick their own topic and difficulty',
      body: 'This is the part that keeps it fair: a 7-year-old can choose easy animal questions while an adult takes on hard history. Everyone plays the same game, tuned to their level.',
    },
    {
      title: 'Choose how many rounds you want',
      body: 'Set anywhere from 3 to 15 rounds. Five to eight is a comfortable first session — short enough to keep momentum, long enough for a comeback.',
    },
    {
      title: 'Pass the phone around (or read it aloud)',
      body: 'On each turn, hand the device to the next player, or read the question to them if they are across the table. The app shows whose turn it is and which round you are on, so the phone keeps moving without anyone losing track.',
    },
    {
      title: 'Let the AI keep questions fresh',
      body: 'Questions are AI-generated for each game, so you are not grinding through the same recycled deck every week. Play again tomorrow and the round feels new.',
    },
  ] as const;

  const topicIdeas = [
    {
      text: 'Disney trivia',
      href: '/blog/disney-trivia-questions',
      blurb: 'An easy crowd-pleaser that kids and adults can both play.',
    },
    {
      text: 'Trivia questions for kids',
      href: '/blog/trivia-questions-for-kids',
      blurb: 'Clear, age-appropriate rounds for the youngest players at the table.',
    },
    {
      text: 'Trivia questions for adults',
      href: '/blog/trivia-questions-for-adults',
      blurb: 'Harder rounds so grown-ups stay genuinely challenged.',
    },
    {
      text: 'Animal trivia for kids',
      href: '/blog/animal-trivia-questions-for-kids',
      blurb: 'A friendly, high-interest topic that little ones love to win.',
    },
  ] as const;

  const faqQuestions = [
    {
      question: 'Can you really run a whole trivia night on one phone?',
      answer:
        'Yes. Family Trivia is built for shared-device play, so 1 to 10 players take turns on a single phone or tablet. One person opens the app, everyone is added as a player, and the device passes around the group each turn (or you read the question aloud).',
    },
    {
      question: 'Does everyone need to download the app?',
      answer:
        'No. Only the host installs Family Trivia. Everyone else just plays on that one shared phone — no downloads and no accounts required for the rest of the group.',
    },
    {
      question: 'Can each player have a different topic and difficulty?',
      answer:
        'Yes. Every player or team chooses their own topic and difficulty level (Easy, Medium, Hard), so a younger child and an adult can play the same game and both be fairly challenged.',
    },
    {
      question: 'Do the questions repeat if we play often?',
      answer:
        'Questions are AI-generated for each game, so the app does its best to keep them fresh every session rather than reusing a fixed set. You can play the same topic on different nights and get new questions.',
    },
    {
      question: 'How many rounds should we play?',
      answer:
        'You can set 3 to 15 rounds. Most groups start with 5 to 8 rounds for a quick, lively session, then add more if everyone wants to keep going.',
    },
  ] as const;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingSchema({
        type: 'Article',
        headline: 'How to Run Family Trivia Night With Just One Phone',
        description:
          'Run a whole family trivia night on a single phone — pass it around, each player picks their own topic and difficulty, and AI keeps questions fresh. No accounts, no downloads for everyone else.',
        path: '/blog/family-trivia-one-phone',
        keywords:
          'family trivia one phone, pass and play trivia, trivia game one device, family trivia night, trivia game no accounts, pass the phone trivia',
      }),
      {
        '@type': 'FAQPage',
        mainEntity: faqQuestions.map((item) => ({
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

            {/* Article */}
            <article className='prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
                  How to Run Family Trivia Night With Just One Phone
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  No group downloads, no accounts, no setup headaches — open one
                  app, pass the phone around, and let everyone play at their own
                  level.
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  The fastest way to kill a spontaneous game night is to make
                  everyone download an app and create an account first. Half the
                  table loses interest before the first question.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Family Trivia skips all of that. The whole game is designed to
                  run on a single phone or tablet that you pass around the
                  group. One person opens the app, everyone gets added as a
                  player, and you start playing — no accounts, and no downloads
                  for anyone except the host.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  Here is exactly how to set it up and run a full trivia night on
                  one device.
                </p>
              </section>

              {/* Short Answer */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  The Short Answer
                </h2>
                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200'>
                    Open Family Trivia on one phone, add up to 10 players or
                    teams, and let each person pick their own topic and
                    difficulty. Pass the device around (or read questions aloud)
                    each turn, and the AI keeps the questions fresh. No accounts,
                    and no downloads for everyone else.
                  </p>
                </div>
              </section>

              {/* Why one phone */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Why One Phone Is All You Need
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Most trivia apps assume everyone has their own device, the same
                  app installed, and a working connection. That is a lot of
                  friction for a family on the couch or kids in the back seat on
                  a road trip.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Single-device play removes every one of those steps:
                </p>
                <ul className='list-disc pl-6 mb-4 space-y-2 text-lg text-gray-800 dark:text-gray-200'>
                  <li>
                    <strong>One install.</strong> Only the host downloads the
                    app — nobody else needs to.
                  </li>
                  <li>
                    <strong>No accounts.</strong> There is no sign-up, login, or
                    profile to create before you play.
                  </li>
                  <li>
                    <strong>Works anywhere.</strong> Couch, kitchen table, car,
                    or campsite — one phone is enough.
                  </li>
                  <li>
                    <strong>Fair for every age.</strong> Per-player topics and
                    difficulty mean a kid and a grandparent can share the same
                    game.
                  </li>
                </ul>
              </section>

              {/* Steps */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  How to Run It in 6 Steps
                </h2>
                <div className='space-y-5'>
                  {steps.map((step, idx) => (
                    <div
                      key={step.title}
                      className='bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-200 dark:border-slate-700'
                    >
                      <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                        {idx + 1}. {step.title}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* No accounts / no downloads */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  &ldquo;No Accounts, No Downloads for Everyone Else&rdquo; —
                  What That Means
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Because the game lives on one device, only the host ever
                  installs anything. The other players don&apos;t download the
                  app, don&apos;t make accounts, and don&apos;t need their own
                  phones — they just take the device when it&apos;s their turn.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  That makes it ideal for mixed groups where not everyone has a
                  phone, like younger kids, or for guests you don&apos;t want to
                  ask to install an app just to join one game.
                </p>
              </section>

              {/* Tips for passing the phone */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Tips for Passing the Phone Smoothly
                </h2>
                <ul className='list-disc pl-6 mb-4 space-y-2 text-lg text-gray-800 dark:text-gray-200'>
                  <li>
                    <strong>Sit in turn order.</strong> Arrange the group so the
                    phone travels in a circle instead of crossing the table.
                  </li>
                  <li>
                    <strong>Pick a reader for little kids.</strong> For players
                    who can&apos;t read yet, have an adult read the question
                    aloud and tap their answer.
                  </li>
                  <li>
                    <strong>Keep rounds short.</strong> Start with 5 to 8 rounds
                    so attention stays high and there&apos;s always a reason to
                    play &ldquo;just one more.&rdquo;
                  </li>
                  <li>
                    <strong>Let players re-pick topics.</strong> Switching topics
                    between games keeps things fresh and lets everyone show off a
                    different strength.
                  </li>
                </ul>
              </section>

              {/* Topic ideas */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-5'>
                  Good Topics to Start With
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-5'>
                  Since each player chooses their own topic, mix it up around the
                  table. A few easy starting points:
                </p>
                <div className='space-y-4'>
                  {topicIdeas.map((topic) => (
                    <div
                      key={topic.href}
                      className='bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-200 dark:border-slate-700'
                    >
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
                        <Link
                          href={topic.href}
                          className='text-primary hover:underline'
                        >
                          {topic.text}
                        </Link>
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {topic.blurb}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related reading */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Keep Reading
                </h2>
                <ul className='list-disc pl-6 text-lg text-gray-800 dark:text-gray-200 space-y-2'>
                  <li>
                    <Link
                      href='/blog/how-to-play-family-trivia-game'
                      className='text-primary font-semibold hover:underline'
                    >
                      How to Play Family Trivia
                    </Link>{' '}
                    — a fuller step-by-step walkthrough plus the 10 best topics
                    to start with.
                  </li>
                  <li>
                    <Link
                      href='/blog/family-game-night-ideas'
                      className='text-primary font-semibold hover:underline'
                    >
                      Family Game Night Ideas for Every Age
                    </Link>{' '}
                    — 15 games and a hosting guide for mixed-age groups.
                  </li>
                </ul>
              </section>

              {/* FAQ */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Frequently Asked Questions
                </h2>
                <div className='space-y-5'>
                  {faqQuestions.map((faq) => (
                    <div key={faq.question}>
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
                        {faq.question}
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <BlogCtaSection />

            {/* CTA Section */}
            <section
              id='cta'
              className='mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Ready to Play Tonight?
              </h2>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Download Family Trivia on one phone and start a pass-and-play
                game night in minutes — no accounts, no downloads for everyone
                else.
              </p>
              <DownloadButtons
                containerClassName='flex-wrap gap-4 flex justify-center'
                buttonClassName='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'
              />
            </section>
          </div>
        </div>
      </div>
      <SignupForm />
    </>
  );
}
