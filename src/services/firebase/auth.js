import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from './config';

/**
 * @typedef {Object} RegistrationData
 * @property {String} RegistrationData.email - Existing email.
 * @property {String} RegistrationData.password - Password. Minimum of 6 characters.
 * @property {String} RegistrationData.userName - Username.
 */

export const firebaseAuth = {
  /**
   * @description The method creates a new user.
   * @param {RegistrationData} registrationData - An object with registration data (email, password, username).
   * @returns {Object} An object with a user's data.
   */
  async registerNewUser({ email, password, userName }) {
    const resData = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: userName,
    });

    const user = {
      id: resData.user.uid,
      userName: resData.user.displayName,
      email: resData.user.email,
    };

    return user;
  },

  /**
   * @description The method logins of an existing user.
   * @param {String} email - Email of current user.
   * @param {String} password - Password of current user.
   * @returns {Object} An object with a user's data.
   */
  async logIn(email, password) {
    const resData = await signInWithEmailAndPassword(auth, email, password);

    const user = {
      id: resData.user.uid,
      userName: resData.user.displayName,
      email: resData.user.email,
    };

    return user;
  },

  /**
   * @description The method logout of an existing user.
   */
  async logOut() {
    await signOut(auth);
  },
};
