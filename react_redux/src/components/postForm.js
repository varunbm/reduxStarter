import React, { Component } from "react";
import { connect } from "react-redux";
import { createPosts } from "../action/postAction";

class PostForm extends Component {
  state = {
    title: "",
    body: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    //Call action
    this.props.createPosts(post);
  };

  render() {
    return (
      <div>
        <h2>Add post</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title : </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body : </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPosts })(PostForm);
