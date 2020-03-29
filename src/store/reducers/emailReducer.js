import { SUBMIT_EMAIL } from '../constants/action-types'

const initialState = {
    emailValue: '',
};

const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_EMAIL:
          return {
              ...initialState, 
              emailValue: action.text
            };
        default:
          return state;
      }
}

export default emailReducer