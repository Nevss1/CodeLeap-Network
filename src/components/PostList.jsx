import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';

const PostList = ({ username, refreshTrigger }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch('https://dev.codeleap.co.uk/careers/')
      .then((response) => response.json())
      .then((data) => {
        const sortedPosts = data.results.sort((a, b) => new Date(b.created_datetime) - new Date(a.created_datetime));
        setPosts(sortedPosts);
      })
      .catch((error) => console.error('Erro ao buscar posts:', error));
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // Atualiza a cada 5 segundos
    return () => clearInterval(interval);
  }, [refreshTrigger]);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleUpdate = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  return (
    <div>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          username={username}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default PostList;