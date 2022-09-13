import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HOME, LOGIN, SIGNUP } from './constants/routes';

import { onAuthStateChangedThunk } from './redux/actionCreators/auth';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Loader from './components/Loader';
import HeaderTitle from './components/HeaderTitle';
import LogoutButton from './components/LogoutButton/LogoutButton';

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isLoading = useSelector(state => state.app.isLoading);
  const userName = useSelector(state => state.auth.user.userName);

  useEffect(() => {
    dispatch(onAuthStateChangedThunk());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <Stack.Screen
            name={HOME}
            options={{
              headerRight: () => <LogoutButton />,
              headerTitle: props => <HeaderTitle userName={userName} {...props} />,
            }}
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
