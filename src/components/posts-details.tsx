import {Link} from 'react-router-dom';
import {Post} from '../state/reducers/posts-reducer';

const PostsDetails: React.FC<Post> = ({userId, id, title, body}) => {
  return (
    <div>
      {/* <p>{userId}</p> */}
      <p>{id}</p>
      <strong>{title}</strong>
      <div>{body}</div>
      <Link to={`/posts/${id}`}>Visit</Link>
    </div>
  );
};

export default PostsDetails;
