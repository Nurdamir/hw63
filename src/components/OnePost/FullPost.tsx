import React from 'react';
import {PostApi} from "../../types";

interface Props {
  post: PostApi;
  onRemoveBtn: React.MouseEventHandler;
  onEditBtn: React.MouseEventHandler;
}

const FullPost: React.FC<Props> = ({post, onRemoveBtn, onEditBtn}) => {

  return (
    <div className="card card-body border-dark">
      <p>{post.title}</p>
      <p>{post.dateTime}</p>
      <p>{post.description}</p>
      <button className="btn btn-primary mb-2 me-1" onClick={onEditBtn}>Edit post</button>
      <button className="btn btn-warning mb-2" onClick={onRemoveBtn}>Remove</button>
    </div>
  );
};

export default FullPost;