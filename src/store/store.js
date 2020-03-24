// src/js/store/index.js

import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer'
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from './actions/'

// Used for cosumer app 

const store = createStore(
    rootReducer 
);

export default store;

// Used for business app

export function configureStore(persistedState) {
    const store = createStore(
      rootReducer,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyAuth());
    return store;
}