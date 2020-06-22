import * as actions from "./types";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  console.log("Fetching...");
  axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
    dispatch({
      type: actions.FETCH_POSTS,
      payload: response.data,
    });
  });
};

export const createPosts = (postData) => (dispatch) => {
  console.log("CreatePost");
  const headers = {
    "content-type": "application/json",
  };
  axios
    .post("https://jsonplaceholder.typicode.com/posts", postData, headers)
    .then((post) => {
      dispatch({
        type: actions.NEW_POST,
        payload: post.data,
      });
    });

  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   headers,
  //   body: JSON.stringify(post),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
};
