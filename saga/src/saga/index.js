// import { takeEvery } from "redux-saga/effects";
// import IMAGES from "../constants";
// // Watcher saga takes  ---> actions and ---> invokes worker saga

// //takeEvery -> It listens to perticular actions,
// // and whenever that action is called or dispatched
// // our watcher saga gets invoked

// //workerSaga
// function* workerSaga() {
//   console.log(`Hey from workerSaga`);
//   // yield put({ type: `ACTION_FROM_WORKER` });
// }

// //Watcher saga
// function* rootSaga() {
//   yield takeEvery(IMAGES.LOAD, workerSaga);
//   // When HELLO action is gets called, it pauses it self and invokes workerSaga
//   // console.log("Hello from saga");
// }
import postsSaga from "./postsSaga";
export default postsSaga;
