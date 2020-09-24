import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configStore;
