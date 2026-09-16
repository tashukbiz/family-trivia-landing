import Image from 'next/image';
import Link from 'next/link';
import DownloadButtons from '@/components/DownloadButtons';
import styles from './home.module.css';

const homepageFaqs = [
  {
    question: 'What ages is this for?',
    answer: 'Ages 13+ for independent use. Children aged 6–12 can join when a parent or guardian sets up and manages the game, chooses suitable topics and difficulty, and reads questions aloud.',
  },
  {
    question: 'How many people can play?',
    answer: 'Add up to 10 individual players or teams. Everyone plays on one iPhone or iPad: pass it around, or have one person read the questions aloud.',
  },
  {
    question: 'Which topics can we choose?',
    answer: 'Choose a suggested topic or type your own, from animals and dinosaurs to movies, space and science. Each player chooses their own topic and sets Easy, Medium or Hard independently.',
  },
  {
    question: 'Do we need an internet connection?',
    answer: 'Yes. An internet connection is required to generate questions for your chosen topics and difficulty levels.',
  },
  {
    question: 'Can questions repeat or be incorrect?',
    answer: 'Questions are AI-generated and can occasionally be inaccurate or repeated. You can report a question in the app. Parents should choose suitable topics and supervise younger players.',
  },
  {
    question: 'How does the subscription work?',
    answer: 'Family Trivia offers monthly and annual subscriptions. Prices and any eligible free trial are shown in the app. Subscriptions renew automatically unless cancelled at least 24 hours before the current period ends. Manage or cancel in your App Store account settings.',
  },
  {
    question: 'What data does the app collect?',
    answer: 'Games are saved on your device. To run a game, we send player names, topics and difficulty choices to our server; question generation also uses recently seen questions to avoid repeats. Optional usage analytics links app activity and subscription events using a random app identifier. It is enabled by default, and you can turn it off in the app even without a subscription. See our Privacy Policy for details.',
  },
];

const homepageStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization', name: 'Family Trivia', url: 'https://familytrivia.app',
      logo: 'https://familytrivia.app/favicon.ico', email: 'familytrivia.app@gmail.com',
    },
    { '@type': 'WebSite', name: 'Family Trivia', url: 'https://familytrivia.app' },
    {
      '@type': 'SoftwareApplication', name: 'Family Trivia', applicationCategory: 'GameApplication',
      operatingSystem: 'iOS', url: 'https://familytrivia.app',
      description: 'A family trivia game where each player chooses their own topic and difficulty, then everyone takes turns on one iPhone or iPad.',
      featureList: ['Up to 10 players or teams', 'Play together on one iPhone or iPad', 'A topic and difficulty for each player'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: homepageFaqs.map((faq) => ({
        '@type': 'Question', name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

function Download({ placement, compact = false }: { placement: string; compact?: boolean }) {
  return (
    <DownloadButtons
      placement={placement}
      iosLabel={compact ? 'Download' : 'Download on the App Store'}
      containerClassName={styles.download}
      buttonClassName={`${styles.button} ${compact ? styles.compactButton : ''}`}
    />
  );
}

export default function Home() {
  return (
    <div className={styles.home}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }} />
      <a className={styles.skipLink} href='#main'>Skip to content</a>
      <header className={styles.header}>
        <Link href='/' className={styles.brand} aria-label='Family Trivia home'>
          <Image src='/favicon.ico' alt='' width={32} height={32} />
          <span>Family Trivia</span>
        </Link>
        <nav className={styles.nav} aria-label='Main navigation'>
          <a href='#how-it-works'>How to play</a>
          <a href='#faq'>FAQ</a>
          <Link href='/blog'>Blog</Link>
        </nav>
        <Download placement='web-home-nav' compact />
      </header>

      <main id='main'>
        <section className={styles.hero} aria-labelledby='hero-heading'>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span aria-hidden='true'>✦</span> A little friendly competition</p>
            <h1 id='hero-heading'>Your topic.<br />Your difficulty.<br /><span>One family game.</span></h1>
            <p className={styles.lead}>Waiting for food or your next adventure? Make the most of a few spare minutes. Everyone picks their own topic and difficulty, then takes turns on one phone.</p>
            <Download placement='web-home-hero' />
            <p className={styles.platform}>One device. Up to 10 players or teams.</p>
            <a className={styles.textLink} href='#features'>Take a peek at the game <span aria-hidden='true'>↘</span></a>
          </div>
          <figure className={styles.heroVisual}>
            <div className={styles.visualHeading}><span className={styles.dot} /> Different interests. Same game.</div>
            <div className={styles.setupShot}>
              <Image src='/images/game-setup.png' alt='Real game setup: Mia chooses Animals on Easy, while Dad chooses Space on Hard.' width={1320} height={2868} sizes='(max-width: 600px) 90vw, 380px' preload />
            </div>
            <figcaption>They pick animals. You pick space.</figcaption>
          </figure>
        </section>

        <section id='features' className={styles.gameplay} aria-labelledby='gameplay-heading'>
          <div className={styles.gameplayCopy}>
            <p className={styles.eyebrow}>A question for you. A turn for everyone.</p>
            <h2 id='gameplay-heading'>Different interests?<br /><span>Play together.</span></h2>
            <p>No need to agree on one topic. Make room for the dinosaur fan, the movie buff and the person who knows a little about everything.</p>
            <ul className={styles.benefits}>
              <li><span aria-hidden='true'>01</span><div><h3>Pick your own challenge</h3><p>Easy, Medium or Hard. Set it separately for every player.</p></div></li>
              <li><span aria-hidden='true'>02</span><div><h3>Four answers. Your call.</h3><p>Choose an answer, get immediate feedback and follow the scores.</p></div></li>
              <li><span aria-hidden='true'>03</span><div><h3>Pass the phone. Keep it going.</h3><p>Take turns, or let one person read aloud. Find out who wins, then play again.</p></div></li>
            </ul>
          </div>
          <figure className={styles.questionVisual}>
            <figcaption><span className={styles.playerTag}>Mia’s turn</span> Animals · Easy</figcaption>
            <div className={styles.questionShot}>
              <Image src='/images/game-question.png' alt='Mia’s real Animals question: Which pet is known for purring and using a litter box? The choices are Parrot, Goldfish, Dog and Cat.' width={1320} height={2868} sizes='(max-width: 600px) 90vw, 350px' />
            </div>
          </figure>
        </section>

        <section id='how-it-works' className={styles.howTo} aria-labelledby='steps-heading'>
          <p className={styles.eyebrow}>A few spare minutes together</p>
          <h2 id='steps-heading'>Got a moment? Get playing.</h2>
          <ol className={styles.steps}>
            <li><span>1</span><h3>Add your people</h3><p>Play as individuals or teams, all on one device.</p></li>
            <li><span>2</span><h3>Make it yours</h3><p>Pick a topic and difficulty for each player, then choose how many rounds.</p></li>
            <li><span>3</span><h3>Take your turn</h3><p>Answer questions, cheer each other on and see who comes out on top.</p></li>
          </ol>
        </section>

        <section id='faq' className={styles.faq} aria-labelledby='faq-heading'>
          <div><p className={styles.eyebrow}>A few good questions</p><h2 id='faq-heading'>Before you{' '}<br />gather round.</h2><p>Looking for ideas? Explore our <Link href='/blog'>family trivia guides</Link>.</p></div>
          <div className={styles.faqList}>
            {homepageFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden='true'>+</span></summary>
                <p>{faq.answer}{faq.question === 'What data does the app collect?' && <> <Link href='/privacy'>Read the Privacy Policy</Link>.</>}</p>
              </details>
            ))}
          </div>
        </section>

        <section id='cta' className={styles.finalCta} aria-labelledby='cta-heading'>
          <span aria-hidden='true' className={styles.spark}>✦</span>
          <p className={styles.eyebrow}>One device. Everyone together.</p>
          <h2 id='cta-heading'>A little wait.<br />A little friendly competition.</h2>
          <p>Waiting for your order at a restaurant or in line for a rollercoaster? Bring everyone into the same game.</p>
          <Download placement='web-home-footer' />
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href='/' className={styles.brand}><Image src='/favicon.ico' alt='' width={26} height={26} /><span>Family Trivia</span></Link>
        <nav aria-label='Footer navigation'><Link href='/blog'>Blog</Link><Link href='/privacy'>Privacy policy</Link><Link href='/terms'>Terms</Link><a href='mailto:familytrivia.app@gmail.com'>Contact</a></nav>
      </footer>
    </div>
  );
}
