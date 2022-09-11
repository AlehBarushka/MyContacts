import {
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LOGIN } from '../constants/routes';

import LogoTitle from '../components/LogoTitle';
import SignUpForm from '../components/SignUpForm/SignUpForm';

const SignUpScreen = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate(LOGIN);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' && 'padding'}>
        <LogoTitle />
        <SignUpForm />
        <View style={styles.authTextContainer}>
          <Text style={styles.authText}>have an account? </Text>
          <TouchableOpacity onPress={handleNavigate}>
            <Text style={styles.authLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
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
