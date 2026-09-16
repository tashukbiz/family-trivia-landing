import assert from 'node:assert/strict';
import test from 'node:test';
import { createReferralSession, normalizeCreatorId, parseCreatorReferral, REFERRAL_STORAGE_KEY } from './creator-referrals.ts';

test('new IDs work without registration; fixed campaign ignores URL token', () => {
  assert.deepEqual(parseCreatorReferral('?ref=NEW-creator_42&ct=untrusted&utm_campaign=other'), {
    creatorId: 'new-creator_42', campaignToken: 'ft26-new-creator_42', source: 'unspecified',
  });
});
test('legacy published format and optional platform remain supported', () => {
  assert.deepEqual(parseCreatorReferral('?utm_source=instagram&utm_medium=creator&utm_campaign=ft26&utm_content=c01&ct=ft26-c01'), {
    creatorId: 'c01', campaignToken: 'ft26-c01', source: 'instagram',
  });
  assert.equal(parseCreatorReferral('?ref=c31&utm_source=tiktok').source, 'tiktok');
});
test('format boundaries, duplicate IDs, and conflicting IDs', () => {
  assert.equal(normalizeCreatorId('a'.repeat(25)), 'a'.repeat(25));
  for (const value of ['', 'a'.repeat(26), 'hello world', 'https://evil.test', '<script>', '../c01', '_c01']) {
    assert.equal(parseCreatorReferral('?ref=' + encodeURIComponent(value)), null);
  }
  assert.equal(parseCreatorReferral('?ref=c01&ref=c02'), null);
  assert.equal(parseCreatorReferral('?ref=c01&utm_medium=creator&utm_content=c02'), null);
  assert.equal(parseCreatorReferral('?utm_medium=creator&utm_content=c01&utm_content=c02'), null);
});
test('internal navigation retains, latest creator wins, other campaigns clear', () => {
  const session = createReferralSession();
  session.resolve('?ref=c01');
  assert.equal(session.resolve('?page=2').creatorId, 'c01');
  assert.equal(session.resolve('?ref=c02').creatorId, 'c02');
  assert.equal(session.resolve('?utm_source=newsletter'), null);
  assert.equal(session.resolve(''), null);
  session.resolve('?ref=c03');
  assert.equal(session.resolve('?ref='), null);
});
test('storage survives reload; visit is once per creator per tab session', () => {
  const values = new Map();
  const storage = { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) };
  const session = createReferralSession(storage);
  session.resolve('?ref=c01');
  assert.equal(session.needsVisit(), true);
  session.markVisit();
  const restored = createReferralSession(storage);
  assert.equal(restored.resolve('').campaignToken, 'ft26-c01');
  assert.equal(restored.needsVisit(), false);
  restored.resolve('?ref=c02');
  assert.equal(restored.needsVisit(), true);
  restored.resolve('?ref=c01');
  assert.equal(restored.needsVisit(), false);
  assert.equal(createReferralSession().resolve(''), null);
});
test('stored tokens are rebuilt; corrupt or denied storage cannot break links', () => {
  const storage = { getItem: () => JSON.stringify({ active: { creatorId: 'C99', campaignToken: 'evil' } }), setItem() {} };
  assert.equal(createReferralSession(storage).resolve('').campaignToken, 'ft26-c99');
  const denied = { getItem() { throw Error(); }, setItem() { throw Error(); } };
  assert.equal(createReferralSession(denied).resolve('?ref=c99').creatorId, 'c99');
  assert.equal(createReferralSession({ ...denied, getItem: () => '{' }).resolve(''), null);
});
