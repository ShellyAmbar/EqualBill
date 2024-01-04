// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import firestoreDB from 'firebase/firestore';
import storage from 'firebase/storage';

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
initializeApp(firebaseConfig);
const app = getApp();
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app, auth, firestoreDB, storage };
