import Image from 'next/image';
import Link from 'next/link';
import SignupButton from '@/components/SignupButton';
import SignupForm from '@/components/SignupForm';

export default function Home() {
  return (
    <>
      <div className='relative w-full flex flex-col group/design-root overflow-x-hidden'>
        <div className='layout-container flex h-full grow flex-col'>
          <div className='px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-5'>
            <div className='layout-content-container flex flex-col max-w-5xl flex-1'>
              {/* TopNavBar */}
              <header className='sticky top-4 z-50 flex items-center justify-between whitespace-nowrap bg-white/70 dark:bg-background-dark/70 backdrop-blur-md rounded-full px-8 py-3 shadow-sm'>
                <div className='flex items-center gap-4 text-slate-900 dark:text-white'>
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
                </div>
                <div className='hidden md:flex flex-1 justify-end gap-8'>
                  <div className='flex items-center gap-9'>
                    <a
                      className='text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary'
                      href='#features'
                    >
                      Features
                    </a>
                    <a
                      className='text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary'
                      href='#faq'
                    >
                      FAQ
                    </a>
                  </div>
                  <a
                    href='#cta'
                    className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'
                  >
                    <span className='truncate'>Download</span>
                  </a>
                </div>
              </header>

              {/* Hero Section */}
              <section
                className='text-center py-16 mt-16 md:py-24 bg-primary/10 dark:bg-primary/20 rounded-lg'
                id='hero'
              >
                <div className='max-w-3xl mx-auto flex flex-col gap-6'>
                  <h1 className='text-4xl md:text-6xl font-black leading-tight tracking-wide text-slate-900 dark:text-white'>
                    Trivia game where every player gets their own topic &amp;
                    difficulty.
                  </h1>
                  <p className='text-base md:text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400'>
                    Fun for kids. Challenging for adults. Fair for everyone.
                    Endless, AI-generated trivia questions tailored to each
                    person&apos;s interests — all on a single device.
                  </p>
                  <div className='flex-wrap gap-4 flex justify-center mt-4'>
                    <SignupButton className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'>
                      <span className='truncate'>Download for iOS</span>
                    </SignupButton>
                    <SignupButton className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-colors'>
                      <span className='truncate'>Download for Android</span>
                    </SignupButton>
                  </div>
                </div>
              </section>

              {/* Problem Section */}
              <section className='py-12 md:py-20' id='problem'>
                <div className='max-w-2xl mx-auto text-center'>
                  <h2 className='text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white'>
                    😣 Does family game night end in complaints?
                  </h2>
                  <p className='mt-4 text-base md:text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400'>
                    Most trivia games simply aren&apos;t built for mixed ages:
                    Kids struggle because questions are too hard; Adults lose
                    interest because they&apos;re too easy; Siblings argue;
                    Grandparents get left behind; And questions repeat quickly.
                    The result? More frustration than fun.
                  </p>
                </div>
              </section>

              {/* Solution Section */}
              <section className='py-12 md:py-20' id='solution'>
                <div className='max-w-3xl mx-auto text-center'>
                  <h2 className='text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white'>
                    ✨ Problem solved: personalized trivia for every player
                  </h2>
                  <div className='my-6 p-6 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-lg text-primary dark:text-blue-300'>
                    <h3 className='font-bold text-lg'>
                      Each player chooses: <span className='mx-2'>✔</span> their
                      own topic <span className='mx-2'>✔</span> their own
                      difficulty
                    </h3>
                  </div>
                  <p className='text-base md:text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400'>
                    Your <b>6-year-old</b> can pick <b>animals - easy</b>.
                    <br />
                    Your <b>10-year-old</b> can choose <b>Minecraft – medium</b>
                    .
                    <br />
                    <b>You</b> can select <b>Australian movies – medium</b>.
                    <br />
                    <b>Grandma</b> chooses <b>gardening – hard</b>.
                  </p>
                  <p className='mt-5 text-base md:text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400'>
                    Everyone finally gets questions that match their world.
                  </p>
                </div>
              </section>

              {/* How It Works Section */}
              <section className='py-12 md:py-20' id='how-it-works'>
                <div className='max-w-4xl mx-auto text-center'>
                  <h2 className='text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white'>
                    🚀 Start playing in 30 seconds
                  </h2>
                  <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left'>
                    <div className='flex flex-col gap-2 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <div className='text-primary text-2xl font-bold'>1</div>
                      <h3 className='font-bold'>Add players</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Up to 10 players or teams.
                      </p>
                    </div>
                    <div className='flex flex-col gap-2 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <div className='text-primary text-2xl font-bold'>2</div>
                      <h3 className='font-bold'>
                        Choose topics &amp; difficulty
                      </h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Each person picks what suits them.
                      </p>
                    </div>
                    <div className='flex flex-col gap-2 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <div className='text-primary text-2xl font-bold'>3</div>
                      <h3 className='font-bold'>
                        Pass the device around or read it aloud
                      </h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        One phone or tablet. Clear turn indicators.
                      </p>
                    </div>
                    <div className='flex flex-col gap-2 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <div className='text-primary text-2xl font-bold'>4</div>
                      <h3 className='font-bold'>Answer trivia</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Instant feedback. Auto scoring.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className='py-12 md:py-20' id='features'>
                <div className='max-w-4xl mx-auto text-center'>
                  <h2 className='text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white'>
                    🌟 Everything you want in a family trivia game
                  </h2>
                  <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left'>
                    <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <h3 className='font-bold'>
                        Endless AI-generated questions
                      </h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Unique every time.
                        <a href='#footnote-ai' className='text-primary'>
                          *
                        </a>
                      </p>
                    </div>
                    <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <h3 className='font-bold'>Any topic you can think of</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Dinosaurs, space, Harry Potter, AFL, anime...
                      </p>
                    </div>
                    <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <h3 className='font-bold'>Fair for all ages</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        From kids to adults to grandparents.
                      </p>
                    </div>
                    <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <h3 className='font-bold'>One device for everyone</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Perfect for kitchen tables or road trips.
                      </p>
                    </div>
                    <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <h3 className='font-bold'>Short or long games</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        3 - 15 rounds. Unlimited games.
                      </p>
                    </div>
                    <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <h3 className='font-bold'>Learning disguised as fun</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Kids learn without feeling like it&apos;s homework.
                      </p>
                    </div>
                    <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <h3 className='font-bold'>Beautiful, simple UI</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Designed for play, not confusion.
                      </p>
                    </div>
                    <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm'>
                      <h3 className='font-bold'>Auto save anytime</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Resume games even after closing the app.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Use Cases Section */}
              <section
                className='py-12 md:py-20 bg-white dark:bg-slate-800 rounded-lg'
                id='use-cases'
              >
                <div className='max-w-4xl mx-auto text-center px-6'>
                  <h2 className='text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white'>
                    🎉 Perfect for every family moment
                  </h2>
                  <div className='mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-slate-600 dark:text-slate-300'>
                    <div className='flex flex-col items-center gap-2'>
                      <span className='material-symbols-outlined text-3xl text-primary'>
                        directions_car
                      </span>
                      <span className='text-sm'>Road trips</span>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                      <span className='material-symbols-outlined text-3xl text-primary'>
                        weekend
                      </span>
                      <span className='text-sm'>Weekends</span>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                      <span className='material-symbols-outlined text-3xl text-primary'>
                        nights_stay
                      </span>
                      <span className='text-sm'>Sleepovers</span>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                      <span className='material-symbols-outlined text-3xl text-primary'>
                        cottage
                      </span>
                      <span className='text-sm'>Grandma&apos;s</span>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                      <span className='material-symbols-outlined text-3xl text-primary'>
                        restaurant
                      </span>
                      <span className='text-sm'>Restaurants</span>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                      <span className='material-symbols-outlined text-3xl text-primary'>
                        rainy
                      </span>
                      <span className='text-sm'>Rainy days</span>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                      <span className='material-symbols-outlined text-3xl text-primary'>
                        bedtime
                      </span>
                      <span className='text-sm'>Family time</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Family-Safe Section */}
              <section className='py-12 md:py-20' id='family-safe'>
                <div className='max-w-2xl mx-auto text-center'>
                  <h2 className='text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white'>
                    🛡️ Built for families. Safe for all ages.
                  </h2>
                  <ul className='mt-8 grid grid-cols-2 gap-4 text-left text-slate-600 dark:text-slate-300'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-green-500'>
                        check_circle
                      </span>
                      Age-appropriate content
                      <a href='#footnote-validated' className='text-primary'>
                        **
                      </a>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-green-500'>
                        check_circle
                      </span>
                      Validated questions
                      <a href='#footnote-ai' className='text-primary'>
                        *
                      </a>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-green-500'>
                        check_circle
                      </span>
                      No mid-game interruptions
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-green-500'>
                        check_circle
                      </span>
                      No personal data tracking
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-green-500'>
                        check_circle
                      </span>
                      No accounts required
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-green-500'>
                        check_circle
                      </span>
                      Light, friendly UI
                    </li>
                  </ul>
                </div>
              </section>

              {/* CTA Section */}
              <section
                className='py-16 md:py-24 bg-primary/10 dark:bg-primary/20 rounded-lg text-center'
                id='cta'
              >
                <div className='max-w-2xl mx-auto px-6'>
                  <h2 className='text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white'>
                    💛 Try Family Trivia free today
                  </h2>
                  <p className='mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300'>
                    Start with a free trial. Keep playing with unlimited topics,
                    unlimited rounds, and unlimited new questions.
                  </p>
                  <div className='mt-8 flex flex-col sm:flex-row justify-center items-center gap-4'>
                    <SignupButton className='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold tracking-wide hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors'>
                      <span className='truncate'>Download for iOS</span>
                    </SignupButton>
                    <SignupButton className='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold tracking-wide hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors'>
                      <span className='truncate'>Download for Android</span>
                    </SignupButton>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className='py-12 md:py-20' id='faq'>
                <div className='max-w-3xl mx-auto'>
                  <h2 className='text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white text-center'>
                    Frequently asked questions
                  </h2>
                  <div className='mt-10 space-y-4'>
                    <details className='group bg-white dark:bg-slate-800 rounded-lg p-5 cursor-pointer'>
                      <summary className='flex justify-between items-center font-medium'>
                        What ages is this for?
                        <span className='material-symbols-outlined transition-transform group-open:rotate-180'>
                          expand_more
                        </span>
                      </summary>
                      <p className='text-slate-600 dark:text-slate-400 mt-3'>
                        Family Trivia is designed for all ages! The personalized
                        difficulty and topics ensure everyone gets questions
                        that are right for them.
                      </p>
                    </details>
                    <details className='group bg-white dark:bg-slate-800 rounded-lg p-5 cursor-pointer'>
                      <summary className='flex justify-between items-center font-medium'>
                        Why personalization?
                        <span className='material-symbols-outlined transition-transform group-open:rotate-180'>
                          expand_more
                        </span>
                      </summary>
                      <p className='text-slate-600 dark:text-slate-400 mt-3'>
                        Personalization is the key to fairness and fun. It
                        prevents kids from getting discouraged by questions that
                        are too hard and keeps adults engaged.
                      </p>
                    </details>
                    <details className='group bg-white dark:bg-slate-800 rounded-lg p-5 cursor-pointer'>
                      <summary className='flex justify-between items-center font-medium'>
                        How many players?
                        <span className='material-symbols-outlined transition-transform group-open:rotate-180'>
                          expand_more
                        </span>
                      </summary>
                      <p className='text-slate-600 dark:text-slate-400 mt-3'>
                        You can add up to 10 individual players or teams, making
                        it perfect for small families or large gatherings.
                      </p>
                    </details>
                    <details className='group bg-white dark:bg-slate-800 rounded-lg p-5 cursor-pointer'>
                      <summary className='flex justify-between items-center font-medium'>
                        Do questions repeat?
                        <span className='material-symbols-outlined transition-transform group-open:rotate-180'>
                          expand_more
                        </span>
                      </summary>
                      <p className='text-slate-600 dark:text-slate-400 mt-3'>
                        Our AI generates fresh questions for every single game.
                        <a href='#footnote-ai' className='text-primary'>
                          *
                        </a>
                      </p>
                    </details>
                    <details className='group bg-white dark:bg-slate-800 rounded-lg p-5 cursor-pointer'>
                      <summary className='flex justify-between items-center font-medium'>
                        How does the subscription work?
                        <span className='material-symbols-outlined transition-transform group-open:rotate-180'>
                          expand_more
                        </span>
                      </summary>
                      <p className='text-slate-600 dark:text-slate-400 mt-3'>
                        Start with a free trial period to explore all features
                        at no cost. If you don&apos;t cancel before the trial
                        ends, your subscription will automatically begin and
                        you&apos;ll be charged through your App Store or Google
                        Play account. You can cancel anytime before the trial
                        ends to avoid charges, or keep your subscription to
                        continue enjoying unlimited topics, rounds, and
                        questions.
                      </p>
                    </details>
                    <details className='group bg-white dark:bg-slate-800 rounded-lg p-5 cursor-pointer'>
                      <summary className='flex justify-between items-center font-medium'>
                        Can I cancel anytime?
                        <span className='material-symbols-outlined transition-transform group-open:rotate-180'>
                          expand_more
                        </span>
                      </summary>
                      <p className='text-slate-600 dark:text-slate-400 mt-3'>
                        Yes, you can easily cancel your subscription at any time
                        through your device&apos;s app store settings.
                      </p>
                    </details>
                    <details className='group bg-white dark:bg-slate-800 rounded-lg p-5 cursor-pointer'>
                      <summary className='flex justify-between items-center font-medium'>
                        Do I need multiple devices?
                        <span className='material-symbols-outlined transition-transform group-open:rotate-180'>
                          expand_more
                        </span>
                      </summary>
                      <p className='text-slate-600 dark:text-slate-400 mt-3'>
                        Nope! The whole game is designed to be played on a
                        single phone or tablet that you pass around the group or
                        read the questions to other players.
                      </p>
                    </details>
                  </div>
                </div>
              </section>

              {/* Footnotes */}
              <section className='py-8'>
                <div className='max-w-4xl mx-auto space-y-3'>
                  <p
                    className='text-xs text-slate-500 dark:text-slate-400'
                    id='footnote-ai'
                  >
                    * We do our best to ensure AI generates unique questions
                    every time, but occasionally the AI may produce similar or
                    repeated questions.
                  </p>
                  <p
                    className='text-xs text-slate-500 dark:text-slate-400'
                    id='footnote-validated'
                  >
                    ** While we validate questions and answers, the content
                    highly depends on user input; parental supervision is
                    recommended.
                  </p>
                </div>
              </section>

              {/* Footer */}
              <footer className='py-10 border-t border-slate-200 dark:border-slate-800'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                  <div className='flex items-center gap-4 text-slate-900 dark:text-white'>
                    <Image
                      src='/favicon.ico'
                      alt='Family Trivia'
                      width={20}
                      height={20}
                      className='rounded'
                    />
                    <h2 className='text-base font-bold tracking-tight'>
                      Family Trivia
                    </h2>
                  </div>
                  <div className='flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400'>
                    <Link className='hover:text-primary' href='/privacy'>
                      Privacy policy
                    </Link>
                    <Link className='hover:text-primary' href='/terms'>
                      Terms
                    </Link>
                    <a
                      className='hover:text-primary'
                      href='mailto:familytrivia.app@gmail.com'
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <SignupForm />
    </>
  );
}
