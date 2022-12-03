import React, {useCallback, useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import PostItem from "../../components/PostItem/PostItem";
import {Post, PostList} from "../../types";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const postsResponse = await axiosApi.get<PostList>('/posts.json');

      const posts = Object.keys(postsResponse.data).map(key => {
        const post = postsResponse.data[key];
        post.id = key;
        return post;
      });

      setPosts(posts);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/posts') {
      void fetchPosts().catch(console.error);
    }
  }, [fetchPosts, location]);

  const onBtnReadMoreClick = (id: string) => {
    navigate('/posts/' + id);
  };

  return (
    <div className="d-flex justify-content-around">
      <div>
        {loading ? <Spinner/> : (
          posts.map((post) => (
              <PostItem key={Math.random()} date={post.dateTime} title={post.title} onClick={() => onBtnReadMoreClick(post.id)}/>
            ))
        )}
      </div>
        <Outlet/>
    </div>
  );
};

export default Home;