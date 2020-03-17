import { TEXTAREA_TOGGLE } from '../action-types'

const initialState = {
    show: 'false',
  };
  
  function textareaReducer(state = initialState, action) {
    if (action.type === TEXTAREA_TOGGLE) {
      return Object.assign({}, state, {
      show: 'true'
      });
    }
    return state;
  }
  
  export default textareaReducer;