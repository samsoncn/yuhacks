import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6CCLw3lcpcj9D4Egn8HxRejh8AKK3Rjw",
    authDomain: "yuhacks-fab39.firebaseapp.com",
    projectId: "yuhacks-fab39",
    storageBucket: "yuhacks-fab39.appspot.com",
    messagingSenderId: "9873771393",
    appId: "1:9873771393:web:2118c6bfb6955b965cf680",
    measurementId: "G-Q2ZC9VV16L"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const webStorage = firebase.storage();
const webFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { webStorage, webFirestore, timestamp };
