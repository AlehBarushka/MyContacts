import { View, Text, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const LogoTitle = ({ authLogo }) => {
  return (
    <View style={authLogo ? styles.containerForAuthScreen : styles.containerForHeader}>
      <AntDesign name='contacts' size={30} color={authLogo ? '#0463bf' : '#ffff'} />
      <Text style={authLogo ? styles.textForAuthScreen : styles.textForHeader}>My Contacts</Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  containerForAuthScreen: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerForHeader: { flexDirection: 'row', alignItems: 'center' },
  textForAuthScreen: {
    fontWeight: '500',
    color: '#0463bf',
    marginLeft: 5,
    fontSize: 30,
  },
  textForHeader: {
    paddingVertical: 15,
    fontWeight: '500',
    color: '#ffff',
    marginLeft: 5,
    fontSize: 24,
  },
});
