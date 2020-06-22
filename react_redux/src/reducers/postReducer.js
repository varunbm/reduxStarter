import * as actions from "../action/types";

const initState = {
  items: [],
  item: {},
};

export default function (state = initState, action) {
  console.log(action);
  switch (action.type) {
    case actions.FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case actions.NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
