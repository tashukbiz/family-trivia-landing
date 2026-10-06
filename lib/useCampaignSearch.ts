import { useSyncExternalStore } from 'react';
const subscribe = (listener: () => void) => {
  window.addEventListener('popstate', listener);
  return () => window.removeEventListener('popstate', listener);
};
const getSearch = () => window.location.search;
const serverSearch = () => '';
export const useCampaignSearch = () => useSyncExternalStore(subscribe, getSearch, serverSearch);
