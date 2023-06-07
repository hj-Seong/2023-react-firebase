// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore}  from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKbiUvoi8l0hQmkg_8vXNPMpKw-Is72bI",
  authDomain: "firestore-7f54d.firebaseapp.com",
  projectId: "firestore-7f54d",
  storageBucket: "firestore-7f54d.appspot.com",
  messagingSenderId: "201560788188",
  appId: "1:201560788188:web:d7a2f4805f93d62efcb819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 인증에 관한 내용 추가
export const auth = getAuth(app);

// 데이터베이스에 관한 내용 추가
export const db = getFirestore(app);