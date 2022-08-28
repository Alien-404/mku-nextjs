// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Old
// const firebaseConfig = {
//   apiKey: 'AIzaSyCyEVyxKfMJdpOkN_epaci-Ro_wHKaaNb8',
//   authDomain: 'mku-db.firebaseapp.com',
//   projectId: 'mku-db',
//   storageBucket: 'mku-db.appspot.com',
//   messagingSenderId: '849488496408',
//   appId: '1:849488496408:web:dc2f9381896dc87290006d',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCYYYnRcw0T7ZYt7adJHg419c4wZ3CMfn8',
  authDomain: 'riset-air-quality-kalipaten.firebaseapp.com',
  projectId: 'riset-air-quality-kalipaten',
  storageBucket: 'riset-air-quality-kalipaten.appspot.com',
  messagingSenderId: '474661596383',
  appId: '1:474661596383:web:2da586b8c4fee52b048d6a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
