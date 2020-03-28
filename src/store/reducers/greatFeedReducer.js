import { ADD_FEEDBACK, REMOVE_FEEDBACK } from '../constants/action-types'

const initialState = {
    doingWell: [],
  };
  
const greatFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEEDBACK:
          return { 
            ...state,
            doingWell: [...state.doingWell, action.addedName]
        };
        case REMOVE_FEEDBACK:
          return {
            ...state, 
            doingWell: state.doingWell.filter(category => category !== action.removedName)
        };
        default:
          return state;
      }
}
  
export default greatFeedReducer;