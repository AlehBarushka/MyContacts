import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HOME, INITIAL_ROUTE, LOGIN, SIGNUP } from './constants/routes';
import { onAuth } from './redux/actionCreators/auth';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Loader from './components/Loader';

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isLoading = useSelector(state => state.app.isLoading);

  useEffect(() => {
    const unsubscribeAuthListener = dispatch(onAuth()).then(unsubscribe => {
      return unsubscribe;
    });

    return () => {
      unsubscribeAuthListener.then(unsubscribeFunction => {
        unsubscribeFunction();
      });
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={INITIAL_ROUTE}>
        {isAuth ? (
          <Stack.Screen
            name={HOME}
            options={{ headerTitleAlign: 'center' }}
            component={HomeScreen}
          />
        ) : (
          <>
            <Stack.Screen name={LOGIN} options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name={SIGNUP} options={{ headerShown: false }} component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
