import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { getFirstLetter } from '../../utils/names';

const ContactForm = ({ contactInfo: { firstName, lastName, phoneNumber }, editMode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{getFirstLetter(firstName)}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First name:</Text>
        <TextInput
          editable={editMode}
          style={editMode ? styles.input : styles.inputDisable}
          value={firstName}
        />
        <Text style={styles.label}>Last name:</Text>
        <TextInput
          editable={editMode}
          style={editMode ? styles.input : styles.inputDisable}
          value={lastName}
        />
        <Text style={styles.label}>Phone number:</Text>
        <TextInput
          editable={editMode}
          style={editMode ? styles.input : styles.inputDisable}
          keyboardType='numeric'
          value={phoneNumber}
        />
      </View>
      {editMode && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => console.log('Saved')} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  circle: {
    alignSelf: 'center',
    backgroundColor: 'rgba(35, 211, 108, 0.445)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
    marginVertical: 15,
  },
  circleText: { fontSize: 30, fontWeight: '500' },
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
    marginLeft: 15,
    color: '#d1565c',
  },
});
