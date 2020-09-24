import loadingReducer from "./loadingReducer";
import imagesReducer from "./imagesReducer";
import errorReducers from "./errorReducers";
import pageReducer from "./pageReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducers,
  next: pageReducer,
});

export default rootReducers;
