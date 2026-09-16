import { createReferralSession, type CreatorReferral } from './creator-referrals';

let session: ReturnType<typeof createReferralSession> | undefined;
let snapshot: CreatorReferral | null = null;
const listeners = new Set<() => void>();

export function refreshCreatorReferral() {
  if (typeof window === 'undefined') return null;
  if (!session) {
    let storage: Storage | undefined;
    try { storage = window.sessionStorage; } catch { /* Storage can be disabled. */ }
    session = createReferralSession(storage);
  }
  const next = session.resolve(window.location.search);
  if (next !== snapshot) {
    snapshot = next;
    listeners.forEach(listener => listener());
  }
  return snapshot;
}

export const getCreatorReferral = () => snapshot;
export const getServerReferral = () => null;
export function subscribeToCreatorReferral(listener: () => void) {
  listeners.add(listener);
  refreshCreatorReferral();
  return () => { listeners.delete(listener); };
}
export const needsReferralVisit = () => session?.needsVisit() ?? false;
export const markReferralVisit = () => session?.markVisit();
