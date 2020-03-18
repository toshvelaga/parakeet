import { TEXTAREA_VALUE } from '../constants/action-types'

const initialState = {
    value: '',
  };
  
  function textareaReducer(state = initialState, action) {
    if (action.type === TEXTAREA_VALUE) {
      return {...initialState, value: 'text'};
    }
    return state;
  }
  
  export default textareaReducer;