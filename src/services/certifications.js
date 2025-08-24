// Firestore: Certification_Details
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export async function fetchCertifications() {
  if (!db) return [];
  const col = collection(db, 'Certification_Details');
  try {
    const snap = await getDocs(query(col, orderBy('order', 'asc')));
    const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    if (items.length) {
      console.debug(`[Certifications] order asc items: ${items.length}`);
      return normalize(items);
    }
  } catch (_) {}
  try {
    const snap = await getDocs(query(col, orderBy('createdAt', 'desc')));
    const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    if (items.length) {
      console.debug(`[Certifications] createdAt desc items: ${items.length}`);
      return normalize(items);
    }
  } catch (_) {}
  const snap = await getDocs(col);
  const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  console.debug(`[Certifications] unordered items: ${items.length}`);
  return normalize(items);
}

function flattenDocs(docs) {
  const out = [];
  for (const d of docs) {
    if (Array.isArray(d.certifications)) {
      for (const c of d.certifications) out.push(c);
    } else {
      out.push(d);
    }
  }
  return out;
}

function normalize(items) {
  return items
    .filter((c) => c && (c.title || c.name || c.provider || c.organization || c.organisation || c.image || c.url || c.imageUrl))
    .map((c) => ({
      image: c.image || c.imageUrl || c.url || '',
      alt: c.alt || c.title || c.name || 'Certificate',
      title: c.title || c.name || 'Certificate',
      provider: c.provider || c.organization || c.organisation || c.issuer || '',
      date: c.date || c.issueDate || c.year || '',
      verifyUrl: c.verifyUrl || c.url || c.link || c.certificateUrl || c.credentialUrl|| '',
    }));
}
