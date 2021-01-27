import {useTypedSelector} from '../hooks/use-typed-selector';
import PostsDetails from './posts-details';

const PostsList: React.FC = () => {
  const {posts, error, loading} = useTypedSelector((state) => state.posts);

  // if (!posts) return <div>No posts available</div>;

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts.map((post) => (
        <PostsDetails key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
