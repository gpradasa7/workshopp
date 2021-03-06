import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getUserFromDatabase } from "../../modules/helpers";
import {
  authentication,
  facebook,
  google,
} from "../../Firebase/firebaseConfig";

import { typesLogin } from "../types/types";

//--------------Login---------------------------//
//---validar el ususario y contrasena-----------------------//
export const actionLoginAsync = (email, password) => {
  return dispatch => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(({ user }) => {
        dispatch(actionLoginSync({ email, password, error: false }));
        // console.log(`Bienvenido usuario encontrado ${user.displayName}`);
      })
      .catch(error => {
        // console.warn(error, 'Usuario No autorizado')
        dispatch(actionLoginSync({ email, password, error: false }));
      });
  };
};

export const actionLoginSync = ({ email, password, error }) => {
  return {
    type: typesLogin.login,
    payload: { email, password, error },
  };
};

export const actionLoginErrorSync = error => {
  return {
    type: typesLogin.loginError,
    payload: { error },
  };
};

//Verificación por código de autenticación
export const actionVerifyCodeAsync = item => {
  return dispatch => {
    const confirmationResult = window.confirmationResult;
    confirmationResult.confirm(item.code).then(async result => {
      // User signed in successfully.
      // const user = result.user;
      const userData = await getUserFromDatabase(item.email);
      dispatch(actionUpdateUserInfoSync({ ...userData, error: false }));
      dispatch(actionAuthenticatedSync());
    }).catch(error => {
      dispatch(actionUpdateUserInfoSync({ error: true }));
    });
  };
};

export const actionAuthenticatedSync = item => {
  return {
    type: typesLogin.authenticated,
  };
};

export const actionUpdateUserInfoSync = item => {
  return {
    type: typesLogin.updateUserInfo,
    payload: {
      ...item,
    },
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
  return dispatch => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//-----------inicio sesion con Facebook-----------------
export const FacebookLogin = () => {
  return dispatch => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        console.log(user, user.displayName, user.email, " usuario autorizado");
      })
      .catch(error => {
        console.warn(error);
      });
  };
};
