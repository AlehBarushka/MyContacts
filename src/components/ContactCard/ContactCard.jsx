import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { getFirstLetter } from '../../utils/firstLetter';

const ContactCard = ({ firstName, lastName, phoneNumber }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.2}
      onPress={() => console.log('card')}>
      <View style={styles.card}>
        <View style={styles.cardCircle}>
          <Text style={styles.cardCircleText}>{getFirstLetter(firstName)}</Text>
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.row}>
            <Text style={styles.cardInfoName}>{`${firstName} `}</Text>
            <Text style={styles.cardInfoName}>{lastName}</Text>
          </View>
          <View>
            <Text style={styles.cardInfoPhone}>{phoneNumber}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardCircle: {
    backgroundColor: 'rgba(35, 211, 108, 0.445)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  cardCircleText: { fontSize: 22 },
  cardInfo: { marginLeft: 10 },
  cardInfoName: { fontSize: 18, fontWeight: '500' },
  row: { flexDirection: 'row' },
  cardInfoPhone: {},
});
