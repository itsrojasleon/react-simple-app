import { useEffect, useState } from 'react';
import { useActions } from '../hooks/use-actions';
import PostsList from '../components/posts-list';

const Posts: React.FC = () => {
  const { fetchPosts } = useActions();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts({ page });
  }, [page]);

  return (
    <div>
      <PostsList />
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        Load more
      </button>
    </div>
  );
};

export default Posts;
