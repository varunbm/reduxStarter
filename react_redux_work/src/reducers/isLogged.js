import * as actionTypes from "../actions/types";

const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.signIn:
      return !state;
    default:
      return state;
  }
};

export default isLoggedInReducer;
