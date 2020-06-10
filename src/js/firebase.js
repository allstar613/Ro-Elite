
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

// Firebase configuration 
var firebaseConfig = {
    apiKey: "AIzaSyDY_iQt9tD470s8KRcKtjGYI8lbL-TypFA",
    authDomain: "ro-elite.firebaseapp.com",
    databaseURL: "https://ro-elite.firebaseio.com",
    projectId: "ro-elite",
    storageBucket: "ro-elite.appspot.com",
    messagingSenderId: "915626110536",
    appId: "1:915626110536:web:bc5f4db9d978d58911b27d",
    measurementId: "G-THJLGTD3C7"
};

// Get a Firestore instance
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp