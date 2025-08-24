// Firestore: Internship_Details
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export async function fetchInternships() {
  // 0) Prefer Admin API if configured
  const API_BASE = import.meta.env.VITE_ADMIN_API_BASE;
  const ADMIN_UID = import.meta.env.VITE_ADMIN_USER_ID;
  if (API_BASE && ADMIN_UID) {
    try {
      console.debug('[Internships] Using Admin API', { API_BASE, ADMIN_UIDMasked: String(ADMIN_UID).slice(0, 4) + '***' });
      const res = await fetch(`${API_BASE}/api/Internship_Details/${ADMIN_UID}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        const data = await res.json();
        const items = data?.internshipDetails?.internships || [];
        if (Array.isArray(items) && items.length) {
          const normalized = normalize(items);
          console.debug(`[Internships] Admin API returned ${normalized.length} items.`);
          return normalized;
        }
        // if API returns empty, continue to Firestore fallback
      }
    } catch (_) {
      // ignore and fallback to Firestore
    }
  }

  if (!db) {
    console.warn('[Internships] Firestore db not initialized. Check Firebase env vars.');
    return [];
  }
  const candidates = ['Internship_Details', 'Internships', 'Internship'];
  for (const name of candidates) {
    const col = collection(db, name);
    // order asc
    try {
      console.debug(`[Internships] Trying collection "${name}" ordered by 'order' asc`);
      const snap = await getDocs(query(col, orderBy('order', 'asc')));
      const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      if (items.length) {
        const normalized = normalize(items);
        console.debug(`[Internships] Found ${normalized.length} items in "${name}" (order asc).`);
        return normalized;
      }
    } catch (_) {}
    // createdAt desc
    try {
      console.debug(`[Internships] Trying collection "${name}" ordered by 'createdAt' desc`);
      const snap = await getDocs(query(col, orderBy('createdAt', 'desc')));
      const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      if (items.length) {
        const normalized = normalize(items);
        console.debug(`[Internships] Found ${normalized.length} items in "${name}" (createdAt desc).`);
        return normalized;
      }
    } catch (_) {}
    // unordered
    try {
      console.debug(`[Internships] Trying collection "${name}" without ordering`);
      const snap = await getDocs(col);
      const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      if (items.length) {
        const normalized = normalize(items);
        console.debug(`[Internships] Found ${normalized.length} items in "${name}" (unordered).`);
        return normalized;
      }
    } catch (_) {}
  }
  return [];
}

function flattenDocs(docs) {
  const out = [];
  for (const d of docs) {
    if (Array.isArray(d.internships)) {
      for (const it of d.internships) out.push(it);
    } else {
      out.push(d);
    }
  }
  return out;
}

function normalize(items) {
  return items
    .filter((x) => x && (x.company || x.organisation || x.organization || x.role || x.position))
    .map((x) => ({
      company: x.company || x.organisation || x.organization || 'Company',
      role: x.role || x.position || 'Intern',
      start: x.start || x.startDate || '',
      end: x.end || x.endDate || '',
      // Build a friendly location string combining type/mode and place
      location: (() => {
        const parts = [];
        const mode = x.mode || x.type || '';
        const place = x.location || x.place || x.city || '';
        if (mode) parts.push(mode);
        if (place) parts.push(place);
        return parts.join(' — ');
      })(),
      duration: x.duration || '',
      description: (() => {
        if (x.description) return x.description;
        const parts = [];
        if (x.achievements) parts.push(String(x.achievements));
        if (x.technologies) parts.push(`Tech: ${x.technologies}`);
        return parts.join(' | ');
      })(),
    }));
}
