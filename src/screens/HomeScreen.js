import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshControl, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { getContactsThunk } from '../redux/actionCreators/contacts';

import { CONTACT_INFO, CREATE_CONTACT } from '../constants/routes';
import { getFullName } from '../utils/names';

import ContactCard from '../components/ContactCard';

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);

  const handleNavigate = (route, params) => {
    navigation.navigate(route, params);
  };

  useEffect(() => {
    setRefreshing(true);
    dispatch(getContactsThunk()).then(() => {
      setRefreshing(false);
    });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} />}>
        {contacts.map(contact => {
          return (
            <ContactCard
              key={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phoneNumber={contact.phoneNumber}
              onPress={() =>
                handleNavigate(CONTACT_INFO, {
                  title: getFullName(contact.firstName, contact.lastName),
                  id: contact.id,
                  firstName: contact.firstName,
                  lastName: contact.lastName,
                  phoneNumber: contact.phoneNumber,
                })
              }
            />
          );
        })}
      </ScrollView>
      <TouchableOpacity onPress={() => handleNavigate(CREATE_CONTACT)} style={styles.button}>
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
