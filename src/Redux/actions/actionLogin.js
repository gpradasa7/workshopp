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

//-----------inicio sesion con Google----------------
export const GoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, google)
    .then(({user})=> {
      console.log(user)
      
    })
    .catch((error)=> {
      console.log(error)
    })
  }
}

//-----------inicio sesion con Facebook-----------------
export const FacebookLogin = () => {
  return (dispatch) => {
      const auth = getAuth()
      signInWithPopup(auth, facebook)
          .then(({ user }) => {
              console.log(user, user.displayName, user.email, ' usuario autorizado')
          })
          .catch((error) => {
              console.warn(error)
          })
  }
}