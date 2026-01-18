import DownloadButtons from '@/components/DownloadButtons';
import SignupForm from '@/components/SignupForm';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'From Idea to Family Trivia App: First Steps & Iterations | Family Trivia',
  description:
    'Follow the early journey of building the Family Trivia app: the first idea, the MVP, iterative improvements, and how we are now testing on iOS and Android.',
  keywords: [
    'family trivia app',
    'build a trivia app',
    'app development story',
    'from idea to app',
    'iterative app development',
    'TestFlight beta',
    'Google Play testing',
  ],
};

export default function FromIdeaToFamilyTriviaAppPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'From Idea to Family Trivia App: First Steps & Iterations',
    description:
      'Follow the early journey of building the Family Trivia app: the first idea, the MVP, iterative improvements, and how we are now testing on iOS and Android.',
    image: 'https://familytrivia.app/og-image.png',
    author: {
      '@type': 'Person',
      name: 'Family Trivia Team',
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
      '@id': 'https://familytrivia.app/blog/from-idea-to-family-trivia-app',
    },
    keywords:
      'family trivia app, build a trivia app, from idea to app, iterative app development, TestFlight beta',
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
                  <span className='truncate'>Join Testing</span>
                </a>
              </div>
            </header>

            <div className='mb-6'>
              <Link href='/blog' className='text-primary hover:underline text-sm'>
                &larr; Back to Blog
              </Link>
            </div>

            <article className='prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
                  From Idea to Family Trivia App: First Steps & Iterations
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  A behind-the-scenes look at how a simple family game night idea
                  turned into a real app now in early testing.
                </p>
              </header>

              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  The story of the Family Trivia app started with a spark of
                  inspiration I heard on the <strong>Chris Koerner YouTube channel</strong>.
                  He mentioned a simple idea: use AI to generate trivia questions
                  for a quick family game night. That single suggestion sent me
                  down a fun rabbit hole.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  I opened ChatGPT and tried it right away with my daughter. We
                  played several rounds, and it actually worked pretty well. I
                  asked it to quiz us, gave it topics and difficulty levels, and
                  even asked it to track our scores. It was surprisingly fun!
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  But after a few sessions, the rough edges showed up. I had to
                  repeat the instructions every time, the interface felt clunky,
                  and it wasn&apos;t easy to keep the game flowing. That&apos;s when
                  the idea shifted from “this is fun” to “this could be a real
                  app.”
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  The First Steps: A Simple MVP
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  I decided to build a first version of the Family Trivia app as
                  a lightweight MVP (minimum viable product). The goal was to
                  capture the best parts of our ChatGPT sessions and turn them
                  into a smoother, repeatable experience.
                </p>
                <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6 mb-6'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                    What the MVP focused on
                  </h3>
                  <ul className='list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2'>
                    <li>Letting us pick topics and difficulty in a simple flow.</li>
                    <li>Generating fresh trivia questions without re-prompting.</li>
                    <li>Tracking scores so game night felt more like a real game.</li>
                    <li>Keeping everything fast and kid-friendly.</li>
                  </ul>
                </div>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  I tested that very first version with my daughter again. It
                  already felt smoother than chatting with a bot. That small win
                  was enough to keep going.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Iteration by Iteration: Making It Better
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Like most app stories, Family Trivia improved through
                  iteration. Each play session revealed little things that could
                  be better—faster setup, clearer instructions, and smoother
                  transitions between questions.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                      Version 1 → Version 2
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      After the first version, I refined the flow and made the
                      game feel more like a dedicated trivia app rather than a
                      repackaged chatbot session. Each iteration focused on
                      simplifying the experience for families.
                    </p>
                  </div>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                      From “fun idea” to “real product”
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Once the experience felt polished enough for my own family
                      game nights, I knew it was time to expand beyond just us.
                      That meant real app store accounts and real testers.
                    </p>
                  </div>
                </div>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  From Idea to Real App Testing
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  To share the app with more families, I registered developer
                  accounts for both the Apple App Store and Google Play. The app
                  is now available for <strong>early testing</strong> on both
                  platforms. It&apos;s not public yet, but testers can already
                  download and play.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  This stage is all about collecting high-level feedback: what
                  feels intuitive, what confuses people, and which features
                  matter most. Early testing helps make the next iteration even
                  stronger before the public release.
                </p>
              </section>

              <section
                id='cta'
                className='bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 my-12 text-center'
              >
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Want to Test the App for Free?
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  If you&apos;re interested, join the testing group, install the
                  app, and play while it&apos;s completely free. Your feedback will
                  help shape the public launch.
                </p>
                <DownloadButtons
                  containerClassName='flex flex-col sm:flex-row gap-4 justify-center items-center mb-6'
                  buttonClassName='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg'
                  iosLabel='Join iOS TestFlight'
                  androidLabel='Join Android Testing'
                />
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Thanks for being part of the early community!
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  What&apos;s Next?
                </h2>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  The next step is to gather the first wave of reviews and
                  incorporate what matters most to families. That feedback will
                  guide the final polish before the public release.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  If you&apos;d like to be part of the story from the very beginning,
                  join the testing group and let us know how Family Trivia fits
                  into your game nights.
                </p>
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
