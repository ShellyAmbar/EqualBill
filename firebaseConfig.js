// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBOiLsqnT4LRVxsis8uK_Te9bddcrMnRwA',
  authDomain: 'equal-bill.firebaseapp.com',
  projectId: 'equal-bill',
  storageBucket: 'equal-bill.appspot.com',
  messagingSenderId: '712555168244',
  appId: '1:712555168244:web:baa5ae7deb5235723cb9a1',
  measurementId: 'G-GTPM9LPQVJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { analytics, db, auth };
