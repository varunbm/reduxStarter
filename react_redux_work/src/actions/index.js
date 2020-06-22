import * as actionTypes from "./types";

export const increment = (num) => {
  return {
    type: actionTypes.increment,
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.decrement,
  };
};
