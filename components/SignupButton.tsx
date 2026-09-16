'use client';

import { trackGoogleAnalyticsEvent } from './analytics/GoogleAnalytics';
import { appStoreUrl } from '@/lib/app-store';
import { useSyncExternalStore } from 'react';
import { getCreatorReferral, getServerReferral, refreshCreatorReferral, subscribeToCreatorReferral } from '@/lib/creator-referrals-browser';

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
  const referral = useSyncExternalStore(subscribeToCreatorReferral, getCreatorReferral, getServerReferral);
  const href = appStoreUrl(referral?.campaignToken ?? placement);

  const trackClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.type === 'auxclick' && event.button !== 1) return;
    const active = refreshCreatorReferral();
    const destination = appStoreUrl(active?.campaignToken ?? placement);
    event.currentTarget.href = destination;
    // transport_type beacon so the event survives navigating away to the App Store.
    trackGoogleAnalyticsEvent('cta_ios_click', {
      event_category: 'cta',
      event_label: target,
      placement,
      link_url: destination,
      store: 'app_store',
      ...(active ? {
        creator_id: active.creatorId,
        creator_campaign: active.campaignToken,
        creator_source: active.source,
      } : {}),
      transport_type: 'beacon',
    });
  };

  return (
    <a href={href} onClick={trackClick} onAuxClick={trackClick} className={className}>
      {children}
    </a>
  );
}
