import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import CreateContactForm from '../components/CreateContactForm/CreateContactForm';

const CreateContactScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' && 'padding'}>
      <CreateContactForm />
    </KeyboardAvoidingView>
  );
};

export default CreateContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
