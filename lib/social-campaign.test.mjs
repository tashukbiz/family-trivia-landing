import { test } from 'node:test';
import assert from 'node:assert/strict';
import { socialCampaign, taggedStoreUrl, campaignQuery } from './social-campaign.ts';
const query = '?utm_source=youtube&utm_medium=organic_social&utm_campaign=play_2026_10&utm_content=profile';
test('channel profile stays distinct from an individual post', () => {
  const c = socialCampaign(query, 'pl');
  assert.equal(c.token, 'pl26-yt-profile-oct');
  assert.equal(socialCampaign(query.replace('profile', 'pl-recall-005'), 'pl').token, 'pl-recall-005-yt');
  assert.equal(socialCampaign(query.replace('profile', 'pl-recall-005'), 'ft'), null);
});
test('untrusted fields, duplicate tags and creators cannot become campaign tokens', () => {
  for (const q of [query + '&ref=c01', query + '&utm_source=instagram', query.replace('profile', 'alice@example.com'), query.replace('youtube', '__proto__')]) assert.equal(socialCampaign(q, 'pl'), null);
});
test('Apple requires a verified provider, Android receives encoded referrer', () => {
  const c = socialCampaign(query, 'pl');
  const base = 'https://apps.apple.com/app/id6804652103';
  assert.equal(taggedStoreUrl(base, c), base);
  const apple = new URL(taggedStoreUrl(base, c, '12345'));
  assert.equal(apple.searchParams.get('ct'), c.token);
  assert.equal(apple.searchParams.get('pt'), '12345');
  const play = new URL(taggedStoreUrl('https://play.google.com/store/apps/details?id=app.example', c));
  assert.equal(play.searchParams.get('referrer'), campaignQuery(c).toString());
  assert.equal(socialCampaign(new URL(taggedStoreUrl('/google-play/', c), 'https://example.com').search, 'pl').token, c.token);
});
test('legacy Instagram labels and QA remain identifiable', () => {
  assert.equal(socialCampaign('?utm_source=ig&utm_medium=social&utm_content=link_in_bio', 'ft').token, 'ft-ig-profile-legacy');
  assert.equal(socialCampaign(query.replace('play_2026_10', 'qa_2026_10'), 'ft').qa, true);
});
