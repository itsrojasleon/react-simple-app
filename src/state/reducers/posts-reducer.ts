import {PostsActionTypes} from '../action-types';
import {Action} from '../actions';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  loading: boolean;
  error: string | null;
  posts: Post[];
}

const postsReducer = (
  state: PostsState = {loading: false, error: null, posts: []},
  action: Action
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {loading: true, error: null, posts: []};
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: [...state.posts!, ...action.payload],
      };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return {loading: false, error: action.payload, posts: []};

    // Some coding here
    // case PostsActionTypes.FETCH_POST:
    //   return {loading: true, error: null, post: {}};
    // case PostsActionTypes.FETCH_POST_SUCCESS:
    //   return {loading: false, error: null, post: action.payload};
    // case PostsActionTypes.FETCH_POST_ERROR:
    //   return {loading: false, error: action.payload, post: []};
    default:
      return state;
  }
};

export {postsReducer};
