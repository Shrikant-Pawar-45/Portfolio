// Realtime Database: Profile_Details
const RTDB_BASE = 'https://portfolio-admin-5648b-default-rtdb.firebaseio.com/';

async function fetchJSON(path) {
  const url = `${RTDB_BASE}${path}.json`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`RTDB request failed: ${res.status}`);
  return res.json();
}

export async function fetchProfile() {
  try {
    const data = await fetchJSON('Profile_Details');
    let doc = {};
    if (Array.isArray(data)) {
      doc = data.find(Boolean) || {};
    } else if (data && typeof data === 'object') {
      const k = Object.keys(data)[0];
      doc = k ? (data[k] || {}) : {};
    }
    return normalize(doc);
  } catch (e) {
    console.error('[fetchProfile] RTDB error:', e);
    return defaults();
  }
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
