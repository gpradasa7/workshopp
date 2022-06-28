import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authentication} from "../../Firebase/firebaseConfig";

import { typesLogin } from "../types/types";

//--------------Login---------------------------//
//---validar el ususario y contrasena-----------------------//
export const actionLoginAsync = (email, password) => {
  return dispatch => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(({ user }) => {
        dispatch(actionLoginSync(email, password));
        dispatch(actionLoginErrorSync(false));
        console.log(`Bienvenido usuario encontrado ${user.displayName}`);
      })
      .catch(error => {
        // console.warn(error, 'Usuario No autorizado')
        dispatch(actionLoginErrorSync(true));
      });
  };
};

export const actionLoginSync = (email, pass) => {
  return {
    type: typesLogin.login,
    payload: { email, pass },
  };
};

export const actionLoginErrorSync = (error) => {
  return {
      type: typesLogin.loginError,
      payload: { error }
  }
}

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
