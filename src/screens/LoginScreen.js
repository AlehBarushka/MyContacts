import {
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SIGNUP } from '../constants/routes';

import LoginForm from '../components/LoginForm';
import LogoTitle from '../components/LogoTitle';

const LoginScreen = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate(SIGNUP);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' && 'padding'}>
      <LogoTitle authLogo />
      <LoginForm />
      <View style={styles.authTextContainer}>
        <Text style={styles.authText}>don't have an account? </Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text style={styles.authLink}>Registration</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authTextContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authText: { color: '#696969' },
  authLink: {
    fontWeight: '700',
    color: '#0463bf',
  },
});
