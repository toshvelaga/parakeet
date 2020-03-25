import { combineReducers } from 'redux';

import btnReducer from './btnReducer'
import textareaReducer from './textareaReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    btnReducer,
    textareaReducer,
    authReducer
});

export default rootReducer;
