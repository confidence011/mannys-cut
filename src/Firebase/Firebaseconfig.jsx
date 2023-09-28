import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEST921aiWwqG2s9AeVPftgEGcIsEGxHk",
  authDomain: "stelblogsite.firebaseapp.com",
  projectId: "stelblogsite",
  storageBucket: "stelblogsite.appspot.com",
  messagingSenderId: "318855763352",
  appId: "1:318855763352:web:d944f5dfbdec90df4807ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app); // for storing data into firestore
export default app;
