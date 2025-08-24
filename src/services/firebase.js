// Firebase initialization (Firestore only)
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// If you want to move these to .env later, use import.meta.env.VITE_* variables
const firebaseConfig = {
  apiKey: "AIzaSyAIB9ffeQkNrkuH5Bs2M6VBjtmQ1WtwxKQ",
  authDomain: "portfolio-admin-5648b.firebaseapp.com",
  projectId: "portfolio-admin-5648b",
  // Use the standard storage bucket domain for Firebase Storage
  storageBucket: "portfolio-admin-5648b.appspot.com",
  messagingSenderId: "789701396356",
  appId: "1:789701396356:web:c6efb5cdf98c8cc0003fd1",
};

let app = null;
let db = null;

try {
  const required = ['apiKey', 'authDomain', 'projectId', 'appId'];
  const missing = required.filter((k) => !firebaseConfig[k] || String(firebaseConfig[k]).trim() === '');
  if (missing.length) {
    console.warn('[Firebase] Missing config values:', missing.join(', '));
  }
  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  db = getFirestore(app);
  // eslint-disable-next-line no-console
  console.debug('[Firebase] Initialized Firestore successfully');
} catch (e) {
  console.error('[Firebase] Initialization failed:', e);
}

export { db };
export default app;
