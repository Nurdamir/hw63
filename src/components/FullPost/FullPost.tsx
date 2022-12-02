import React, {useState} from 'react';
import {Post, PostApi} from "../../types";

interface Props {
  post: PostApi;
  onRemoveBtn: React.MouseEventHandler;
  onEditBtn: React.MouseEventHandler;
}

const FullPost: React.FC<Props> = ({post, onRemoveBtn, onEditBtn}) => {

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.dateTime}</p>
      <p>{post.description}</p>
      <button className="btn btn-primary" onClick={onEditBtn}>Edit post</button>
      <button className="btn btn-warning" onClick={onRemoveBtn}>Remove</button>
    </div>
  );
};

export default FullPost;