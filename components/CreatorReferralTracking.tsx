'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { refreshCreatorReferral, needsReferralVisit, markReferralVisit } from '@/lib/creator-referrals-browser';
import { trackGoogleAnalyticsEvent } from './analytics/GoogleAnalytics';

export default function CreatorReferralTracking() {
  const pathname = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    const active = refreshCreatorReferral();
    if (active && needsReferralVisit()) {
      const queued = trackGoogleAnalyticsEvent('creator_referral_visit', {
        creator_id: active.creatorId,
        creator_campaign: active.campaignToken,
        creator_source: active.source,
        transport_type: 'beacon',
      });
      if (queued) markReferralVisit();
    }
  }, [pathname, search]);
  return null;
}
