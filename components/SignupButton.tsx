'use client';

import { trackGoogleAnalyticsEvent } from './analytics/GoogleAnalytics';
import { appStoreUrl } from '@/lib/app-store';

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
  target: 'ios';
  /** Campaign token identifying where on the site the click came from. */
  placement: string;
}

export default function SignupButton({
  children,
  className = '',
  target,
  placement,
}: SignupButtonProps) {
  const href = appStoreUrl(placement);

  const trackClick = () => {
    // transport_type beacon so the event survives navigating away to the App Store.
    trackGoogleAnalyticsEvent('cta_ios_click', {
      event_category: 'cta',
      event_label: target,
      placement,
      link_url: href,
      transport_type: 'beacon',
    });
  };

  return (
    <a href={href} onClick={trackClick} className={className}>
      {children}
    </a>
  );
}
