import { LOGOUT_SUCCESS } from '../actionConstants/auth';
import {
  CREATE_CONTACT_FAILURE,
  DELETE_CONTACT_FAILURE,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_SUCCESS,
  UPDATE_CONTACT_FAILURE,
} from '../actionConstants/contacts';

const initialState = {
  data: [],
  currentContact: {},
  error: null,
};

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_SUCCESS:
      return { ...state, data: payload, error: null };

    case CREATE_CONTACT_FAILURE:
    case DELETE_CONTACT_FAILURE:
    case UPDATE_CONTACT_FAILURE:
    case GET_CONTACTS_FAILURE:
      return { ...state, error: payload };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default contactsReducer;
