import { LOADING_PENDING, LOADING_SUCCESS } from '../actions/application';

const initialState = {
  isLoading: false,
  error: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PENDING:
      return { ...state, isLoading: true };

    case LOADING_SUCCESS:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default appReducer;
