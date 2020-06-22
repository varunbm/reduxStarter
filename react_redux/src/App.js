import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Posts from "./components/post";
import PostForm from "./components/postForm";
import NavBar from "./components/navBarComponent";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="container">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
