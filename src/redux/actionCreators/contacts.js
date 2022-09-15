import {
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_PENDING,
  CREATE_CONTACT_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_PENDING,
  GET_CONTACTS_SUCCESS,
  UPDATE_CONTACT_FAILURE,
  UPDATE_CONTACT_PENDING,
  UPDATE_CONTACT_SUCCESS,
} from '../actionConstants/contacts';

import { firebaseDB } from '../../services/firebase/db';

import { loading, loadingSuccess } from './application';

const createContactPending = () => ({
  type: CREATE_CONTACT_PENDING,
});

const createContactSuccess = () => ({
  type: CREATE_CONTACT_SUCCESS,
});

const createContactFailure = error => ({
  type: CREATE_CONTACT_FAILURE,
  payload: error,
});

const getContactsPending = () => ({
  type: GET_CONTACTS_PENDING,
});

const getContactsSuccess = contacts => ({
  type: GET_CONTACTS_SUCCESS,
  payload: contacts,
});

const getContactsFailure = error => ({
  type: GET_CONTACTS_FAILURE,
  payload: error,
});

const updateContactPending = () => ({
  type: UPDATE_CONTACT_PENDING,
});

const updateContactSuccess = () => ({
  type: UPDATE_CONTACT_SUCCESS,
});

const updateContactFailure = error => ({
  type: UPDATE_CONTACT_FAILURE,
  payload: error,
});

//-----------------THUNKS-------------------//
export const createContactThunk = contactData => {
  return async dispatch => {
    try {
      dispatch(createContactPending());
      dispatch(loading());

      await firebaseDB.addContact(contactData);

      dispatch(createContactSuccess());
      dispatch(loadingSuccess());
    } catch (error) {
      dispatch(createContactFailure(error.message));
      dispatch(loadingSuccess());
    }
  };
};

export const getContactsThunk = () => {
  return async dispatch => {
    try {
      dispatch(getContactsPending());

      const contacts = await firebaseDB.getContacts();

      dispatch(getContactsSuccess(contacts));
    } catch (error) {
      dispatch(getContactsFailure(error.message));
    }
  };
};

export const updateContactThunk = (id, contactData) => {
  return async dispatch => {
    try {
      dispatch(updateContactPending());
      dispatch(loading());

      await firebaseDB.updateContact(id, contactData);

      dispatch(updateContactSuccess());
      dispatch(loadingSuccess());
    } catch (error) {
      dispatch(updateContactFailure(error.message));
      dispatch(loadingSuccess());
    }
  };
};
