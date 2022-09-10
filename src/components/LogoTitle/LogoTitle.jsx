import { View, Text, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <AntDesign name='contacts' size={30} color='#0463bf' />
      <Text style={styles.text}>My Contacts</Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    color: '#0463bf',
    marginLeft: 5,
    fontSize: 30,
  },
});
