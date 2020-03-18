import { combineReducers } from 'redux';

import btnReducer from './btnReducer'
import textareaReducer from './textareaReducer'

const rootReducer = combineReducers({
    btnReducer,
    textareaReducer
});

export default rootReducer;
