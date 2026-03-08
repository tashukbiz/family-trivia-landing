'use client';

import { trackGoogleAnalyticsEvent } from './analytics/GoogleAnalytics';

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
  target: 'ios' | 'android';
}

const IOS_APP_STORE_URL =
  'https://apps.apple.com/us/app/family-trivia-kids-parents/id6757133105';

export default function SignupButton({
  children,
  className = '',
  target,
}: SignupButtonProps) {
  const trackClick = () => {
    const gtagEvent = target === 'ios' ? 'cta_ios_click' : 'cta_android_click';
    trackGoogleAnalyticsEvent(gtagEvent);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', gtagEvent, {
        event_category: 'cta',
        event_label: target,
      });
    }
  };

  const handleClick = () => {
    trackClick();
    document.querySelector(`.signup-form--${target}`)?.classList.add('show');
  };

  if (target === 'ios') {
    return (
      <a href={IOS_APP_STORE_URL} onClick={trackClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
