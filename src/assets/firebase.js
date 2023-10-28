// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE7PmL8fW_xqtWioc2vSTQwgM77sKsUkM",
  authDomain: "colmena-restaurant.firebaseapp.com",
  projectId: "colmena-restaurant",
  storageBucket: "colmena-restaurant.appspot.com",
  messagingSenderId: "131837902401",
  appId: "1:131837902401:web:cec8f3816b41f8dc31d0c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)