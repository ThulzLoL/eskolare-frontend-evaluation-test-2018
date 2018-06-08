import { GET_POSTS, NEW_POST } from './types';
import Faker from 'faker'

export const getPosts = () => dispatch => {
for (let i = 1; i < 1001; i++){
    let row = {
        id: i,
        nome: Faker.name.firstName(),
        sobrenome: Faker.name.lastName(),
        pais: Faker.address.countryCode(),
        email: Faker.internet.email()
    }
    row => dispatch({
        type: GET_POSTS,
        payload: posts
    })
}
};

export const createPost = postData => {
      dispatch({
        type: NEW_POST,
        payload: post
      })
};