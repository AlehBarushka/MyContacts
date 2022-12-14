import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CONTACT_INFO, CREATE_CONTACT, HOME, LOGIN, SIGNUP } from './constants/screenNames';

import { onAuthStateChangedThunk } from './redux/actionCreators/auth';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Loader from './components/Loader';
import LogoutButton from './components/LogoutButton/LogoutButton';
import LogoTitle from './components/LogoTitle';
import ContactInfoScreen from './screens/ContactInfoScreen';
import CreateContactScreen from './screens/CreateContactScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isLoading = useSelector(state => state.app.isLoading);

  useEffect(() => {
    dispatch(onAuthStateChangedThunk());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <>
            <Stack.Screen
              name={HOME}
              options={{
                headerStyle: { backgroundColor: '#0782F9' },
                headerTitle: '',
                headerLeft: () => <LogoTitle />,
                headerRight: () => <LogoutButton />,
              }}
              component={HomeScreen}
            />
            <Stack.Screen
              name={CONTACT_INFO}
              options={{
                title: CONTACT_INFO,
                headerStyle: { backgroundColor: '#0782F9' },
                headerTintColor: '#ffff',
              }}
              component={ContactInfoScreen}
            />
            <Stack.Screen
              name={CREATE_CONTACT}
              options={{
                headerStyle: { backgroundColor: '#0782F9' },
                headerTintColor: '#ffff',
              }}
              component={CreateContactScreen}
            />
          </>
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
