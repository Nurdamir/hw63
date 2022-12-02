import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import FullPost from "../../components/FullPost/FullPost";
import {PostApi} from "../../types";

const OnePost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostApi>({
    title: '',
    description: '',
    dateTime: '',
  });

  const fetchOnePost = useCallback(async (id: string) => {
    try {
      const postResponse = await axiosApi.get<PostApi>('/posts/' + id + '.json');
      setPost(postResponse.data);
    } finally {

    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchOnePost(id).catch(console.error);
    }
  }, [id, fetchOnePost]);

  const updatePost = async (id: string) => {
    try {
      navigate('/post/' + id + '/edit');
    } finally {

    }
  };

  const onRemovePost = async (id: string) => {
    try {
      await axiosApi.delete('/posts/' + id + '.json');
      navigate('/');
    } finally {
      navigate('/');
    }
  }



  return (
    <div className="row mt-2">
      <div className="col">
        {<FullPost post={post} onRemoveBtn={() => onRemovePost(id!)} onEditBtn={() => updatePost(id!)}/>}

        {/*{post && (*/}
        {/*  <PostForm onSubmit={} existingPost={post}/>*/}
        {/*)}*/}

      </div>
    </div>
);
};

export default OnePost;