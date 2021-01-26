import {Post} from '../state/reducers/posts-reducer';

const PostsDetails: React.FC<Post> = ({userId, id, title, body}) => {
  return (
    <div>
      {userId} - {id} - {title} - {body}
    </div>
  );
};

export default PostsDetails;
