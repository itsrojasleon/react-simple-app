import {PostsActionTypes} from '../action-types';
import {Action} from '../actions';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  loading: boolean;
  error: string | null;
  post: Post | null;
}

const postReducer = (
  state: PostState = {loading: false, error: null, post: null},
  action: Action
): PostState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POST:
      return {loading: true, error: null, post: null};
    case PostsActionTypes.FETCH_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        post: action.payload,
      };
    case PostsActionTypes.FETCH_POST_ERROR:
      return {loading: false, error: action.payload, post: null};
    default:
      return state;
  }
};

export {postReducer};
