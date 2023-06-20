import { getFirebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

// Initialize Firebase with project configuration
const firebaseConfig = getFirebaseConfig();
initializeApp(firebaseConfig);

export default async function firestoreWrite(messageText: string) {
  // Add a new message entry to the database
  try {
    await addDoc(collection(getFirestore(), 'messages'), {
      text: messageText,
      timestamp: serverTimestamp()
    });
  }
  catch(error) {
    console.error('Error writing new message to Firebase Database', error);
  }
}

