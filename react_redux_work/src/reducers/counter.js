import * as actionsTypes from "../actions/types";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionsTypes.increment:
      return state + action.payload;
    case actionsTypes.decrement:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
