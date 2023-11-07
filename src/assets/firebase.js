// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4-4qqa8NKySeq3Ni9ZRwkWWUU08wJCco",
  authDomain: "colmena-rest.firebaseapp.com",
  projectId: "colmena-rest",
  storageBucket: "colmena-rest.appspot.com",
  messagingSenderId: "998192182551",
  appId: "1:998192182551:web:c111d4bf929d5b23543352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)