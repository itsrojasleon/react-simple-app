import {ActionType} from '../action-types';
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
  data: Post[];
}

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

const postsReducer = (
  state: PostsState = INITIAL_STATE,
  action: Action
): PostsState => {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return {loading: true, error: null, data: []};
    case ActionType.FETCH_POSTS_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case ActionType.FETCH_POSTS_ERROR:
      return {loading: false, error: action.payload, data: []};
    default:
      return state;
  }
};

export {postsReducer};
