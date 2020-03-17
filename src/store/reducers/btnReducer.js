import { BTN_COLOR } from '../constants/action-types'

const initialState = {
    reviewType: 'great',
  };
  
const btnReducer = (state = initialState, action) => {
    if (action.type === BTN_COLOR) {
      return Object.assign({}, state, {
      reviewType: 'bad'
      });
    }
    return state;
  }
  
  export default btnReducer;