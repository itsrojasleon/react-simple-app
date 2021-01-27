import {PostsActionTypes} from '../action-types';
import {Post} from '../reducers/posts-reducer';

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}

interface SearchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface SearchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

interface FetchPostAction {
  type: PostsActionTypes.FETCH_POST;
}

interface SearchPostSuccessAction {
  type: PostsActionTypes.FETCH_POST_SUCCESS;
  payload: Post[];
}

interface SearchPostErrorAction {
  type: PostsActionTypes.FETCH_POST_ERROR;
  payload: string;
}

export type Action =
  | FetchPostsAction
  | SearchPostsSuccessAction
  | SearchPostsErrorAction
  | FetchPostAction
  | SearchPostSuccessAction
  | SearchPostErrorAction;
