import { useEffect, useState } from 'react';
import { useActions } from '../hooks/use-actions';
import PostsList from '../components/posts-list';

const Posts: React.FC = () => {
  const { fetchPosts, fetchMorePosts } = useActions();
  // const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, []);

  const loadMorePosts = () => {
    // setPage((prevPage) => prevPage + 1);
    fetchMorePosts({ page: 2 });
  };

  return (
    <div>
      <PostsList />
      <button onClick={loadMorePosts}>Load more</button>
    </div>
  );
};

export default Posts;
