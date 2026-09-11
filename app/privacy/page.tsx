import Link from 'next/link';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy - Family Trivia',
  description: 'Privacy Policy for Family Trivia app',
  path: '/privacy',
  type: 'website',
});

const CONTACT_EMAIL = 'familytrivia.app@gmail.com';

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className='min-h-screen'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <div className='mb-8'>
          <Link
            href='/'
            className='text-primary hover:underline mb-4 inline-block'
          >
            &larr; Back to Home
          </Link>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-2'>
            Privacy Policy
          </h1>
          <p className='text-gray-600 dark:text-gray-400'>
            Last updated: September 11, 2026
          </p>
        </div>

        <div className='prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-800 dark:text-gray-200'>
          <Section id='introduction' title='1. Introduction'>
            <p className='mb-4'>
              Family Trivia (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is a family trivia game developed by Tatiana
              Shukletsova. This Privacy Policy explains what information the
              Family Trivia mobile app, our website at familytrivia.app, and
              our supporting services collect, how it is used, with whom it is
              shared, how long it is kept, and the choices you have.
            </p>
            <p className='mb-4'>
              Family Trivia is for independent use from age 13. Children aged
              6–12 can participate when a parent or guardian sets up and manages
              the game, chooses topics and difficulty, and reads questions aloud.
              The app has no user accounts, no chat, and no advertising.
            </p>
          </Section>

          <Section id='summary' title='2. The short version'>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>
                Games are saved on your device. Some of this information is
                also sent to our server to run the game, as described below.
              </li>
              <li>
                Usage analytics is optional and off until you allow it. It links
                app activity and subscription events using a random app identifier,
                not your name or email. You can change your choice without a
                subscription (see section 7).
              </li>
              <li>
                The app store processes payments. Our subscription provider
                records purchases, trials, renewals and cancellations under a
                randomly assigned customer identifier.
              </li>
              <li>
                Game setup sends player names, topics and difficulty choices
                to our server. Question generation sends topics, difficulty and
                recently seen questions to our AI provider. Player name fields
                are not sent to the AI.
              </li>
              <li>
                We store reports and feedback you choose to send, including
                your name and email only if you provide them.
              </li>
              <li>We do not sell personal information.</li>
            </ul>
          </Section>

          <Section id='collect' title='3. Information the app handles'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
              3.1 Saved on your device
            </h3>
            <p className='mb-4'>The app saves the following on your device. The next section explains what is also transmitted:</p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>
                Player and team names you enter, and each player&apos;s topic
                and difficulty choices
              </li>
              <li>Game state, scores, and statistics</li>
              <li>Your recently played topics</li>
              <li>
                The bank of questions shown on your device, including which
                questions were already asked
              </li>
              <li>The date the app was first installed</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
              3.2 Sent to our server
            </h3>
            <p className='mb-4'>
              Our server receives the following to make the game work:
            </p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>
                When a game starts: the chosen topics, difficulty levels, and
                player names as part of the game setup. Topics are checked for
                suitability. Player names are not saved in our database or
                deliberately included in our application logs.
              </li>
              <li>
                When questions are generated: the topic, difficulty, and the
                texts or fingerprints of questions you have already seen, so
                the AI can avoid repeats. The fingerprints are used to skip
                repeats and are not stored.
              </li>
              <li>
                When you report a question: the question itself, the screen you
                reported it from, and any comment you type. Stored by our feedback provider.
              </li>
              <li>
                When you send feedback: your message, and your name and email
                address only if you choose to provide them. Stored by our feedback provider.
              </li>
              <li>
                Aggregate topic popularity (how often each topic is played,
                with no player or device identifiers attached).
              </li>
            </ul>
            <p className='mb-4'>
              We also keep short-lived technical logs (for example, request
              identifiers, timing, and the requested topic) to keep the
              service running and troubleshoot problems.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
              3.3 AI question generation
            </h3>
            <p className='mb-4'>
              Our AI provider, OpenAI, receives topics for safety checks and
              question generation, along with difficulty, safety-check results
              and recently seen question texts. We do not send player name fields
              to the AI. Please do not include names or other personal information
              in topics or feedback about questions.
            </p>
          </Section>

          <Section id='analytics' title='4. Optional usage analytics'>
            <p className='mb-4'>
              The app includes Google Analytics for Firebase, Google&apos;s
              analytics service, to help us understand which features are
              used, where players get stuck, and how often games are started
              and finished.
            </p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>
                <strong>Data collected:</strong> a random app-instance
                identifier assigned by Google; events such as app open,
                onboarding progress, paywall views, game starts and finishes,
                topic choices (by category, not the topic text you typed), and
                feedback submissions; device and OS information; approximate
                location derived by Google from your IP address. Google&apos;s
                own automatic events (for example first open and session
                start) are also collected.
              </li>
              <li>
                <strong>Purpose:</strong> analytics, to improve the app.
              </li>
              <li>
                <strong>Linking:</strong> this data is tied to the random
                app-instance identifier, which makes it linkable across your
                sessions. It is not linked to your name, email, or any account,
                because the app has no accounts. It is not &quot;anonymous&quot;
                in the strict sense.
              </li>
              <li>
                <strong>Retention:</strong> event-level data is retained for
                14 months, with expired data deleted during Google&apos;s monthly
                deletion process. User-level data has a separate 14-month period
                that restarts when you return and analytics is enabled. Aggregate
                reports, such as totals and averages, are not affected by these
                deletion periods.
              </li>
              <li>
                <strong>Choice:</strong> analytics is off until you allow it.
                Choose Allow or No Thanks before entering the app. You can change
                this later in About on Home, or Analytics settings on the welcome
                and subscription screens. See section 7 for details.
              </li>
            </ul>
          </Section>

          <Section id='subscriptions' title='5. Subscriptions and purchases'>
            <p className='mb-4'>
              Payments for Family Trivia Premium are processed entirely by
              Apple through your Apple Account. We never see your payment
              details.
            </p>
            <p className='mb-4'>
              We use RevenueCat to validate purchases and manage
              subscription access. It receives your subscription lifecycle
              information (trials, purchases, renewals, cancellations, and
              expirations), tied to a randomly assigned customer identifier and your
              device&apos;s transaction data from Apple. If analytics is
              enabled, the app
              also shares the Google Analytics app-instance identifier with
              RevenueCat so that subscription events can be analyzed together
              with app usage in Google Analytics. We do not send your player
              names, email or feedback messages to our subscription provider.
            </p>
            <p className='mb-4'>
              RevenueCat retains this data for as long as it is relevant to
              your use of the service and for a period afterward as described
              in{' '}
              <a
                href='https://www.revenuecat.com/privacy'
                className='text-primary hover:underline'
              >
                RevenueCat&apos;s privacy policy
              </a>
              .
            </p>
          </Section>

          <Section id='website' title='6. This website'>
            <p className='mb-4'>
              familytrivia.app uses Google Analytics (GA4) and Ahrefs
              Analytics to measure visits to the site, such as page views and
              which link led to a download. These services may set cookies or
              similar identifiers in your browser and may infer your
              approximate location from your IP address. You can block or
              delete these cookies through your browser settings; the site
              works without them.
            </p>
          </Section>

          <Section id='choices' title='7. Your choices and rights'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
              7.1 Your analytics choice
            </h3>
            <p className='mb-4'>
              Open About on Home, or Analytics settings on the welcome or
              subscription screen, and switch off &quot;Share usage analytics.&quot;
              This stops app analytics collection and requests removal of the
              identifier used to link subscription events to app activity.
              That removal needs an internet connection; the app retries pending
              updates when you return or reconnect. Subscription analytics may
              continue until the provider receives the update. This does not
              erase previously collected events or affect gameplay, purchases
              or subscription access.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
              7.2 Access, correction, and deletion
            </h3>
            <p className='mb-4'>
              To access, correct, or delete information you have given us
              (for example, a feedback message with your name and email, or a
              report you submitted), email us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className='text-primary hover:underline'
              >
                {CONTACT_EMAIL}
              </a>
              . We will delete the records we can identify as yours, and ask
              our service providers to do the same where practical.
            </p>
            <p className='mb-4'>
              Uninstalling the app removes its local game data. Copies in device
              backups may remain under your backup settings. Uninstalling does
              not delete information already sent to us or our providers.
            </p>
            <p className='mb-4'>
              If you are a California or EU/UK resident, you also have rights
              such as knowing what personal information we hold and
              objecting to processing. Contact us at the same email and we
              will respond, keeping in mind that we hold very little
              identifiable data (see sections 3 to 6).
            </p>
          </Section>

          <Section id='children' title='8. Children&apos;s privacy'>
            <p className='mb-4'>
              Independent use is for ages 13 and over. Children aged 6–12 may
              participate only when a parent or guardian sets up and manages
              the game, chooses the content and reads questions aloud. Children
              can answer verbally and do not need an account or contact details.
            </p>
            <p className='mb-4'>
              Parents should use made-up nicknames or team labels rather than
              children&apos;s real names. Player names and topics entered during
              setup are sent to our server; topics also go to our AI provider.
              Avoid putting personal information in topics, reports or feedback.
              The parent or guardian should make the optional analytics choice.
            </p>
            <p className='mb-4'>
              We do not ask children to submit personal information. If you
              believe information about a child has been sent through the app,
              contact us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className='text-primary hover:underline'
              >
                {CONTACT_EMAIL}
              </a>{' '}
              and we will help identify and delete records we hold.
            </p>
          </Section>

          <Section id='sharing' title='9. Service providers and sharing'>
            <p className='mb-4'>
              We share information only with service providers that process it
              on our behalf, each under its own privacy policy:
            </p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>
                <strong>Google (Firebase Analytics, Google Analytics):</strong>{' '}
                usage analytics as described in sections 4 and 6
              </li>
              <li>
                <strong>RevenueCat:</strong> subscription validation and
                analytics (section 5)
              </li>
              <li>
                <strong>Apple:</strong> App Store distribution, TestFlight,
                and payment processing
              </li>
              <li>
                <strong>OpenAI:</strong> AI question generation and topic
                safety checks (section 3.3)
              </li>
              <li>
                <strong>Cloudflare:</strong> hosting our services and database
              </li>
              <li>
                <strong>Airtable:</strong> storing question reports and
                feedback
              </li>
              <li>
                <strong>Ahrefs:</strong> website visit analytics (section 6)
              </li>
            </ul>
            <p className='mb-4'>
              We do not sell or rent personal information, and we do not share
              it with advertising networks or data brokers. We may disclose
              information if required by law or to protect our rights.
            </p>
          </Section>

          <Section id='retention' title='10. Data retention'>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>
                On-device game data: kept until you uninstall the app
              </li>
              <li>
                Google Analytics event data: up to 14 months (section 4)
              </li>
              <li>
                RevenueCat subscription records: per RevenueCat&apos;s
                retention policy (section 5)
              </li>
              <li>
                Reports and feedback: kept while needed to handle your request, and
                deleted on request
              </li>
              <li>
                Aggregate topic popularity in our database: kept
                indefinitely in a form that is not linked to any player or
                device
              </li>
              <li>
                Technical server logs: short-lived, kept only for
                troubleshooting
              </li>
            </ul>
          </Section>

          <Section id='security' title='11. Security'>
            <p className='mb-4'>
              Connections to our services are encrypted. No
              method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </Section>

          <Section id='international' title='12. International users'>
            <p className='mb-4'>
              Our service providers process data in the United States and
              other countries. If you use the app from outside those
              countries, your information may be transferred to and processed
              in the United States, where our providers&apos; systems are
              based. These transfers rely on contractual safeguards where
              required.
            </p>
          </Section>

          <Section id='changes' title='13. Changes to this policy'>
            <p className='mb-4'>
              We may update this Privacy Policy from time to time. We will
              post the new policy here and update the &quot;Last updated&quot;
              date, and note significant changes in the app.
            </p>
          </Section>

          <Section id='contact' title='14. Contact us'>
            <p className='mb-4'>
              If you have questions about this Privacy Policy or want to
              exercise your rights, contact us at:
            </p>
            <p className='mb-4'>
              Email:{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className='text-primary hover:underline'
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
