import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import ContactForm from '../components/ContactForm';

const ContactScreen = ({ route: { params }, navigation }) => {
  const { id, title, firstName, lastName, phoneNumber } = params;

  const [isEditMode, setIsEditMode] = useState(false);

  const contactInfo = { firstName, lastName, phoneNumber };

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation, title]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' && 'padding'}>
      <ContactForm contactInfo={contactInfo} editMode={isEditMode} />
      <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)} style={styles.button}>
        <Entypo name='edit' size={24} color='#ffff' />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 60,
    backgroundColor: 'orange',
  },
});
