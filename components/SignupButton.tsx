'use client';

import { trackGoogleAnalyticsEvent } from './analytics/GoogleAnalytics';

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
  target: 'ios' | 'android';
}

export default function SignupButton({
  children,
  className = '',
  target,
}: SignupButtonProps) {
  const handleClick = () => {
    const gtagEvent = target === 'ios' ? 'cta_ios_click' : 'cta_android_click';
    trackGoogleAnalyticsEvent(gtagEvent);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', gtagEvent, {
        event_category: 'cta',
        event_label: target,
      });
    }

    document.querySelector(`.signup-form--${target}`)?.classList.add('show');
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
