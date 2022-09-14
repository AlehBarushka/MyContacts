/**
 * @description The function returns the first character of the passed string.
 * @param {String} firstName - First name.
 * @returns {String} first letter.
 */

export const getFirstLetter = firstName => {
  return firstName[0];
};

/**
 * @description The function returns the full name.
 * @param {String} firstName - First name.
 * @param {String} lastName - Last name.
 * @returns {String} full name.
 */

export const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
