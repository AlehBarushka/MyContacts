const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^[a-zA-Z0-9]{6,}$/;
const USERNAME_PATTERN = /\S/;
const FIRST_NAME_PATTERN = /^[0-9A-zА-я]{1,20}$/;
const PHONE_NUMBER_PATTERN = /^[0-9]{5,16}$/;

/**
 * @description This function checks the validity of the phone number.
 * @param {String} phoneNumber - Phone number for validation.
 * @returns {Boolean} true or false.
 */
export const isValidPhoneNumber = phoneNumber => {
  return PHONE_NUMBER_PATTERN.test(phoneNumber);
};

/**
 * @description This function checks the validity of the first name.
 * @param {String} firstName - First name for validation.
 * @returns {Boolean} true or false.
 */
export const isValidFirstName = firstName => {
  return FIRST_NAME_PATTERN.test(firstName);
};

/**
 * @description This function checks the validity of the email.
 * @param {String} email - Email for validation.
 * @returns {Boolean} true or false.
 */
export const isValidEmail = email => {
  return EMAIL_PATTERN.test(email);
};

/**
 * @description This function checks the validity of the password.
 * @param {String} password - Email for validation.
 * @returns {Boolean} true or false.
 */
export const isValidPassword = password => {
  return PASSWORD_PATTERN.test(password);
};

/**
 * @description This function checks the validity of the username.
 * @param {String} userName - Email for validation.
 * @returns {Boolean} true or false.
 */
export const isValidUserName = userName => {
  return USERNAME_PATTERN.test(userName);
};
