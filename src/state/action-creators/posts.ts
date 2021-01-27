import {Dispatch} from 'redux';
import {PostsActionTypes} from '../action-types';
import {Action} from '../actions';
import {Api} from '../../api';

const fetchPosts = ({_page}: {_page: number}) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({type: PostsActionTypes.FETCH_POSTS});

    try {
      const payload = await Api.getPosts({_page});

      dispatch({
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload,
      });
    } catch (err) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: err.message,
      });
    }
  };
};

const fetchPost = ({id}: {id: number}) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({type: PostsActionTypes.FETCH_POST});

    try {
      const payload = await Api.getSinglePost({id});

      dispatch({
        type: PostsActionTypes.FETCH_POST_SUCCESS,
        payload,
      });
    } catch (err) {
      dispatch({
        type: PostsActionTypes.FETCH_POST_ERROR,
        payload: err.message,
      });
    }
  };
};

export {fetchPosts, fetchPost};
