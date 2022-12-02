import React from 'react';
import {PostApi} from "../../types";
import PostForm from "../PostForm/PostForm";
import axiosApi from "../../axiosApi";

const AddForm = () => {

  const updatePost = async (post: PostApi) => {
    try {
      await axiosApi.put('/posts.json', post);

    } finally {

    }
  };


  return (
    <>
      <PostForm onSubmitForm={(post: PostApi) => updatePost(post)}/>
    </>
  );
};

export default AddForm;