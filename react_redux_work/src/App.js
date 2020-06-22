import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment(5));
  };
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => incrementHandler()}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Info</h3> : <span>Not logged in</span>}
    </div>
  );
}

export default App;
