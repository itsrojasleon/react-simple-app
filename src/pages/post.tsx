import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useActions} from '../hooks/use-actions';
import PostsList from '../components/posts-list';

const Post: React.FC = () => {
  const {fetchPost} = useActions();
  const {postId} = useParams<{postId: string}>();

  useEffect(() => {
    fetchPost({id: parseInt(postId)});
  }, []);

  return (
    <div>
      ok
      <PostsList />
    </div>
  );
};

export default Post;
