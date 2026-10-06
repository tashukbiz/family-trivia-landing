export type SocialCampaign = { source: string; medium: string; campaign: string; content: string; token: string; qa: boolean };
const channels: Record<string, string> = { youtube: 'yt', instagram: 'ig', tiktok: 'tt' };
const posts: Record<'pl' | 'ft', string[]> = {
  pl: ['pl-recall-004', 'pl-recall-005', 'pl-wordsense-001'],
  ft: ['ft-trivia-003', 'ft-trivia-004'],
};
export function socialCampaign(search: string, app: 'pl' | 'ft'): SocialCampaign | null {
  const params = new URLSearchParams(search);
  if (params.has('ref')) return null;
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  if (keys.some(key => params.getAll(key).length > 1)) return null;
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  const content = params.get('utm_content');
  if (source === 'ig' && medium === 'social' && content === 'link_in_bio' && !campaign) {
    return { source: 'instagram', medium: 'social', campaign: 'legacy_profile', content: 'profile', token: `${app}-ig-profile-legacy`, qa: false };
  }
  if (!source || !Object.hasOwn(channels, source) || medium !== 'organic_social' || !['play_2026_10', 'qa_2026_10'].includes(campaign ?? '')) return null;
  if (content !== 'profile' && !posts[app].includes(content ?? '')) return null;
  const qa = campaign === 'qa_2026_10';
  const token = content === 'profile' ? `${app}26-${channels[source]}-profile-oct` : `${content}-${channels[source]}`;
  return { source, medium, campaign: campaign!, content: content!, token: qa ? `qa-${token}` : token, qa };
}
export function campaignQuery(campaign: SocialCampaign): URLSearchParams {
  if (campaign.campaign === 'legacy_profile') return new URLSearchParams({ utm_source: 'ig', utm_medium: 'social', utm_content: 'link_in_bio' });
  return new URLSearchParams({ utm_source: campaign.source, utm_medium: campaign.medium, utm_campaign: campaign.campaign, utm_content: campaign.content });
}
export function taggedStoreUrl(base: string, campaign: SocialCampaign | null, providerToken = ''): string {
  const url = new URL(base, 'https://familytrivia.app');
  if (!campaign) return base;
  if (url.hostname === 'apps.apple.com' && /^\d+$/.test(providerToken)) {
    url.searchParams.set('pt', providerToken);
    url.searchParams.set('ct', campaign.token);
    url.searchParams.set('mt', '8');
  } else if (url.hostname === 'play.google.com' && url.pathname === '/store/apps/details') {
    url.searchParams.set('referrer', campaignQuery(campaign).toString());
  } else if (base.startsWith('/')) {
    campaignQuery(campaign).forEach((value, key) => url.searchParams.set(key, value));
    return url.pathname + url.search;
  }
  return url.toString();
}
export function socialEventParams(campaign: SocialCampaign | null) {
  return campaign ? { social_source: campaign.source, social_campaign: campaign.campaign, social_content: campaign.content, store_campaign: campaign.token, traffic_type: campaign.qa ? 'qa' : 'external' } : {};
}
