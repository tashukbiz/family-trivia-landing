import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { AHrefsAnalytics } from '@/components/analytics/AHrefsAnalytics';
import { GoogleAnalyticsRegistration } from '@/components/analytics/GoogleAnalytics';
import { buildPageMetadata, seoSiteConfig } from '@/lib/seo';
import CreatorReferralTracking from '@/components/CreatorReferralTracking';

export const metadata: Metadata = {
  metadataBase: new URL(seoSiteConfig.siteUrl),
  // Native Smart App Banners cannot reliably receive per-visitor campaign tokens
  // on a static export. Use the visible, instrumented download buttons instead.
  ...buildPageMetadata({
    title: 'Family Trivia App for iPhone & iPad | One Device, Everyone Plays',
    description:
      'Play Family Trivia together on one iPhone or iPad. Each player picks a topic and difficulty, then takes turns in a game for the whole family.',
    path: '/',
  }),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='light'>
      <head>
        <GoogleAnalyticsRegistration />
        <AHrefsAnalytics />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
          rel='stylesheet'
        />
      </head>
      <body className='bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display'>
        <Suspense fallback={null}>
          <CreatorReferralTracking />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
