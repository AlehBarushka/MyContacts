import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FIRST_NAME_ERROR, PHONE_NUMBER_ERROR } from '../../constants/errors';
import { isValidFirstName, isValidPhoneNumber } from '../../utils/formValidation';

import { updateContactThunk } from '../../redux/actionCreators/contacts';

const EditContactForm = ({
  contactInfo: { id, firstName, lastName, phoneNumber },
  editMode,
  goBack,
}) => {
  const dispatch = useDispatch();
  const [contactData, setContactData] = useState({
    firstName,
    lastName,
    phoneNumber,
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: '',
    phoneNumber: '',
  });

  const handleChange = (name, value) => {
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (isValidFirstName(contactData.firstName) && isValidPhoneNumber(contactData.phoneNumber)) {
      dispatch(updateContactThunk(id, contactData));

      return goBack();
    }

    if (!isValidFirstName(contactData.firstName)) {
      setValidationErrors(validationErrors => ({
        ...validationErrors,
        firstName: FIRST_NAME_ERROR,
      }));
    }

    if (!isValidPhoneNumber(contactData.phoneNumber)) {
      setValidationErrors(validationErrors => ({
        ...validationErrors,
        phoneNumber: PHONE_NUMBER_ERROR,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First name:</Text>
        <TextInput
          onChangeText={text => {
            handleChange('firstName', text);
            setValidationErrors(validationErrors => ({ ...validationErrors, firstName: '' }));
          }}
          editable={editMode}
          style={editMode ? styles.input : styles.inputDisable}
          value={contactData.firstName}
        />
        {validationErrors.firstName && (
          <Text style={styles.error}>{validationErrors.firstName}</Text>
        )}
        <Text style={styles.label}>Last name:</Text>
        <TextInput
          onChangeText={text => handleChange('lastName', text)}
          editable={editMode}
          style={editMode ? styles.input : styles.inputDisable}
          value={contactData.lastName}
        />
        <Text style={styles.label}>Phone number:</Text>
        <TextInput
          onChangeText={text => {
            handleChange('phoneNumber', text);
            setValidationErrors(validationErrors => ({ ...validationErrors, phoneNumber: '' }));
          }}
          editable={editMode}
          style={editMode ? styles.input : styles.inputDisable}
          keyboardType='numeric'
          value={contactData.phoneNumber}
        />
        {validationErrors.phoneNumber && (
          <Text style={styles.error}>{validationErrors.phoneNumber}</Text>
        )}
      </View>
      {editMode && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default EditContactForm;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 20,
  },
  label: { marginLeft: 10, marginTop: 10, fontSize: 16, color: 'gray' },
  input: {
    fontSize: 18,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  inputDisable: {
    borderWidth: 1,
    borderColor: '#5a585886',
    color: 'black',
    paddingHorizontal: 15,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
  },
  error: {
    marginTop: 5,
    marginHorizontal: 10,
    color: '#d1565c',
  },
});
