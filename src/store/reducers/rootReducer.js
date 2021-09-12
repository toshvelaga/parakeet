import { combineReducers } from "redux";

import btnReducer from "./btnReducer";
import textareaReducer from "./textareaReducer";
import feedbackReducer from "./feedbackReducer";
import authReducer from "./authReducer";
import emailReducer from "./emailReducer";
import ratingReducer from "./ratingReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  btnReducer,
  textareaReducer,
  emailReducer,
  ratingReducer,
  feedbackReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
