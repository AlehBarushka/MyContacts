import {
  AUTH_FAILURE,
  AUTH_PENDING,
  AUTH_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
} from '../actionConstants/auth';

import { firebaseAuth } from '../../services/firebase/auth';
import { auth } from '../../services/firebase/config';

import { loading, loadingSuccess } from './application';

export const authPending = () => {
  return {
    type: AUTH_PENDING,
  };
};

export const authSuccess = userData => {
  return {
    type: AUTH_SUCCESS,
    payload: userData,
  };
};

export const authFailure = error => ({
  type: AUTH_FAILURE,
  payload: error,
});

export const logoutPending = () => {
  return {
    type: LOGOUT_PENDING,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutFailure = error => {
  return {
    type: LOGOUT_FAILURE,
    payload: error,
  };
};

//-----------------THUNKS-------------------//
export const loginThunk = (email, password) => {
  return async dispatch => {
    try {
      dispatch(authPending());
      dispatch(loading());

      const data = await firebaseAuth.logIn(email, password);

      dispatch(authSuccess(data));

      dispatch(loadingSuccess());
    } catch ({ code }) {
      dispatch(authFailure(code));

      dispatch(loadingSuccess());
    }
  };
};

export const signUpThunk = ({ email, password, userName }) => {
  return async dispatch => {
    try {
      dispatch(authPending());
      dispatch(loading());

      const data = await firebaseAuth.registerNewUser({ email, password, userName });

      dispatch(authSuccess(data));

      dispatch(loadingSuccess());
    } catch ({ code }) {
      dispatch(authFailure(code));

      dispatch(loadingSuccess());
    }
  };
};

export const onAuthStateChangedThunk = () => {
  return async dispatch => {
    dispatch(authPending());
    dispatch(loading());

    const unsubscribe = auth.onAuthStateChanged(user => {
      try {
        if (user) {
          const currentUser = {
            id: user.uid,
            userName: user.displayName,
            email: user.email,
          };

          dispatch(authSuccess(currentUser));
          dispatch(loadingSuccess());
        } else {
          dispatch(authFailure('User is not authorized!'));
          dispatch(loadingSuccess());
        }
      } catch (error) {
        dispatch(authFailure(error));
        dispatch(loadingSuccess());
      }
    });

    //this allows us to unsubscribe from the listener immediately after the first rendering
    unsubscribe();
  };
};

export const logoutThunk = () => {
  return async dispatch => {
    try {
      dispatch(logoutPending());
      dispatch(loading());

      await firebaseAuth.logOut();

      dispatch(logoutSuccess());
      dispatch(loadingSuccess());
    } catch (error) {
      dispatch(logoutFailure(error));
      dispatch(loadingSuccess());
    }
  };
};
