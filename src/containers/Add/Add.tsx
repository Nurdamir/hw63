import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useParams} from "react-router-dom";
import PostForm from "../../components/PostForm/PostForm";
import {Post, PostApi} from "../../types";

const Add = () => {
  const {id} = useParams();

  const [existingPost, setExistingPost] = useState<Post | null>(null);

  const fetchOnePost = useCallback(async (id: string) => {
    try {
      const postResponse = await axiosApi.get<Post>('/posts/' + id + '.json');
      setExistingPost(postResponse.data);
    } finally {

    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchOnePost(id).catch(console.error);
    }
  }, [id, fetchOnePost]);

  const createPost = async (post: PostApi) => {
    try {
      await axiosApi.post('/posts.json', post);
    } catch (e) {
      throw new Error();
    }
  };

  return (
    <div className="row card card-body border-dark">
      <div className="col">
        {existingPost && (
          <PostForm onSubmitForm={(post: PostApi) => createPost(post)} existingPost={existingPost!}/>)}
      </div>
    </div>
  );
};

export default Add;