import { useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
const subscribe = (listener: () => void) => {
  window.addEventListener('popstate', listener);
  return () => window.removeEventListener('popstate', listener);
};
const getSearch = () => window.location.search;
const serverSearch = () => '';
/** The current location query, empty during prerender. Re-read after history and Next route changes. */
export const useCampaignSearch = () => {
  // Next's soft navigations use pushState, which fires no event; the route
  // subscription forces a re-render so the snapshot is read again.
  usePathname();
  return useSyncExternalStore(subscribe, getSearch, serverSearch);
};
