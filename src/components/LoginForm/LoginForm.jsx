import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { loginThunk } from '../../redux/actionCreators/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.app.isLoading);

  const [loginData, setLoginData] = useState({
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
    dispatch(loginThunk(loginData.email, loginData.password));
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => handleChange('email', text)}
          style={styles.input}
          placeholder='Email'
        />
        <TextInput
          onChangeText={text => handleChange('password', text)}
          style={styles.input}
          placeholder='Password'
          secureTextEntry
        />
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
    marginTop: 5,
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
});
