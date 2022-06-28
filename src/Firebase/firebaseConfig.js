// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYSaI_yv3dF6Bps9hYbIuuMYpu4rqPR6k",
  authDomain: "proyectx-494ba.firebaseapp.com",
  databaseURL: "https://proyectx-494ba-default-rtdb.firebaseio.com",
  projectId: "proyectx-494ba",
  storageBucket: "proyectx-494ba.appspot.com",
  messagingSenderId: "473530709078",
  appId: "1:473530709078:web:86acf99b1c7e29dd2ff7f7",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const authentication = getAuth(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export default app;
