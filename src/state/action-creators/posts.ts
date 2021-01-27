import { Dispatch } from 'redux';
import { PostsActionTypes } from '../action-types';
import { Action } from '../actions';
import { Api } from '../../api';

const fetchPosts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: PostsActionTypes.FETCH_POSTS });

    try {
      const payload = await Api.getPosts({ page: 1 });

      dispatch({ type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload });
    } catch (err) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: err.message,
      });
    }
  };
};

const fetchMorePosts = ({ page }: { page: number }) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: PostsActionTypes.FETCH_MORE_POSTS });

    try {
      const payload = await Api.getPosts({ page });

      dispatch({
        type: PostsActionTypes.FETCH_MORE_POSTS_SUCCESS,
        payload,
      });
    } catch (err) {
      dispatch({
        type: PostsActionTypes.FETCH_MORE_POSTS_ERROR,
        payload: err.message,
      });
    }
  };
};

const fetchPost = ({ id }: { id: number }) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: PostsActionTypes.FETCH_POST });

    try {
      const payload = await Api.getSinglePost({ id });

      dispatch({ type: PostsActionTypes.FETCH_POST_SUCCESS, payload });
    } catch (err) {
      dispatch({
        type: PostsActionTypes.FETCH_POST_ERROR,
        payload: err.message,
      });
    }
  };
};

export { fetchPosts, fetchPost, fetchMorePosts };
