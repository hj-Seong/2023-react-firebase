// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "firestore-7f54d.firebaseapp.com",
  projectId: "firestore-7f54d",
  storageBucket: "firestore-7f54d.appspot.com",
  messagingSenderId: "201560788188",
  appId: "1:201560788188:web:d7a2f4805f93d62efcb819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// db를 내보내서 작성
export const db = getFirestore(app);