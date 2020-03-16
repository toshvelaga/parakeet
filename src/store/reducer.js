// import { ADD_TEXTAREA } from './action-types'
import { BTN_COLOR } from './action-types'

const initialState = {
    // show: 'false',
    reviewType: 'great',
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === BTN_COLOR) {
      return Object.assign({}, state, {
      reviewType: 'bad'
      });
    }
    return state;
  }
  
  export default rootReducer;