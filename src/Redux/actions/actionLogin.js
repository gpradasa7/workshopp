import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authentication } from "../../Firebase/firebaseConfig";
import { getUserFromDatabase } from "../../modules/helpers";

import { typesLogin } from "../types/types";

//--------------Login---------------------------//
//---validar el ususario y contrasena-----------------------//
export const actionLoginAsync = (email, password) => {
  return (dispatch) => {
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
  }
}

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

//Verificación por código de autenticación
export const actionVerifyCodeAsync = (item) => {
  return (dispatch) => {
    const confirmationResult = window.confirmationResult;
    confirmationResult.confirm(item.code).then(async (result) => {
      // User signed in successfully.
      // const user = result.user;
      const userData = await getUserFromDatabase(item.email);
      dispatch(actionUpdateUserInfoSync(userData));
      dispatch(actionAuthenticatedSync());
    });
  }
}

export const actionAuthenticatedSync = (item) => {
  return {
      type: typesLogin.authenticated
  }
}

export const actionUpdateUserInfoSync = (item) => {
  return {
      type: typesLogin.updateUserInfo,
      payload: {
          ...item
      }
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
