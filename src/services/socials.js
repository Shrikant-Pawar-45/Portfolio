// Firestore: Social_Details
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from './firebase';

// Returns an array of socials. Supports either an array field `socials` in a single doc,
// or multiple docs each representing a social item.
export async function fetchSocials() {
  if (!db) return [];
  const col = collection(db, 'Social_Details');
  // Prefer first doc for array-style storage
  try {
    const snap = await getDocs(query(col, limit(1)));
    if (!snap.empty) {
      const d = snap.docs[0].data() || {};
      const arr = Array.isArray(d.socials) ? d.socials : [];
      if (arr.length) return normalize(arr);
    }
  } catch (_) {}
  // Fallback: treat each doc as a social record
  const snap = await getDocs(col);
  const items = snap.docs.map((x) => ({ id: x.id, ...x.data() }));
  return normalize(items);
}

function normalize(items) {
  return items
    .filter((s) => s && (s.platform || s.name || s.url))
    .map((s) => ({
      platform: s.platform || s.name || '',
      url: s.url || s.link || '',
      icon: s.icon || '',
      isActive: typeof s.isActive === 'boolean' ? s.isActive : true,
    }));
}
