import { useState } from 'react';
import { RefreshControl, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import ContactCard from '../components/ContactCard';
import { CONTACT } from '../constants/routes';
import { getFullName } from '../utils/names';

const contacts = [
  { id: 1, firsName: 'Alex', lastName: 'Ivanov', phoneNumber: '+52365456' },
  { id: 2, firsName: 'Max', lastName: 'Zaitsev', phoneNumber: '54564564' },
  { id: 3, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 4, firsName: 'Anton', lastName: 'Kutuzov', phoneNumber: '234524352' },
  { id: 5, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 6, firsName: 'Misha', lastName: 'Lapenko', phoneNumber: '234524352' },
  { id: 7, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 8, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 9, firsName: 'Ignat', lastName: 'Moroz', phoneNumber: '234524352' },
  { id: 10, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 11, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 12, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 13, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 14, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
  { id: 15, firsName: 'Aleh', lastName: 'Barushka', phoneNumber: '234524352' },
];

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleNavigate = params => {
    navigation.navigate(CONTACT, params);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      contacts.reverse();
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {contacts.map(contact => (
          <ContactCard
            onPress={() =>
              handleNavigate({
                id: contact.id,
                title: getFullName(contact.firsName, contact.lastName),
                firstName: contact.firsName,
                lastName: contact.lastName,
                phoneNumber: contact.phoneNumber,
              })
            }
            key={contact.id}
            firstName={contact.firsName}
            lastName={contact.lastName}
            phoneNumber={contact.phoneNumber}
          />
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => console.log('hello')} style={styles.button}>
        <MaterialCommunityIcons name='account-plus' size={24} color='#ffff' />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    position: 'relative',
  },
  scrollView: {
    paddingHorizontal: 15,
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
