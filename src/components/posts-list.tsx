import {useTypedSelector} from '../hooks/use-typed-selector';
import PostsDetails from './posts-details';

const PostsList: React.FC = () => {
  const {data, error, loading} = useTypedSelector((state) => state.posts);

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {data.map((post) => (
        <PostsDetails key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
