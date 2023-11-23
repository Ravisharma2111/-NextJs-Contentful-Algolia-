// redux/reducers.ts
import { combineReducers } from 'redux';
import { SET_POSTS, SET_POST } from './actions';

interface Post {
  // Adjust the properties based on your data structure
  sys: {
    id: string;
  };
  fields: {
    slug: string;
    title: string;
    content: string;
  };
}

interface SetPostsAction {
  type: typeof SET_POSTS;
  payload: Post[];
}

interface SetPostAction {
  type: typeof SET_POST;
  payload: Post | null;
}

const postsReducer = (state: Post[] = [], action: SetPostsAction): Post[] => {
  switch (action.type) {
    case SET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

const postReducer = (state: Post | null = null, action: SetPostAction): Post | null => {
  switch (action.type) {
    case SET_POST:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

export default rootReducer;
