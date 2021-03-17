import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyBfaVWmy7vrN2EnxWE3ZXyjN2jUJ2HlFNs",
    authDomain: "marketssnap.firebaseapp.com",
    projectId: "marketssnap",
    storageBucket: "marketssnap.appspot.com",
    messagingSenderId: "316332560516",
    appId: "1:316332560516:web:bc2fde852ffa6c28a072d1",
    measurementId: "G-PLJ57CHQ1Q"
  };
  // Initialize Firebase
  const fire =  firebase.initializeApp(firebaseConfig);

  fire.analytics();

  export default fire;