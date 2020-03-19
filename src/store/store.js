// src/js/store/index.js

import { createStore } from "redux";
import rootReducer from './reducers/rootReducer'
// import btnReducer from "./reducers/btnReducer";
// import textareaReducer from "./reducers/textareaReducer";

const store = createStore(
    rootReducer 
);

console.log(rootReducer)

export default store;