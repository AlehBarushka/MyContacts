import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import envConfig from '../../config/envConfig';

const firebaseConfig = {
  apiKey: envConfig.FIREBASE_API_KEY,
  authDomain: envConfig.FIREBASE_AUTH_DOMAIN,
  projectId: envConfig.FIREBASE_PROJECT_ID,
  storageBucket: envConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envConfig.FIREBASE_MESSAGING_SENDER_ID,
  appId: envConfig.FIREBASE_APP_ID,
};

const myApp = initializeApp(firebaseConfig);

export const auth = initializeAuth(myApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
