import { TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { logoutThunk } from '../../redux/actionCreators/auth';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutThunk());
  };

  const onPress = () => {
    Alert.alert('Logout', 'Do you really want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK', onPress: logout },
    ]);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name='logout' size={24} color='#ffff' />
    </TouchableOpacity>
  );
};

export default LogoutButton;
