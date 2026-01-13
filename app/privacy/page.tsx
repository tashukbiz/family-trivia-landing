import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Family Trivia',
  description: 'Privacy Policy for Family Trivia app',
};

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
            Last updated: November 20, 2025
          </p>
        </div>

        <div className='prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-800 dark:text-gray-200'>
          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              1. Introduction
            </h2>
            <p className='mb-4'>
              Welcome to Family Trivia (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our mobile
              application and services.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              2. Information We Collect
            </h2>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
              2.1 Personal Information
            </h3>
            <p className='mb-4'>
              We may collect the following personal information:
            </p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>Name and email address</li>
              <li>Profile information you choose to provide</li>
              <li>Game progress and statistics</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
              2.2 Automatically Collected Information
            </h3>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>Device information (device type, operating system)</li>
              <li>Usage data (features used, time spent in app)</li>
              <li>
                Technical data (IP address, app crashes, performance metrics)
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              3. How We Use Your Information
            </h2>
            <p className='mb-4'>We use the collected information to:</p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>Provide and maintain the app functionality</li>
              <li>Generate trivia questions using AI technology</li>
              <li>Improve user experience and app features</li>
              <li>Send notifications about game updates (with your consent)</li>
              <li>Analyze usage patterns and troubleshoot issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              4. AI-Generated Content
            </h2>
            <p className='mb-4'>
              Family Trivia uses artificial intelligence to generate trivia
              questions and content. Please note:
            </p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>
                <strong>AI Limitations:</strong> AI-generated content may
                occasionally contain errors, inaccuracies, or inappropriate
                content despite our filtering efforts.
              </li>
              <li>
                <strong>No Guarantees:</strong> We do not guarantee the
                accuracy, completeness, or appropriateness of AI-generated
                content.
              </li>
              <li>
                <strong>User Responsibility:</strong> Users should exercise
                their own judgment when interacting with AI-generated content.
              </li>
              <li>
                <strong>Reporting:</strong> Users can report inappropriate
                content through the app&apos;s reporting feature.
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              5. Data Sharing and Disclosure
            </h2>
            <p className='mb-4'>We may share your information with:</p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>
                <strong>Service Providers:</strong> Third-party AI providers
                (OpenAI, Anthropic, etc.) that help generate content
              </li>
              <li>
                <strong>Analytics Partners:</strong> To understand app usage and
                improve services
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law or to
                protect our rights
              </li>
            </ul>
            <p className='mb-4'>
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              6. Data Security
            </h2>
            <p className='mb-4'>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the internet
              or electronic storage is 100% secure. While we strive to protect
              your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              7. Children&apos;s Privacy
            </h2>
            <p className='mb-4'>
              Family Trivia is designed for family use, but it is intended to be
              operated by users aged 13 and older. We do not knowingly collect
              personal information from children under 13. If you are under 13,
              you may not use this App. If you believe we have collected
              information from a child under 13, please contact us immediately
              and we will delete such information.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              8. Your Rights
            </h2>
            <p className='mb-4'>You have the right to:</p>
            <ul className='list-disc pl-6 mb-4 space-y-2'>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
            <p className='mb-4'>
              To exercise these rights, contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              9. Data Retention
            </h2>
            <p className='mb-4'>
              We retain your personal information only as long as necessary to
              provide our services and comply with legal obligations. Game data
              and statistics may be retained for analytics purposes in
              anonymized form.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              10. Changes to This Policy
            </h2>
            <p className='mb-4'>
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by posting the new policy in the
              app and updating the &quot;Last updated&quot; date. Your continued
              use of the app after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              11. International Users
            </h2>
            <p className='mb-4'>
              If you are accessing our app from outside the United States,
              please be aware that your information may be transferred to,
              stored, and processed in the United States where our servers are
              located.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              12. Contact Us
            </h2>
            <p className='mb-4'>
              If you have questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className='mb-4'>
              Email:{' '}
              <a
                href='mailto:familytrivia.app@gmail.com'
                className='text-primary hover:underline'
              >
                familytrivia.app@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
