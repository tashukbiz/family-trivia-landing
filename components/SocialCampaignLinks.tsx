'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { socialCampaign, campaignQuery, type SocialCampaign } from '@/lib/social-campaign';
const campaignUrl = (link: HTMLAnchorElement, campaign: SocialCampaign) => {
  const url = new URL(link.href, window.location.href);
  if (url.origin === window.location.origin && !url.search) campaignQuery(campaign).forEach((value, key) => url.searchParams.set(key, value));
  return url;
};
export default function SocialCampaignLinks() {
  const pathname = usePathname();
  useEffect(() => {
    const campaign = socialCampaign(window.location.search);
    if (!campaign) return;
    document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
      const url = campaignUrl(link, campaign);
      if (url.href !== link.href) link.href = url.href;
    });
    const navigate = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = campaignUrl(link, campaign);
      if (url.origin !== window.location.origin || !url.searchParams.has('utm_source')) return;
      if (url.pathname + url.search === window.location.pathname + window.location.search) return;
      event.preventDefault();
      window.location.assign(url.href);
    };
    document.addEventListener('click', navigate, true);
    return () => document.removeEventListener('click', navigate, true);
  }, [pathname]);
  return null;
}
