import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../action/postAction";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate(nextPorps) {
    if (nextPorps.newPost) {
      this.props.posts.unshift(nextPorps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1> Posts </h1>
        {postItems}
      </div>
    );
  }
}

const mapStatetoProps = (st) => ({
  posts: st.posts.items,
  newPost: st.posts.item,
});

export default connect(mapStatetoProps, { fetchPosts })(Posts);
