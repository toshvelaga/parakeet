import { SELECTED_STARS } from '../constants/action-types'

const initialState = {
    rating: 5,
  };
  
const ratingReducer = (state = initialState, action) => {
    if (action.type === SELECTED_STARS) {
      return {...initialState, rating: action.stars}
    }
    return state;
  }
  
export default ratingReducer;