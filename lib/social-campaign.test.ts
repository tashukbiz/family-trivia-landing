import { expect, test } from 'vitest';
import { socialCampaign, campaignQuery } from './social-campaign';

const query = '?utm_source=youtube&utm_medium=organic_social&utm_campaign=play_2026_10&utm_content=profile';

test('channel profile stays distinct from an individual post', () => {
  expect(socialCampaign(query)?.token).toBe('ft26-yt-profile-oct');
  expect(socialCampaign(query.replace('youtube', 'tiktok'))?.token).toBe('ft26-tt-profile-oct');
  expect(socialCampaign(query.replace('profile', 'ft-trivia-003'))?.token).toBe('ft-trivia-003-yt');
  expect(socialCampaign(query.replace('profile', 'unknown-post'))).toBeNull();
});

test('untrusted fields, duplicate tags and creators cannot become campaign tokens', () => {
  for (const q of [query + '&ref=c01', query + '&utm_source=instagram', query.replace('profile', 'alice@example.com'), query.replace('youtube', '__proto__')]) {
    expect(socialCampaign(q)).toBeNull();
  }
});

test('campaign query round-trips through same-site links', () => {
  const campaign = socialCampaign(query)!;
  expect(socialCampaign('?' + campaignQuery(campaign).toString())?.token).toBe(campaign.token);
});

test('legacy Instagram labels and QA remain identifiable', () => {
  expect(socialCampaign('?utm_source=ig&utm_medium=social&utm_content=link_in_bio')?.token).toBe('ft-ig-profile-legacy');
  const qa = socialCampaign(query.replace('play_2026_10', 'qa_2026_10'));
  expect(qa?.qa).toBe(true);
  expect(qa?.token).toBe('qa-ft26-yt-profile-oct');
});
