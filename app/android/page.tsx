import Link from 'next/link';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Get Family Trivia for Android - Early Testing',
  description:
    'Join the Family Trivia early testing program on Android. Follow two quick steps to install the app via Google Play.',
  path: '/android',
});

export default function AndroidPage() {
  return (
    <div className='min-h-screen'>
      <div className='max-w-2xl mx-auto px-6 py-12'>
        <div className='mb-8'>
          <Link href='/' className='text-primary hover:underline mb-4 inline-block'>
            &larr; Back to Home
          </Link>
        </div>

        <div className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>
            Early Testing
          </p>
          <h1 className='mt-2 text-3xl font-bold text-slate-900 dark:text-white'>
            Family Trivia for Android
          </h1>
          <p className='mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400'>
            We&apos;re inviting early testers to try the app before the public launch.
            Follow these two quick steps to install on Android.
          </p>

          <ol className='mt-8 space-y-6'>
            <li className='flex gap-4'>
              <span className='flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm'>
                1
              </span>
              <div>
                <p className='font-semibold text-slate-900 dark:text-white'>
                  Join the tester group
                </p>
                <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
                  You need to join before Google Play will let you install the beta.
                </p>
                <a
                  href='https://groups.google.com/g/family-trivia-testers'
                  target='_blank'
                  rel='noreferrer'
                  className='mt-3 inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-900 transition hover:opacity-90'
                >
                  Join Family Trivia Testers
                </a>
              </div>
            </li>

            <li className='flex gap-4'>
              <span className='flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm'>
                2
              </span>
              <div>
                <p className='font-semibold text-slate-900 dark:text-white'>
                  Install from Google Play
                </p>
                <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
                  Once you&apos;ve joined the group, tap the button below to install the app.
                </p>
                <a
                  href='https://play.google.com/store/apps/details?id=app.tashuk.familytrivia'
                  target='_blank'
                  rel='noreferrer'
                  className='mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90'
                >
                  Get it on Google Play
                </a>
              </div>
            </li>
          </ol>

          <p className='mt-8 text-xs text-slate-500 dark:text-slate-400'>
            The Google Play link only works after joining the tester group. If it shows
            &ldquo;item not found&rdquo;, wait a few minutes and try again.
          </p>
        </div>
      </div>
    </div>
  );
}
