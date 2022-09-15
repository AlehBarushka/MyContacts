import {
  CREATE_CONTACT_FAILURE,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_SUCCESS,
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
    case GET_CONTACTS_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default contactsReducer;
