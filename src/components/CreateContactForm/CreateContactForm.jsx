import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { FIRST_NAME_ERROR, PHONE_NUMBER_ERROR } from '../../constants/errors';
import { createContactThunk } from '../../redux/actionCreators/contacts';

import { isValidFirstName, isValidPhoneNumber } from '../../utils/formValidation';

const CreateContactForm = ({ goBack }) => {
  const dispatch = useDispatch();

  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
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
      dispatch(createContactThunk(contactData));

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
          autoFocus
          value={contactData.firstName}
          style={styles.input}
        />
        {validationErrors.firstName && (
          <Text style={styles.error}>{validationErrors.firstName}</Text>
        )}
        <Text style={styles.label}>Last name:</Text>
        <TextInput
          onChangeText={text => handleChange('lastName', text)}
          value={contactData.lastName}
          style={styles.input}
        />
        <Text style={styles.label}>Phone number:</Text>
        <TextInput
          onChangeText={text => {
            handleChange('phoneNumber', text);
            setValidationErrors(validationErrors => ({ ...validationErrors, phoneNumber: '' }));
          }}
          value={contactData.phoneNumber}
          style={styles.input}
          keyboardType='numeric'
        />
        {validationErrors.phoneNumber && (
          <Text style={styles.error}>{validationErrors.phoneNumber}</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateContactForm;

const styles = StyleSheet.create({
  container: {
    width: '80%',
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
  buttonContainer: {
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
