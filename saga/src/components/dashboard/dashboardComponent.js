import React from "react";
import { connect } from "react-redux";
import { loadImages } from "../../Actions";

const DashboardComponent = (props) => {
  return (
    <div>
      <h2>Images</h2>
      <button onClick={props.loadImages}>Load more</button>
      {props.images.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

const mapStateToProps = ({ isLoading, images, error, next }) => ({
  isLoading,
  images,
  error,
  next,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
