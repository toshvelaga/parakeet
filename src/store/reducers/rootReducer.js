import { combineReducers } from 'redux';

import btnReducer from './btnReducer'
import textareaReducer from './textareaReducer'
import auth from "./auth";

const rootReducer = combineReducers({
    btnReducer,
    textareaReducer,
    auth
});

export default rootReducer;
