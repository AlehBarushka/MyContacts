import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './App';

import store from './redux/store';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
