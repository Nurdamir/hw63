import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AxiosApi from "../../axiosApi";
import {PostApi} from "../../types";

interface Props {
  onSubmitForm: (post: PostApi) => void;
  existingPost?: PostApi;
}

const PostForm: React.FC<Props> = ({existingPost}) => {
  const {id} = useParams();
  const navigate = useNavigate();

  const initialState = existingPost ? {
    ...existingPost,
  } : {
    title: '',
    description: '',
    dateTime: '',
  }

  const [post, setPost] = useState<PostApi>(initialState);

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    const dateTime = new Date().toString();
    setPost(prev => ({...prev, [name]: value, dateTime}));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (id) {
      try {
        await AxiosApi.put('/posts/' + id + '.json', post)
      } finally {
        navigate('/');
      }
    } else {
      try {
        await AxiosApi.post('/posts.json', post);
      } finally {
        navigate('/');
      }
    }
  };


  return (
    <form className="w-75" onSubmit={onFormSubmit}>
      <h4>{existingPost ? 'Edit post' : 'Add new post'}</h4>
      <div className="form-group form">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="form-control"
          value={post.title}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="form-control"
          value={post.description}
          onChange={onPostChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        {existingPost ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default PostForm;