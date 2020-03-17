// src/js/store/index.js

import { createStore } from "redux";
import rootReducer from './reducers/index'
import btnReducer from "./reducers/btnReducer";
import textareaReducer from "./reducers/textareaReducer";

const store = createStore(
    btnReducer  
);

export default store;