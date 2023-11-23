// redux/actions.ts
export const SET_POSTS = 'SET_POSTS';
export const SET_POST = 'SET_POST';

interface SetPostsAction {
  type: typeof SET_POSTS;
  payload: any[]; 
}

interface SetPostAction {
  type: typeof SET_POST;
  payload: any; 
}

export const setPosts = (posts: any[]): SetPostsAction => ({
  type: SET_POSTS,
  payload: posts,
});

export const setPost = (post: any): SetPostAction => ({
  type: SET_POST,
  payload: post,
});
