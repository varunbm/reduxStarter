import IMAGES from "../constants";

const loadingReducers = (state = false, action) => {
  console.log(action.type);
  switch (action.type) {
    case IMAGES.LOAD:
      return true;
    case IMAGES.LOAD_SUCCESS:
      return false;
    case IMAGES.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducers;
