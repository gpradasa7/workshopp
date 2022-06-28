// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8dCDVedor6LbrpLBipDoetv9MN6nj6Wk",
  authDomain: "worshop3-4d924.firebaseapp.com",
  projectId: "worshop3-4d924",
  storageBucket: "worshop3-4d924.appspot.com",
  messagingSenderId: "1058635599625",
  appId: "1:1058635599625:web:07af462e07e5cbc7198dd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const authentication = getAuth(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export default app;
