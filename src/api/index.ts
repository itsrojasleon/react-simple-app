import axios from 'axios';

const URL = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export class Api {
  static async getPosts({_page = 1}: {_page: number}) {
    const {data} = await URL.get('/posts', {
      params: {_page},
    });

    return data;
  }

  static async getSinglePost({id}: {id: number}) {
    const {data} = await URL.get('/posts', {
      params: {id},
    });

    return data;
  }

  static async getPostComments({id}: {id: number}) {
    const {data} = await URL.get(`/posts/${id}/comments`);

    return data;
  }
}
