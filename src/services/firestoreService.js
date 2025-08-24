import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const getProfileDetails = async () => {
  try {
    const docRef = doc(db, 'profile_details', '1'); // Assuming a single document with ID '1'
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document in profile_details!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching profile details:', error);
    return null;
  }
};

const getContactDetails = async () => {
  try {
    const docRef = doc(db, 'contact_details', '1'); // Assuming a single document with ID '1'
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document in contact_details!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching contact details:', error);
    return null;
  }
};

export { getProfileDetails, getContactDetails };
