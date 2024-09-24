// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAC-W7V1DOA12u9hixVtcT3jIXt5didmoY',
  authDomain: 'nfc-business-card-generator.firebaseapp.com',
  projectId: 'nfc-business-card-generator',
  storageBucket: 'nfc-business-card-generator.appspot.com',
  messagingSenderId: '970242815578',
  appId: '1:970242815578:web:8b54460af92d264c1a8a63',
  measurementId: 'G-3JZ478NTES',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Analytics (optional)
// const analytics = getAnalytics(app);
