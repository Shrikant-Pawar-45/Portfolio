// Firestore: Education_Details
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export async function fetchEducation() {
  if (!db) return [];
  const col = collection(db, 'Education_Details');
  // Try order ascending if 'order' exists, else fallback to createdAt desc
  try {
    const snap = await getDocs(query(col, orderBy('order', 'asc')));
    const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    if (items.length) {
      console.debug(`[Education] order asc items: ${items.length}`);
      return normalize(items);
    }
  } catch (_) {}
  try {
    const snap = await getDocs(query(col, orderBy('createdAt', 'desc')));
    const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    if (items.length) {
      console.debug(`[Education] createdAt desc items: ${items.length}`);
      return normalize(items);
    }
  } catch (_) {}
  const snap = await getDocs(col);
  const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  console.debug(`[Education] unordered items: ${items.length}`);
  return normalize(items);
}

function flattenDocs(docs) {
  const out = [];
  for (const d of docs) {
    if (Array.isArray(d.education)) {
      for (const e of d.education) out.push(e);
    } else {
      out.push(d);
    }
  }
  return out;
}

function normalize(items) {
  return items
    .filter((e) => e && (e.institution || e.title))
    .map((e) => ({
      institution: e.institution || e.school || 'Institution',
      qualification: e.qualification || e.degree || e.title || [e.field ? `${e.field}` : ''].filter(Boolean).join(' '),
      start: e.start || e.startDate || (e.duration ? String(e.duration) : ''),
      end: e.end || e.endDate || '',
      gradeLabel: e.gradeLabel || 'Grade',
      grade: e.grade || e.cgpa || e.percentage || '',
    }));
}
