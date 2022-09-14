import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView, View, Text } from 'react-native';

import { getFirstLetter } from '../utils/names';

import { Entypo } from '@expo/vector-icons';

import EditContactForm from '../components/EditContactForm';

const ContactInfoScreen = ({ route: { params }, navigation }) => {
  const { id, title, firstName, lastName, phoneNumber } = params;
  const [isEditMode, setIsEditMode] = useState(false);

  const contactInfo = { firstName, lastName, phoneNumber };

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation, title]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' && 'padding'}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{getFirstLetter(firstName)}</Text>
      </View>
      <EditContactForm contactInfo={contactInfo} editMode={isEditMode} />
      {!isEditMode && (
        <TouchableOpacity onPress={() => setIsEditMode(true)} style={styles.button}>
          <Entypo name='edit' size={24} color='#ffff' />
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

export default ContactInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circle: {
    alignSelf: 'center',
    backgroundColor: 'rgba(35, 211, 108, 0.5)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
    marginVertical: 10,
  },
  circleText: { fontSize: 30, fontWeight: '500' },
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
