// Firestore: Contact_Details
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from './firebase';

export async function fetchContact() {
  if (!db) return defaults();
  const col = collection(db, 'Contact_Details');
  const snap = await getDocs(query(col, limit(1)));
  if (snap.empty) return defaults();
  const doc = snap.docs[0].data() || {};
  return normalize(doc);
}

function defaults() {
  return {
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    linkedin: '',
    github: '',
    website: ''
  };
}

function normalize(p) {
  return {
    email: p.email || '',
    phone: p.phone || '',
    address: p.address || '',
    city: p.city || '',
    state: p.state || '',
    country: p.country || '',
    linkedin: p.linkedin || '',
    github: p.github || '',
    website: p.website || ''
  };
}
