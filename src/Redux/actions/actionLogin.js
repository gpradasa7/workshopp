import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { google } from "../../Firebase/firebaseConfig";

import { typesLogin } from "../types/types";

//--------------Login---------------------------//
//---validar el ususario y contrasena-----------------------//
export const actionLoginAsync = (email, pass) => {
  return dispatch => {
    console.log(email, pass);
    //
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(actionLoginSync(email, pass));
        console.log(user.displayName, "Bienvenido usuario encontrado");
      })
      .catch(error => {
        console.warn(error, "Usuario No autorizado");
      });
  };
};

export const actionLoginSync = (email, pass) => {
  return {
    type: typesLogin.login,
    payload: { email, pass },
  };
};
//--------------Logout---------------------------//
export const actionLogoutAsyn = () => {
  return dispatch => {
    const auth = getAuth();
    signOut(auth)
      .then(({ user }) => {
        dispatch(actionLogoutSyn());
      })
      .catch(error => {
        console.warn(error, "");
      });
  };
};

export const actionLogoutSyn = () => {
  return {
    type: typesLogin.logout,
  };
};
