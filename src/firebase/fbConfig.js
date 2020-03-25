// tutorial: https://www.youtube.com/watch?v=gf5bVfVlNUM&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=17

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCoxNUQY1HgEBT_Gj4wt73zRJOpRJrdQH4",
    authDomain: "spot-f43fe.firebaseapp.com",
    databaseURL: "https://spot-f43fe.firebaseio.com",
    projectId: "spot-f43fe",
    storageBucket: "spot-f43fe.appspot.com",
    messagingSenderId: "818173559737",
    appId: "1:818173559737:web:9a17477c137f0a2fccac68",
    measurementId: "G-ZCG4509038"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;