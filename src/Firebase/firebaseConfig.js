// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIrXMALPnHPuWOsEMNdjyzPefloI8ROKE",
  authDomain: "buffalo-app-a0573.firebaseapp.com",
  projectId: "buffalo-app-a0573",
  storageBucket: "buffalo-app-a0573.appspot.com",
  messagingSenderId: "726778795980",
  appId: "1:726778795980:web:8e315db0ddb4493aceaf69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const authentication = getAuth(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export default app;
