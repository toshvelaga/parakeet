const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default firebase;

firebase.initializeApp({
  apiKey: 'AIzaSyDPoVhmh6ABuI2DJU7SkVwUuk0uiXXBknI',
  authDomain: 'feedback-9ac15.firebaseapp.com',
  projectId: 'feedback-9ac15'
});

