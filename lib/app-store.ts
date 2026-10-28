export const APP_STORE_ID = '6757133105';

export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=app.tashuk.familytrivia';

export const APP_STORE_URL =
  'https://apps.apple.com/us/app/family-trivia-kids-parents/id6757133105';

const APPLE_PROVIDER_TOKEN =
  process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN || '';

/**
 * Store URL with campaign parameters shared across both platforms. Apple uses
 * these for App Analytics; they do not establish Google Play attribution.
 * Apple requires both pt (provider token) and ct (campaign token, max 30
 * chars); without a provider token the plain URL is returned.
 */
export function appStoreUrl(target: 'ios' | 'android', campaignToken: string): string {
  const storeUrl = target === 'android' ? GOOGLE_PLAY_URL : APP_STORE_URL;
  if (!APPLE_PROVIDER_TOKEN) {
    return storeUrl;
  }
  const url = new URL(storeUrl);
  url.searchParams.set('pt', APPLE_PROVIDER_TOKEN);
  url.searchParams.set('ct', campaignToken);
  url.searchParams.set('mt', '8');
  return url.toString();
}
