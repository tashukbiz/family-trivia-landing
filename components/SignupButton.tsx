'use client';
import { socialCampaign, socialEventParams } from '@/lib/social-campaign';
import { useCampaignSearch } from '@/lib/useCampaignSearch';

import { trackGoogleAnalyticsEvent } from './analytics/GoogleAnalytics';
import { appStoreUrl, GOOGLE_PLAY_URL } from '@/lib/app-store';
import { useSyncExternalStore } from 'react';
import { getCreatorReferral, getServerReferral, refreshCreatorReferral, subscribeToCreatorReferral } from '@/lib/creator-referrals-browser';

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
  target: 'ios' | 'android';
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
  const campaign = socialCampaign(useCampaignSearch());
  const href = target === 'android'
    ? GOOGLE_PLAY_URL
    : appStoreUrl(referral?.campaignToken ?? campaign?.token ?? placement);

  const trackClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.type === 'auxclick' && event.button !== 1) return;
    const active = refreshCreatorReferral();
    const social = socialCampaign(window.location.search);
    const destination = target === 'android'
      ? GOOGLE_PLAY_URL
      : appStoreUrl(active?.campaignToken ?? social?.token ?? placement);
    event.currentTarget.href = destination;
    // transport_type beacon so the event survives navigating away to the App Store.
    trackGoogleAnalyticsEvent(target === 'android' ? 'cta_android_click' : 'cta_ios_click', {
      event_category: 'cta',
      event_label: target,
      placement,
      link_url: destination,
      store: target === 'android' ? 'google_play' : 'app_store',
      ...(!active ? socialEventParams(social) : {}),
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
