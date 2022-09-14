import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { EMAIL_ERROR, PASSWORD_ERROR } from '../../constants/errors';
import { isValidEmail, isValidPassword } from '../../utils/formValidation';

import { loginThunk } from '../../redux/actionCreators/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.app.isLoading);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const login = () => {
    if (isValidEmail(loginData.email) && isValidPassword(loginData.password)) {
      return dispatch(loginThunk(loginData.email, loginData.password));
    }

    if (!isValidEmail(loginData.email)) {
      setValidationErrors(validationErrors => ({ ...validationErrors, email: EMAIL_ERROR }));
    }

    if (!isValidPassword(loginData.password)) {
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
          autoCorrect={false}
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
        <TouchableOpacity onPress={login} style={styles.button} disabled={isLoading}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginForm;

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
