/** An approved social visit: its allowlisted UTM values and the App Store campaign token it maps to. */
export type SocialCampaign = { source: string; medium: string; campaign: string; content: string; token: string; qa: boolean };
const channels: Record<string, string> = { youtube: 'yt', instagram: 'ig', tiktok: 'tt' };
const posts = ['ft-trivia-003', 'ft-trivia-004'];
/**
 * Maps a query string to an approved social campaign. Returns null for creator
 * referrals, duplicate UTM keys, unknown channels, campaigns or post IDs.
 * Profile placements get a channel token, posts append the channel, QA
 * campaigns are prefixed with qa-, and the historical ig/social/link_in_bio
 * labels keep their own legacy token.
 */
export function socialCampaign(search: string): SocialCampaign | null {
  const params = new URLSearchParams(search);
  if (params.has('ref')) return null;
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  if (keys.some(key => params.getAll(key).length > 1)) return null;
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  const content = params.get('utm_content');
  if (source === 'ig' && medium === 'social' && content === 'link_in_bio' && !campaign) {
    return { source: 'instagram', medium: 'social', campaign: 'legacy_profile', content: 'profile', token: 'ft-ig-profile-legacy', qa: false };
  }
  if (!source || !Object.hasOwn(channels, source) || medium !== 'organic_social' || !['play_2026_10', 'qa_2026_10'].includes(campaign ?? '')) return null;
  if (content !== 'profile' && !posts.includes(content ?? '')) return null;
  const qa = campaign === 'qa_2026_10';
  const token = content === 'profile' ? `ft26-${channels[source]}-profile-oct` : `${content}-${channels[source]}`;
  return { source, medium, campaign: campaign!, content: content!, token: qa ? `qa-${token}` : token, qa };
}
/** The UTM query that carries a campaign through same-site navigation and maps back to the same campaign. */
export function campaignQuery(campaign: SocialCampaign): URLSearchParams {
  if (campaign.campaign === 'legacy_profile') return new URLSearchParams({ utm_source: 'ig', utm_medium: 'social', utm_content: 'link_in_bio' });
  return new URLSearchParams({ utm_source: campaign.source, utm_medium: campaign.medium, utm_campaign: campaign.campaign, utm_content: campaign.content });
}
/** Google Analytics event params describing the social campaign behind a store click; empty without one. */
export function socialEventParams(campaign: SocialCampaign | null) {
  return campaign ? { social_source: campaign.source, social_campaign: campaign.campaign, social_content: campaign.content, store_campaign: campaign.token, traffic_type: campaign.qa ? 'qa' : 'external' } : {};
}
