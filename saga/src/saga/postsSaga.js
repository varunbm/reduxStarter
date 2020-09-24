import { takeEvery, select, call, put } from "redux-saga/effects";
import IMAGES from "../constants";
import { fetchPosts } from "../API";
import { setImages, setError } from "../Actions";
const getPage = (state) => {
  return state.next;
};

//Worker saga
function* handleIMagesLoad() {
  try {
    const page = yield select(getPage);
    const posts = yield call(fetchPosts, page);
    yield put(setImages(posts));
  } catch (error) {
    //Dispatch error action
    yield put(setError(error.toString()));
  }
}

//Watcher saga
function* watchPostsLoad() {
  yield takeEvery(IMAGES.LOAD, handleIMagesLoad);
}

export default watchPostsLoad;
