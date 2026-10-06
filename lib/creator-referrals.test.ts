import { expect, test } from 'vitest';
import { createReferralSession, normalizeCreatorId, parseCreatorReferral } from './creator-referrals';

test('new IDs work without registration; fixed campaign ignores URL token', () => {
  expect(parseCreatorReferral('?ref=NEW-creator_42&ct=untrusted&utm_campaign=other')).toEqual({
    creatorId: 'new-creator_42', campaignToken: 'ft26-new-creator_42', source: 'unspecified',
  });
});

test('legacy published format and optional platform remain supported', () => {
  expect(parseCreatorReferral('?utm_source=instagram&utm_medium=creator&utm_campaign=ft26&utm_content=c01&ct=ft26-c01')).toEqual({
    creatorId: 'c01', campaignToken: 'ft26-c01', source: 'instagram',
  });
  expect(parseCreatorReferral('?ref=c31&utm_source=tiktok')?.source).toBe('tiktok');
});

test('format boundaries, duplicate IDs, and conflicting IDs', () => {
  expect(normalizeCreatorId('a'.repeat(25))).toBe('a'.repeat(25));
  for (const value of ['', 'a'.repeat(26), 'hello world', 'https://evil.test', '<script>', '../c01', '_c01']) {
    expect(parseCreatorReferral('?ref=' + encodeURIComponent(value))).toBeNull();
  }
  expect(parseCreatorReferral('?ref=c01&ref=c02')).toBeNull();
  expect(parseCreatorReferral('?ref=c01&utm_medium=creator&utm_content=c02')).toBeNull();
  expect(parseCreatorReferral('?utm_medium=creator&utm_content=c01&utm_content=c02')).toBeNull();
});

test('internal navigation retains, latest creator wins, other campaigns clear', () => {
  const session = createReferralSession();
  session.resolve('?ref=c01');
  expect(session.resolve('?page=2')?.creatorId).toBe('c01');
  expect(session.resolve('?ref=c02')?.creatorId).toBe('c02');
  expect(session.resolve('?utm_source=newsletter')).toBeNull();
  expect(session.resolve('')).toBeNull();
  session.resolve('?ref=c03');
  expect(session.resolve('?ref=')).toBeNull();
});

test('storage survives reload; visit is once per creator per tab session', () => {
  const values = new Map<string, string>();
  const storage = { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); } };
  const session = createReferralSession(storage);
  session.resolve('?ref=c01');
  expect(session.needsVisit()).toBe(true);
  session.markVisit();
  const restored = createReferralSession(storage);
  expect(restored.resolve('')?.campaignToken).toBe('ft26-c01');
  expect(restored.needsVisit()).toBe(false);
  restored.resolve('?ref=c02');
  expect(restored.needsVisit()).toBe(true);
  restored.resolve('?ref=c01');
  expect(restored.needsVisit()).toBe(false);
  expect(createReferralSession().resolve('')).toBeNull();
});

test('stored tokens are rebuilt; corrupt or denied storage cannot break links', () => {
  const storage = { getItem: () => JSON.stringify({ active: { creatorId: 'C99', campaignToken: 'evil' } }), setItem() {} };
  expect(createReferralSession(storage).resolve('')?.campaignToken).toBe('ft26-c99');
  const denied = { getItem(): string | null { throw Error(); }, setItem() { throw Error(); } };
  expect(createReferralSession(denied).resolve('?ref=c99')?.creatorId).toBe('c99');
  expect(createReferralSession({ ...denied, getItem: () => '{' }).resolve('')).toBeNull();
});
