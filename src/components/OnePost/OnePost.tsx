import React, {useCallback, useEffect, useState} from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import FullPost from "./FullPost";
import {PostApi} from "../../types";
import Spinner from "../Spinner/Spinner";

const OnePost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostApi>({
    title: '',
    description: '',
    dateTime: '',
  });
  const [loading, setLoading] = useState(false);

  const fetchOnePost = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const postResponse = await axiosApi.get<PostApi>('/posts/' + id + '.json');
      setPost(postResponse.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchOnePost(id).catch(console.error);
    }
  }, [id, fetchOnePost]);

  const updatePost = async (id: string) => {
      navigate('/posts/' + id + '/edit');
  };

  const onRemovePost = async (id: string) => {
    try {
      await axiosApi.delete('/posts/' + id + '.json');
      navigate('/');
    } catch (e) {
      throw new Error();
    } finally {
      navigate('/');
    }
  }

  return (
    <div className="row">
      <div className="col-7">
        {loading ? <Spinner/> : (
          <FullPost
            post={post}
            onRemoveBtn={() => onRemovePost(id!)}
            onEditBtn={() => updatePost(id!)}/>
        )}
      </div>
      <div className="col-5"><Outlet/></div>
    </div>
);
};

export default OnePost;