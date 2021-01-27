import {useEffect, useState} from 'react';
import {useActions} from '../hooks/use-actions';
import PostsList from '../components/posts-list';

const Posts: React.FC = () => {
  const {fetchPosts} = useActions();
  const [_page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts({_page});
  }, [_page]);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <PostsList />
      <button onClick={loadMorePosts}>Load more</button>
    </div>
  );
};

export default Posts;
