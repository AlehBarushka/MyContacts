import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCLBQ2ZVA25yHeeMnIJmYhP3R1_4pWK5RA',
  authDomain: 'my-contacts-3ce57.firebaseapp.com',
  projectId: 'my-contacts-3ce57',
  storageBucket: 'my-contacts-3ce57.appspot.com',
  messagingSenderId: '137995558696',
  appId: '1:137995558696:web:0047835edf8e3b0418ba1d',
};

export const myApp = initializeApp(firebaseConfig);
