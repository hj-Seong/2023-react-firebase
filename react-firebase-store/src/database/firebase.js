// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ex-firebase-98e6c.firebaseapp.com",
  projectId: "ex-firebase-98e6c",
  storageBucket: "ex-firebase-98e6c.appspot.com",
  messagingSenderId: "431398813672",
  appId: "1:431398813672:web:d001a488228e7a94862e5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)