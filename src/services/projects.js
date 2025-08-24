// Firestore data access for Projects
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

// Expected Firestore structure: collection "projects" with docs like:
// { image: string, title: string, description: string, link: string, createdAt?: Timestamp, order?: number, published?: boolean }
export async function fetchProjects() {
  if (!db) return [];
  const col = collection(db, 'Project_Details');

  // 1) Prefer explicit manual ordering by `order` ascending
  try {
    const snap = await getDocs(query(col, orderBy('order', 'asc')));
    let items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    if (items.length) {
      console.debug(`[Projects] order asc items: ${items.length}`);
      return normalize(items);
    }
  } catch (_) {
    // ignore and fallback
  }

  // 2) Fallback to recency by `createdAt` descending (if present)
  try {
    const snap = await getDocs(query(col, orderBy('createdAt', 'desc')));
    let items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    if (items.length) {
      console.debug(`[Projects] createdAt desc items: ${items.length}`);
      return normalize(items);
    }
  } catch (_) {
    // ignore and fallback
  }

  // 3) Final fallback: unordered
  const snap = await getDocs(col);
  const items = flattenDocs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  console.debug(`[Projects] unordered items: ${items.length}`);
  return normalize(items);
}

function flattenDocs(docs) {
  const out = [];
  for (const d of docs) {
    if (Array.isArray(d.projects)) {
      for (const p of d.projects) out.push(p);
    } else {
      out.push(d);
    }
  }
  return out;
}

function normalize(items) {
  return items
    .filter((p) => {
      if (!p || !p.title) return false;
      // Allow when `published` is true OR status indicates visibility OR no flag present
      const status = String(p.status || '').toLowerCase();
      const visibleByStatus = ['published', 'active', 'public', 'visible'].includes(status);
      return p.published === undefined || p.published === true || visibleByStatus;
    })
    .map((p) => {
      // Coerce and map alternative keys
      const rawObjective = p.objective ?? p.Objective ?? p.objectives ?? p.goal ?? '';
      const rawStatus = p.status ?? p.Status ?? p.state ?? '';
      const rawType = p.type ?? p.Type ?? p.category ?? p.kind ?? '';
      const rawSkills = p.skills ?? p.Skills ?? p.tech ?? p.technologies ?? p.stack ?? p.tags ?? [];

      const skills = Array.isArray(rawSkills)
        ? rawSkills
        : typeof rawSkills === 'string'
          ? (rawSkills.includes(',') || rawSkills.includes(';') || rawSkills.includes('|') || rawSkills.includes('/')
              ? rawSkills.split(/[;,|/]/)
              : rawSkills.trim().includes(' ')
                ? rawSkills.split(/\s+/)
                : [rawSkills]
            )
              .map((s) => s.trim())
              .filter(Boolean)
          : [];

      const title = (p.title || 'Untitled').toString().trim();
      const description = (p.description || p.subtitle || '').toString().trim();
      const link = (p.link || p.url || '#').toString().trim();

      return {
        // Core
        image: p.image || p.imageUrl || p.thumbnail || '',
        imageUrl: p.imageUrl || p.image || p.thumbnail || '',
        title,
        description,
        link,
        // Extras for modal
        objective: typeof rawObjective === 'string' ? rawObjective.trim() : rawObjective,
        status: typeof rawStatus === 'string' ? rawStatus.trim() : rawStatus,
        skills,
        type: typeof rawType === 'string' ? rawType.trim() : rawType,
        start: (p.start || p.startedAt || p.startDate || p.from || '').toString().trim(),
        end: (p.end || p.endedAt || p.endDate || p.to || '').toString().trim(),
        published: p.published !== undefined ? p.published : undefined,
      };
    });
}
