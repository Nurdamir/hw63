import React, {useCallback, useEffect, useState} from 'react';
import {Post, PostList} from "../../types";
import Spinner from "../../components/Spinner/Spinner";
import PostItem from "../../components/Post/PostItem";
import {useLocation, useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";

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
        const dish = postsResponse.data[key];
        dish.id = key;
        return dish;
      });

      setPosts(posts);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    if (location.pathname === '/') {
      void fetchPosts();
    }
  }, [fetchPosts, location]);

  const onBtnReadMoreClick = (id: string) => {
    navigate('/post/' + id);
  }


  return (
    <div className="row mt-2">
      <div className="col-7">
        {loading ? <Spinner/> : (
          posts.map((post) => (
              <PostItem key={Math.random()} date={post.dateTime} title={post.title} onClick={() => onBtnReadMoreClick(post.id)}/>
            ))
        )}
      </div>
    </div>
  );
};

export default Home;