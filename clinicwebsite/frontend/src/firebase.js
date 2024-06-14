// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE40bM7OyOLa-nNIvmVlHmq2d5o4pttec",
  authDomain: "clinicwebsite-42a0b.firebaseapp.com",
  projectId: "clinicwebsite-42a0b",
  storageBucket: "clinicwebsite-42a0b.appspot.com",
  messagingSenderId: "930068325377",
  appId: "1:930068325377:web:531c13e6918ed97ad28c00",
  measurementId: "G-JHD8YVY1XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);