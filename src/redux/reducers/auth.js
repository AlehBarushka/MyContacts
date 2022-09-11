import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from './../actionConstants/auth';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS:
      return { ...state, user: payload, isAuthenticated: true, error: null };

    case AUTH_FAILURE:
    case LOGOUT_FAILURE:
      return { ...state, error: payload };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
