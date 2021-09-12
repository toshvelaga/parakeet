import { BAD_REVIEW } from "../constants/action-types";

const initialState = {
  reviewType: "great",
};

const btnReducer = (state = initialState, action) => {
  if (action.type === BAD_REVIEW) {
    return { ...initialState, reviewType: "bad" };
  }
  return state;
};

export default btnReducer;
