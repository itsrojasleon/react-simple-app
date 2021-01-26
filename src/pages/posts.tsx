import {useEffect} from 'react';
import {useActions} from '../hooks/use-actions';
import PostsList from '../components/posts-list';

const Posts: React.FC = () => {
  const {fetchPosts} = useActions();

  useEffect(() => {
    fetchPosts({_limit: 10, _page: 1});
  }, []);

  return <PostsList />;
};

export default Posts;
