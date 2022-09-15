import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import App from './App';

import store from './redux/store';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
