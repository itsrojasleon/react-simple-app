import {ActionType} from '../action-types';
import {Post} from '../reducers/posts-reducer';

interface FetchPostsAction {
  type: ActionType.FETCH_POSTS;
}

interface SearchPostsSuccessAction {
  type: ActionType.FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface SearchPostsErrorAction {
  type: ActionType.FETCH_POSTS_ERROR;
  payload: string;
}

export type Action =
  | FetchPostsAction
  | SearchPostsSuccessAction
  | SearchPostsErrorAction;
