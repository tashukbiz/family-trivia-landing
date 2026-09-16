export type CreatorReferral = { creatorId: string; campaignToken: string; source: string };

// Any well-formed ID works. No roster, approval list, or registry lookup.
// The 25-character limit leaves room for "ft26-" in Apple's 30-character token.
export function normalizeCreatorId(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const id = value.toLowerCase();
  return /^[a-z0-9][a-z0-9_-]{0,24}$/.test(id) ? id : null;
}

function sourceName(value: unknown): string {
  return typeof value === 'string' && /^[a-z][a-z0-9_-]{0,31}$/.test(value)
    ? value : 'unspecified';
}

function referral(id: string, source: unknown): CreatorReferral {
  return { creatorId: id, campaignToken: `ft26-${id}`, source: sourceName(source) };
}

// undefined = untagged navigation; null = invalid referral or another campaign.
export function parseCreatorReferral(search: string): CreatorReferral | null | undefined {
  const params = new URLSearchParams(search);
  const legacyCreator = params.get('utm_medium') === 'creator';
  if (!params.has('ref') && !legacyCreator) {
    return [...params.keys()].some(key => key.startsWith('utm_') || key === 'ct') ? null : undefined;
  }
  const key = params.has('ref') ? 'ref' : 'utm_content';
  if (params.getAll(key).length !== 1) return null;
  const id = normalizeCreatorId(params.get(key));
  if (!id) return null;
  if (params.has('ref') && legacyCreator && params.has('utm_content') &&
      (params.getAll('utm_content').length !== 1 || normalizeCreatorId(params.get('utm_content')) !== id)) return null;
  // ct and utm_campaign never control store attribution. Derive the token ourselves.
  const source = params.getAll('utm_source').length === 1 ? params.get('utm_source') : null;
  return referral(id, source);
}

export const REFERRAL_STORAGE_KEY = 'ft.creator-referral.v1';
type SessionStorage = Pick<Storage, 'getItem' | 'setItem'>;

export function createReferralSession(storage?: SessionStorage) {
  let active: CreatorReferral | null = null;
  let seen = new Set<string>();
  try {
    const saved = JSON.parse(storage?.getItem(REFERRAL_STORAGE_KEY) || 'null');
    const id = normalizeCreatorId(saved?.active?.creatorId);
    if (id) active = referral(id, saved.active.source);
    if (Array.isArray(saved?.seen)) {
      seen = new Set(saved.seen.filter((value: unknown) => typeof value === 'string' && /^ft26-[a-z0-9][a-z0-9_-]{0,24}$/.test(value)));
    }
  } catch { /* Blocked or corrupt storage: retain attribution in memory only. */ }
  function save() {
    try { storage?.setItem(REFERRAL_STORAGE_KEY, JSON.stringify({ active, seen: [...seen] })); } catch { /* Best effort. */ }
  }
  return {
    resolve(search: string) {
      const incoming = parseCreatorReferral(search);
      if (incoming !== undefined && (incoming?.creatorId !== active?.creatorId || incoming?.source !== active?.source || incoming === null)) {
        active = incoming;
        save();
      }
      return active;
    },
    needsVisit() { return active !== null && !seen.has(active.campaignToken); },
    markVisit() { if (active) { seen.add(active.campaignToken); save(); } },
  };
}
