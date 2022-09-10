import { AUTH_FAILURE, AUTH_PENDING, AUTH_SUCCESS } from '../actions/auth';

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

export const onAuth = () => {
  return async dispatch => {
    dispatch(authPending());
    dispatch(loading());

    const unsubscribe = auth.onAuthStateChanged(async user => {
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

    return unsubscribe;
  };
};
