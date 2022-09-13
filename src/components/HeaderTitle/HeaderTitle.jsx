import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HeaderTitle = ({ userName }) => {
  return (
    <View style={styles.container}>
      <AntDesign name='user' size={24} color='#0463bf' />
      <Text style={styles.text}>{userName}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    color: '#0463bf',
    marginLeft: 5,
    fontSize: 24,
  },
});
