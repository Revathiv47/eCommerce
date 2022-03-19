import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACJFTlOW1ECfNtDy-EEbOcgjzj53I5nhY",
    authDomain: "ebuy-89fe7.firebaseapp.com",
    projectId: "ebuy-89fe7",
    storageBucket: "ebuy-89fe7.appspot.com",
    messagingSenderId: "343752123834",
    appId: "1:343752123834:web:bf205f8e08ad32d31ea983",
    measurementId: "G-34DCMVHYXY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export  {db, auth};
  