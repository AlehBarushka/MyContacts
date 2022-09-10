import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signUpThunk } from '../../redux/actionCreators/auth';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.app.isLoading);

  const [registrationData, setRegistrationData] = useState({
    email: 'test@test.com',
    password: 'qwerty',
    userName: 'test',
  });

  const handleChange = (name, value) => {
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const signUp = () => {
    dispatch(signUpThunk(registrationData));
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => handleChange('userName', text)}
          style={styles.input}
          placeholder='Username'
        />
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
