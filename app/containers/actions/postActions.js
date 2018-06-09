import { GET_POSTS, NEW_POST } from './types';

export const getPosts = () => {
      dispatch({
        type: GET_POSTS,
        payload: posts
    })
}

export function createTo(post) {
    return {
      type: NEW_POST,
      payload: post
    }

  }

export const createPost = post => dispatch(createTo(post));