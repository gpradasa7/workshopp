// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyV-FTlvz2tL8K1B8RHgQ-NmbE0tTYRDc",
  authDomain: "workshop-27ea6.firebaseapp.com",
  projectId: "workshop-27ea6",
  storageBucket: "workshop-27ea6.appspot.com",
  messagingSenderId: "784220564530",
  appId: "1:784220564530:web:3e167f17a5e23d9784a02b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const authentication = getAuth(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export default app;
