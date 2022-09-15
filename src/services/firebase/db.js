import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { auth, myApp } from './config';

export const db = getFirestore(myApp);

/**
 * @typedef {Object} ContactData
 * @property {String} ContactData.firstName - First name of contact.
 * @property {String} ContactData.lastName - Last name of contact.
 * @property {String} ContactData.phoneNumber - Phone number of contact.
 */

export const firebaseDB = {
  /**
   * @description The method add contact to contacts collection.
   * @param {ContactData} contactData - An object with contact data.
   */
  async addContact(contactData) {
    const contactObject = { contactOwner: auth.currentUser.email, ...contactData };
    // creating a document with the owner field(email of current authorized user)
    const responseData = await addDoc(collection(db, 'contacts'), contactObject);

    // update the document - add field id (ID corresponds to the id of the created document)
    const washingtonRef = doc(db, 'contacts', responseData.id);

    await updateDoc(washingtonRef, {
      id: responseData.id,
    });
  },

  /**
   * @description The method gets all data from contacts collection.
   * @returns {Array} array of contacts object.
   */
  async getContacts() {
    const contacts = [];

    // make query string parameters in the contacts collection
    const q = query(
      collection(db, 'contacts'),
      orderBy('firstName', 'asc'),
      where('contactOwner', '==', auth.currentUser.email),
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      contacts.push(doc.data());
    });

    return contacts;
  },

  /**
   * @description The method update contact from contacts collection.
   * @param {String} id - Id of updated contact.
   * @param {ContactData} contactData - An object with contact data.
   */

  async updateContact(id, contactData) {
    const washingtonRef = doc(db, 'contacts', id);

    await updateDoc(washingtonRef, contactData);
  },
};
