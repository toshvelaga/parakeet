// docs: https://itnext.io/firebase-login-functionality-from-scratch-with-react-redux-2bf316e5820f

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig =   {
    apiKey: "AIzaSyCoxNUQY1HgEBT_Gj4wt73zRJOpRJrdQH4",
    authDomain: "spot-f43fe.firebaseapp.com",
    databaseURL: "https://spot-f43fe.firebaseio.com",
    projectId: "spot-f43fe",
    storageBucket: "spot-f43fe.appspot.com",
    messagingSenderId: "818173559737",
    appId: "1:818173559737:web:9a17477c137f0a2fccac68",
    measurementId: "G-ZCG4509038"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;