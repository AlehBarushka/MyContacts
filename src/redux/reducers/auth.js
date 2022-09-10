import { AUTH_FAILURE, AUTH_SUCCESS } from '../actions/auth';

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
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default authReducer;
