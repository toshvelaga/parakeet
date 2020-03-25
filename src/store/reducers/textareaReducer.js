const initialState = {
    textValue: '',
  };
  
  const textareaReducer = (state = initialState, action) => {
      // console.log('reducer', action)
      switch (action.type) {
        case 'TEXTAREA_CHANGE':
          return {...initialState, textValue: action.text };
        default:
          return state;
      }
}

  export default textareaReducer;