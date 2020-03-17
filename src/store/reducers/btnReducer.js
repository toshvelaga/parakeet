import { BTN_COLOR } from '../action-types'

const initialState = {
    reviewType: 'great',
  };
  
  function btnReducer(state = initialState, action) {
    if (action.type === BTN_COLOR) {
      return Object.assign({}, state, {
      reviewType: 'bad'
      });
    }
    return state;
  }
  
  export default btnReducer;