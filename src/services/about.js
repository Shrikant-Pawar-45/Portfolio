// Firestore data access for About details
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from './firebase';

// Returns a single about object from the About_Details collection
export async function fetchAbout() {
  if (!db) return defaults();
  const col = collection(db, 'About_Details');
  // We assume only one active doc; take the first
  const snap = await getDocs(query(col, limit(1)));
  if (snap.empty) return defaults();
  const doc = snap.docs[0].data() || {};
  return normalize(doc);
}

function normalize(d) {
  return {
    description: d.description || defaults().description,
    experience: d.experience || '',
    goals: d.goals || '',
    skills: {
      title: d?.skills?.title || '',
      subtitle: d?.skills?.subtitle || '',
    },
    updatedAt: d.updatedAt || null,
    userId: d.userId || null,
  };
}

function defaults() {
  return {
    description:
      "I'm a B.Tech Computer Science student passionate about building products across web, backend, and AI.",
    experience: '',
    goals: '',
    skills: { title: '', subtitle: '' },
    updatedAt: null,
    userId: null,
  };
}
