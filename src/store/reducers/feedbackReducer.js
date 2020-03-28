import { ADD_GREAT_FEEDBACK, REMOVE_GREAT_FEEDBACK, ADD_BAD_FEEDBACK, REMOVE_BAD_FEEDBACK } from '../constants/action-types'

const initialState = {
    doingGreat: [],
    doingBad: []
  };
  
const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GREAT_FEEDBACK:
          return { 
            ...state,
            doingGreat: [...state.doingGreat, action.addedName]
        };
        case REMOVE_GREAT_FEEDBACK:
          return {
            ...state, 
            doingGreat: state.doingGreat.filter(category => category !== action.removedName)
        };
        case ADD_BAD_FEEDBACK:
          return { 
            ...state,
            doingBad: [...state.doingBad, action.addedName]
        };
        case REMOVE_BAD_FEEDBACK:
          return {
            ...state, 
            doingBad: state.doingBad.filter(category => category !== action.removedName)
        };
        default:
          return state;
      }
}
  
export default feedbackReducer;