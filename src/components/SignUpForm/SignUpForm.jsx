import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { EMAIL_ERROR, PASSWORD_ERROR, USERNAME_ERROR } from '../../constants/errors';
import { isValidEmail, isValidPassword, isValidUserName } from '../../utils/formValidation';

import { signUpThunk } from '../../redux/actionCreators/auth';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.app.isLoading);

  const [registrationData, setRegistrationData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const handleChange = (name, value) => {
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const signUp = () => {
    if (
      isValidEmail(registrationData.email) &&
      isValidPassword(registrationData.password) &&
      isValidUserName(registrationData.userName)
    ) {
      return dispatch(signUpThunk(registrationData));
    }

    if (!isValidUserName(registrationData.userName)) {
      setValidationErrors(validationErrors => ({
        ...validationErrors,
        userName: USERNAME_ERROR,
      }));
    }

    if (!isValidEmail(registrationData.email)) {
      setValidationErrors(validationErrors => ({ ...validationErrors, email: EMAIL_ERROR }));
    }

    if (!isValidPassword(registrationData.password)) {
      setValidationErrors(validationErrors => ({
        ...validationErrors,
        password: PASSWORD_ERROR,
      }));
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => {
            handleChange('userName', text);
            setValidationErrors(validationErrors => ({ ...validationErrors, userName: '' }));
          }}
          style={styles.input}
          placeholder='Username'
        />
        {validationErrors.userName && <Text style={styles.error}>{validationErrors.userName}</Text>}
        <TextInput
          onChangeText={text => {
            handleChange('email', text);
            setValidationErrors(validationErrors => ({ ...validationErrors, email: '' }));
          }}
          style={styles.input}
          placeholder='Email'
        />
        {validationErrors.email && <Text style={styles.error}>{validationErrors.email}</Text>}
        <TextInput
          onChangeText={text => {
            handleChange('password', text);
            setValidationErrors(validationErrors => ({ ...validationErrors, password: '' }));
          }}
          style={styles.input}
          placeholder='Password'
          secureTextEntry
        />
        {validationErrors.password && <Text style={styles.error}>{validationErrors.password}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={signUp} style={styles.button} disabled={isLoading}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: '80%',
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
