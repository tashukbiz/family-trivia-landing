import SignupButton from '@/components/SignupButton';
import SignupForm from '@/components/SignupForm';
import BlogCtaSection from '@/components/BlogCtaSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'Bible Trivia Questions for Kids (With Answers): 50 Questions for Home or Sunday School | Family Trivia',
  description:
    'Looking for Bible trivia questions for kids? Here are 50 easy Bible trivia questions from Old and New Testament. Perfect for Sunday school, homeschool, or family devotions!',
  keywords: [
    'bible trivia questions for kids',
    'bible trivia for kids',
    'kids bible trivia',
    'easy bible trivia',
    'bible questions for kids',
    'sunday school trivia',
    'Family Trivia app',
  ],
};

export default function BibleTriviaQuestionsForKidsPage() {
  return (
    <>
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
                  Bible Trivia Questions for Kids (With Answers): 50 Questions
                  for Home or Sunday School
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                  Discover 50 engaging Bible trivia questions perfect for Sunday
                  school, homeschool, and family devotions
                </p>
              </header>

              {/* Introduction */}
              <section className='mb-10'>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Looking for fun and educational Bible trivia questions for
                  kids? You've come to the right place! Bible trivia is a
                  wonderful way to help children learn scripture, remember
                  important Bible stories, and grow in their faith – all while
                  having fun together as a family or classroom.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4'>
                  Whether you're a Sunday school teacher looking for engaging
                  activities, a homeschool parent seeking creative ways to teach
                  scripture, or a family wanting to make devotion time more
                  interactive, these Bible trivia questions are perfect for kids
                  of all ages. From well-known stories about Noah and Moses to
                  Jesus' miracles and parables, we've covered the most important
                  Bible stories children should know.
                </p>
                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
                  In this article, we've compiled 50 Bible trivia questions with
                  answers, organized by theme to make it easy to focus on
                  specific topics or mix them up for variety. Let's dive into
                  these wonderful stories from God's Word!
                </p>
              </section>

              {/* Why Bible Trivia Is Great for Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Why Bible Trivia Is Great for Kids
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Bible trivia offers much more than entertainment – it's a
                  powerful tool for faith formation and biblical literacy that
                  benefits children in meaningful ways:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>📖</span> Makes Scripture
                      Memorable
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      When kids engage with Bible stories through trivia, they
                      remember the details much better. The interactive format
                      helps biblical knowledge stick in ways that passive
                      listening cannot achieve.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>✝️</span> Builds Biblical
                      Literacy
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Regular Bible trivia helps children become familiar with
                      key people, places, and events in scripture. This
                      foundation is essential for deeper biblical understanding
                      as they grow.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>❤️</span> Makes Faith Fun
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Trivia transforms Bible learning from a chore into an
                      adventure. Kids look forward to discovering stories of
                      courage, miracles, and God's love in an engaging,
                      game-like format.
                    </p>
                  </div>

                  <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-2xl'>👨‍👩‍👧‍👦</span> Encourages Family
                      Devotions
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Bible trivia provides a natural way for families to
                      discuss faith together. It creates opportunities for
                      parents to share their own understanding and for children
                      to ask questions about scripture.
                    </p>
                  </div>
                </div>

                <div className='bg-white dark:bg-slate-800 border-l-4 border-primary rounded-r-lg p-6 my-8'>
                  <p className='text-lg text-gray-800 dark:text-gray-200 mb-4'>
                    <strong>💡 Pro Tip:</strong> Want even more Bible trivia
                    questions? Our{' '}
                    <a
                      href='https://familytrivia.app/'
                      className='font-bold text-primary hover:underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Family Trivia app
                    </a>{' '}
                    includes Bible questions along with hundreds of other
                    educational topics!
                  </p>
                  <p className='text-gray-700 dark:text-gray-300'>
                    With endless AI-generated questions tailored to each
                    player's age and knowledge level, everyone from young
                    children to adults gets questions that are just right for
                    them. Perfect for family devotions, Sunday school, or
                    Christian homeschooling!
                  </p>
                </div>
              </section>

              {/* 50 Bible Trivia Questions for Kids */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  50 Bible Trivia Questions for Kids (With Answers)
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Ready to test your Bible knowledge? We've organized these 50
                  questions into five themed sections covering both the Old and
                  New Testaments. Click "Show Answer" to reveal each answer!
                </p>

                {/* Section 1: Old Testament Stories */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  Section 1: Old Testament Stories
                </h3>

                <div className='space-y-6 mb-10'>
                  {[
                    {
                      q: 'How many days did God take to create the world?',
                      a: 'Six days (and He rested on the seventh day)',
                    },
                    {
                      q: 'Who were the first two people God created?',
                      a: 'Adam and Eve',
                    },
                    {
                      q: 'What did God tell Noah to build?',
                      a: 'An ark',
                    },
                    {
                      q: 'How many of each kind of animal did Noah take on the ark (at minimum)?',
                      a: 'At least two of each kind (a male and a female)',
                    },
                    {
                      q: 'What sign did God give to show He would never flood the earth again?',
                      a: 'A rainbow',
                    },
                    {
                      q: 'Who did God ask to sacrifice his son Isaac?',
                      a: 'Abraham',
                    },
                    {
                      q: 'What did God provide for Abraham to sacrifice instead of Isaac?',
                      a: 'A ram (caught in a thicket)',
                    },
                    {
                      q: 'Which young boy defeated the giant Goliath?',
                      a: 'David',
                    },
                    {
                      q: 'What did Moses use to part the Red Sea?',
                      a: 'His staff (rod)',
                    },
                    {
                      q: 'How many plagues did God send on Egypt?',
                      a: 'Ten plagues',
                    },
                  ].map((item, index) => (
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

                {/* Section 2: New Testament Stories */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  Section 2: New Testament Stories
                </h3>

                <div className='space-y-6 mb-10'>
                  {[
                    {
                      q: 'In which town was Jesus born?',
                      a: 'Bethlehem',
                    },
                    {
                      q: "Who were Jesus' earthly parents?",
                      a: 'Mary and Joseph',
                    },
                    {
                      q: 'What gifts did the wise men bring to baby Jesus?',
                      a: 'Gold, frankincense, and myrrh',
                    },
                    {
                      q: 'Who baptized Jesus in the Jordan River?',
                      a: 'John the Baptist',
                    },
                    {
                      q: 'How many disciples did Jesus choose?',
                      a: 'Twelve disciples',
                    },
                    {
                      q: 'What miracle did Jesus perform with five loaves of bread and two fish?',
                      a: 'He fed 5,000 people',
                    },
                    {
                      q: 'What did Jesus walk on to reach His disciples during a storm?',
                      a: 'Water (He walked on water)',
                    },
                    {
                      q: 'Who did Jesus raise from the dead after four days?',
                      a: 'Lazarus',
                    },
                    {
                      q: 'On which day of the week did Jesus rise from the dead?',
                      a: 'Sunday (the first day of the week)',
                    },
                    {
                      q: 'What happened to Jesus 40 days after His resurrection?',
                      a: 'He ascended into heaven',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index + 11}
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

                {/* Section 3: Bible Characters */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  Section 3: Bible Characters
                </h3>

                <div className='space-y-6 mb-10'>
                  {[
                    {
                      q: 'Who built the ark and survived the great flood?',
                      a: 'Noah',
                    },
                    {
                      q: 'Who was swallowed by a big fish for three days?',
                      a: 'Jonah',
                    },
                    {
                      q: 'Who was the strongest man in the Bible?',
                      a: 'Samson',
                    },
                    {
                      q: 'Which woman became queen and saved the Jewish people?',
                      a: 'Esther',
                    },
                    {
                      q: 'Who was thrown into a den of lions but was protected by God?',
                      a: 'Daniel',
                    },
                    {
                      q: 'Which disciple betrayed Jesus for 30 pieces of silver?',
                      a: 'Judas Iscariot',
                    },
                    {
                      q: 'Which disciple denied knowing Jesus three times?',
                      a: 'Peter',
                    },
                    {
                      q: 'Who was the tax collector that Jesus called to be a disciple?',
                      a: 'Matthew (also called Levi)',
                    },
                    {
                      q: 'Who was known as "the beloved disciple"?',
                      a: 'John',
                    },
                    {
                      q: 'Which apostle was blinded on the road to Damascus?',
                      a: 'Saul (who became Paul)',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index + 21}
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
                    📖 Love Bible Trivia? Get Unlimited Questions!
                  </h3>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                    These 50 questions are just the beginning! With our{' '}
                    <strong>Family Trivia app</strong>, you'll have access to
                    unlimited Bible trivia questions covering stories from
                    Genesis to Revelation – plus hundreds of other educational
                    topics for the whole family.
                  </p>
                  <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                    Perfect for family devotions, Sunday school classes, and
                    Christian homeschooling. Each family member can choose Bible
                    questions matched to their age and knowledge level, making
                    scripture learning engaging for everyone from young children
                    to adults!
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
                    ✓ Free trial available &nbsp;•&nbsp; ✓ Safe for kids
                    &nbsp;•&nbsp; ✓ Educational & fun &nbsp;•&nbsp; ✓ Perfect
                    for families
                  </p>
                </div>

                {/* Section 4: Bible Basics */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  Section 4: Bible Basics
                </h3>

                <div className='space-y-6 mb-10'>
                  {[
                    {
                      q: 'How many books are in the Bible?',
                      a: 'In a Protestant Bible, 66 books (39 Old Testament, 27 New Testament)',
                    },
                    {
                      q: 'What is the first book of the Bible?',
                      a: 'Genesis',
                    },
                    {
                      q: 'What is the last book of the Bible?',
                      a: 'Revelation',
                    },
                    {
                      q: "Which book tells the story of Jesus' birth?",
                      a: "The story of Jesus' birth is told in two books of the Bible, the Gospels of Matthew and Luke",
                    },
                    {
                      q: 'What are the first four books of the New Testament called?',
                      a: 'The Gospels',
                    },
                    {
                      q: 'In what language was most of the Old Testament originally written?',
                      a: 'Hebrew (with some parts in Aramaic)',
                    },
                    {
                      q: 'What city is called "The Holy City" in the Bible?',
                      a: 'Jerusalem',
                    },
                    {
                      q: 'What river was Jesus baptized in?',
                      a: 'The Jordan River',
                    },
                    {
                      q: 'What garden did Adam and Eve live in?',
                      a: 'The Garden of Eden',
                    },
                    {
                      q: 'What mountain did Moses receive the Ten Commandments on?',
                      a: 'Mount Sinai',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index + 31}
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

                {/* Section 5: Bible Lessons & Values */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10'>
                  Section 5: Bible Lessons & Values
                </h3>

                <div className='space-y-6 mb-10'>
                  {[
                    {
                      q: 'What is the greatest commandment Jesus taught?',
                      a: 'Love the Lord your God with all your heart, soul, and mind',
                    },
                    {
                      q: 'What is the second greatest commandment?',
                      a: 'Love your neighbor as yourself',
                    },
                    {
                      q: 'How many commandments did God give Moses?',
                      a: 'Ten Commandments',
                    },
                    {
                      q: 'What prayer did Jesus teach His disciples?',
                      a: "The Lord's Prayer (Our Father)",
                    },
                    {
                      q: 'What are the fruits of the Spirit mentioned in Galatians?',
                      a: 'Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control',
                    },
                    {
                      q: 'In the parable of the Good Samaritan, what did Jesus teach?',
                      a: 'To love and help everyone, even strangers or enemies',
                    },
                    {
                      q: 'What did the Prodigal Son do that teaches us about forgiveness?',
                      a: 'He returned home after wasting his inheritance, and his father forgave him',
                    },
                    {
                      q: 'What does the Bible say we should do when we pray?',
                      a: 'Pray with faith and keep talking to God',
                    },
                    {
                      q: 'What famous verse tells us that God loved the world so much?',
                      a: 'John 3:16',
                    },
                    {
                      q: 'What does the Bible say children should do to honor their parents?',
                      a: 'Obey and respect them',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700'
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold'>
                            {index + 41}
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
                  Bible Trivia FAQs
                </h2>

                <div className='space-y-6'>
                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What are easy Bible trivia questions for young children?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      For young children, focus on the most well-known Bible
                      stories they learn in Sunday school: Noah's ark, David and
                      Goliath, baby Jesus, Daniel and the lions, and Jonah and
                      the big fish. Ask simple questions like "Who built the
                      ark?" or "Where was Jesus born?" These foundational
                      stories help children understand God's love and power in
                      memorable ways.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      How can I use Bible trivia in Sunday school?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Bible trivia is perfect for Sunday school! Use it as an
                      opening activity to engage kids, a review game after
                      teaching a lesson, or a fun competition between classes.
                      You can organize team competitions, offer small prizes for
                      correct answers, or use trivia questions to reinforce the
                      day's Bible lesson. It's an excellent way to make learning
                      scripture interactive and memorable.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What are the most important Bible stories for kids to
                      know?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Essential Bible stories for children include: Creation,
                      Noah's Ark, Abraham and Isaac, Moses and the Red Sea,
                      David and Goliath, Daniel in the lion's den, Jonah and the
                      big fish, the birth of Jesus, Jesus' miracles (feeding the
                      5,000, walking on water), the crucifixion and
                      resurrection. These stories teach core values like faith,
                      obedience, courage, and God's love.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      How do I make Bible learning fun for kids?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Make Bible learning fun by turning it into games! Use
                      trivia questions with rewards, act out Bible stories, sing
                      Bible songs, create crafts related to lessons, and let
                      children ask their own questions. Apps like Family Trivia
                      can also help by providing age-appropriate Bible questions
                      in a game format that kids enjoy. The key is keeping
                      things interactive, positive, and engaging rather than
                      making it feel like homework.
                    </p>
                  </div>

                  <div className='bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-primary'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                      What age is appropriate for Bible trivia?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      Bible trivia can be adapted for all ages! Preschoolers
                      (3-5) can handle very simple questions about basic Bible
                      stories. Elementary kids (6-10) can answer more detailed
                      questions about characters and events. Tweens and teens
                      can tackle questions about Bible books, deeper theology,
                      and scripture verses. The key is adjusting the difficulty
                      to match the child's knowledge and reading level.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  Start Your Bible Trivia Adventure Today!
                </h2>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  Bible trivia is more than just a game – it's a wonderful tool
                  for helping children fall in love with God's Word. Whether
                  you're using these 50 questions in Sunday school, homeschool,
                  or family devotions, you're creating opportunities for kids to
                  engage with scripture in meaningful and memorable ways.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6'>
                  These questions cover the essential stories every child should
                  know, from Creation to the Resurrection, from Noah to Paul. As
                  children answer these questions, they're not just learning
                  facts – they're discovering the amazing story of God's love
                  for His people throughout history.
                </p>

                <p className='text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8'>
                  Ready for even more Bible trivia? Download the Family Trivia
                  app for unlimited Bible questions plus hundreds of other
                  educational topics perfect for family game night. Make
                  learning scripture fun for the whole family – from toddlers to
                  grandparents, everyone can enjoy questions tailored just for
                  them!
                </p>

                <BlogCtaSection />
              </section>

              {/* Related Articles */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                  More Trivia for Kids
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <Link
                    href='/blog/trivia-questions-for-kids'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>
                      General Trivia Questions for Kids
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      20 fun questions covering all topics
                    </p>
                  </Link>
                  <Link
                    href='/blog/kids-trivia-questions'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>
                      More Kids Trivia Questions
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      Explore our collection of kid-friendly trivia
                    </p>
                  </Link>
                  <Link
                    href='/blog/fun-trivia-questions-for-kids'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>
                      Fun Trivia Questions for Kids
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      Entertaining questions kids will love
                    </p>
                  </Link>
                  <Link
                    href='/blog/disney-trivia-questions-for-kids'
                    className='bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors'
                  >
                    <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>
                      Disney Trivia for Kids
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      Disney movie trivia questions
                    </p>
                  </Link>
                </div>
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
