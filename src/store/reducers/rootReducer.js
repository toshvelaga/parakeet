import { combineReducers } from 'redux';

import btnReducer from './btnReducer'
import textareaReducer from './textareaReducer'
import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    btnReducer,
    textareaReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;
