// types.ts
import { combineReducers } from 'redux';
import { SET_POST } from './actions';

interface Post {
  sys: {
    id: string;
  };
  fields: {
    slug: string;
    title: string;
    content: string;
  };
}

interface SetPostAction {
  type: typeof SET_POST;
  payload: Post | null;
}

const postReducer = (state: Post | null = null, action: SetPostAction): Post | null => {
  switch (action.type) {
    case SET_POST:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
