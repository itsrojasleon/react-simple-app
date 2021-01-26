import {Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {Action} from '../actions';
import {API} from '../../api';

interface Params {
  _limit: number;
  _page: number;
}

const fetchPosts = ({_limit, _page}: Params) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.FETCH_POSTS});

    try {
      const {data} = await API.get('/posts', {
        params: {_page, _limit},
      });

      dispatch({
        type: ActionType.FETCH_POSTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_POSTS_ERROR,
        payload: err.message,
      });
    }
  };
};

export {fetchPosts};
