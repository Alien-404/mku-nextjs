// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCyEVyxKfMJdpOkN_epaci-Ro_wHKaaNb8',
  authDomain: 'mku-db.firebaseapp.com',
  projectId: 'mku-db',
  storageBucket: 'mku-db.appspot.com',
  messagingSenderId: '849488496408',
  appId: '1:849488496408:web:dc2f9381896dc87290006d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
