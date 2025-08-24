// Firestore: Profile_Details
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from './firebase';

export async function fetchProfile() {
  if (!db) return defaults();
  const col = collection(db, 'Profile_Details');
  const snap = await getDocs(query(col, limit(1)));
  if (snap.empty) return defaults();
  const doc = snap.docs[0].data() || {};
  return normalize(doc);
}

function normalize(p) {
  return {
    firstName: p.firstName || '',
    lastName: p.lastName || '',
    email: p.email || '',
    phone: p.phone || '',
    location: p.location || '',
    bio: p.bio || '',
    role: p.role || '',
    avatar: p.avatar || '',
    userId: p.userId || null,
    updatedAt: p.updatedAt || null,
  };
}

function defaults() {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    role: '',
    avatar: '',
    userId: null,
    updatedAt: null,
  };
}
