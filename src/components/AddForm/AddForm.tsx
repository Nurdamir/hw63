import React from 'react';
import axiosApi from "../../axiosApi";
import PostForm from "../PostForm/PostForm";
import {PostApi} from "../../types";

const AddForm = () => {

  const updatePost = async (post: PostApi) => {
    try {
      await axiosApi.put('/posts.json', post);
    } catch (e) {
      throw new Error();
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <PostForm onSubmitForm={(post: PostApi) => updatePost(post)}/>
    </div>
  );
};

export default AddForm;