import {combineReducers} from 'redux';
import {postsReducer} from './posts-reducer';
import {postReducer} from './post-reducer';

export const reducers = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof reducers>;
