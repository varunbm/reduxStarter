import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = async (page) => {
  const res = await axios.get(URL);
  const data = await res.data;
  if (res.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchPosts };
