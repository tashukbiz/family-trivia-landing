'use client';

import { trackGoogleAnalyticsEvent } from './analytics/GoogleAnalytics';

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
  target: 'ios';
}

const IOS_APP_STORE_URL =
  'https://apps.apple.com/us/app/family-trivia-kids-parents/id6757133105';

export default function SignupButton({
  children,
  className = '',
  target,
}: SignupButtonProps) {
  const trackClick = () => {
    const gtagEvent = 'cta_ios_click';
    trackGoogleAnalyticsEvent(gtagEvent);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', gtagEvent, {
        event_category: 'cta',
        event_label: target,
      });
    }
  };

  return (
    <a href={IOS_APP_STORE_URL} onClick={trackClick} className={className}>
      {children}
    </a>
  );
}
