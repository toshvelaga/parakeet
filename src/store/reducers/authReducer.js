const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("Login Success!!!");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout Success");
      return {
        state
      };
    default:
      return state;
  }
};

export default authReducer;
