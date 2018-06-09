import { GET_POSTS, NEW_POST } from './types';

export function createAll(posts) {
    return {
        type: GET_POSTS,
        payload: posts
    }
}

export const createPosts = posts => dispatch(createAll(posts));

export function createTo(post) {
    return {
      type: NEW_POST,
      payload: post
    }

  }

export const createPost = post => dispatch(createTo(post));