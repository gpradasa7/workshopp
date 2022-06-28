// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyAyV-FTlvz2tL8K1B8RHgQ-NmbE0tTYRDc",
  authDomain: "workshop-27ea6.firebaseapp.com",
  projectId: "workshop-27ea6",
  storageBucket: "workshop-27ea6.appspot.com",
  messagingSenderId: "784220564530",
  appId: "1:784220564530:web:3e167f17a5e23d9784a02b"
=======
  apiKey: "AIzaSyCYSaI_yv3dF6Bps9hYbIuuMYpu4rqPR6k",
  authDomain: "proyectx-494ba.firebaseapp.com",
  databaseURL: "https://proyectx-494ba-default-rtdb.firebaseio.com",
  projectId: "proyectx-494ba",
  storageBucket: "proyectx-494ba.appspot.com",
  messagingSenderId: "473530709078",
  appId: "1:473530709078:web:86acf99b1c7e29dd2ff7f7",
>>>>>>> 7283fc4b765e0e7a7474b8ceae343c3a5f4d70f0
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const authentication = getAuth(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export default app;
