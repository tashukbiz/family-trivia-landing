export const APP_STORE_ID = '6757133105';

export const APP_STORE_URL =
  'https://apps.apple.com/us/app/family-trivia-kids-parents/id6757133105';

const APPLE_PROVIDER_TOKEN =
  process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN || '';

/**
 * App Store URL with Apple App Analytics campaign parameters, so downloads
 * are attributed per placement in App Store Connect → Analytics → Acquisition.
 * Apple requires both pt (provider token) and ct (campaign token, max 30
 * chars); without a provider token the plain URL is returned.
 */
export function appStoreUrl(campaignToken: string): string {
  if (!APPLE_PROVIDER_TOKEN) {
    return APP_STORE_URL;
  }
  const params = new URLSearchParams({
    pt: APPLE_PROVIDER_TOKEN,
    ct: campaignToken,
    mt: '8',
  });
  return `${APP_STORE_URL}?${params.toString()}`;
}
