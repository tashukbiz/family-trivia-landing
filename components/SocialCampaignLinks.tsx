'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { socialCampaign, campaignQuery } from '@/lib/social-campaign';
export default function SocialCampaignLinks() {
  const pathname = usePathname();
  useEffect(() => {
    const campaign = socialCampaign(window.location.search, 'ft');
    if (!campaign) return;
    document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.search || url.pathname.startsWith('/invite')) return;
      campaignQuery(campaign).forEach((value, key) => url.searchParams.set(key, value));
      link.href = url.toString();
    });
    const navigate = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || !url.searchParams.has('utm_source')) return;
      event.preventDefault();
      window.setTimeout(() => window.location.assign(url.href), 0);
    };
    document.addEventListener('click', navigate, true);
    return () => document.removeEventListener('click', navigate, true);
  }, [pathname]);
  return null;
}
