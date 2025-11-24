export const DATA_KEY = process.env.NEXT_PUBLIC_HREFS_DATA_KEY || '';

export function AHrefsAnalytics() {
  if (!DATA_KEY) {
    return null;
  }

  return (
    <script
      src='https://analytics.ahrefs.com/analytics.js'
      data-key={DATA_KEY}
      async
    ></script>
  );
}
