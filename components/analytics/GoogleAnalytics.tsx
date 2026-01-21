const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleAnalyticsRegistration() {
  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_TRACKING_ID}');`}
      </script>
    </>
  );
}

export const trackGoogleAnalyticsEvent = (
  action: string,
  params?: Record<string, unknown>,
) => {
  if (!GA_TRACKING_ID || !window.gtag) {
    return;
  }
  window.gtag('event', action, params);
};
