// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'react-firebase-c1956.firebaseapp.com',
  projectId: 'react-firebase-c1956',
  storageBucket: 'react-firebase-c1956.appspot.com',
  messagingSenderId: '1056437714977',
  appId: '1:1056437714977:web:2cb3def48663bdc7e3a360',
  measurementId: 'G-9CYDTH624H',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
