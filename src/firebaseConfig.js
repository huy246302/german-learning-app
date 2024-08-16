// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDacGmPG-hia1wbON1EwwVjByMx1E2vyc8",
  authDomain: "deutsch-lernen-6aef3.firebaseapp.com",
  projectId: "deutsch-lernen-6aef3",
  storageBucket: "deutsch-lernen-6aef3.appspot.com",
  messagingSenderId: "1072535300396",
  appId: "1:1072535300396:web:e7d5faa45f7553e1dea489",
  measurementId: "G-ZBQXBFFS9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
export default app;