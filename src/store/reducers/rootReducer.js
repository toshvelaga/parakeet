import { combineReducers } from 'redux';

import btnReducer from './btnReducer'
import textareaReducer from './textareaReducer'
import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    btnReducer,
    textareaReducer,
    authReducer,
    firebase: firebaseReducer
});

export default rootReducer;
