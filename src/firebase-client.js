import axios from 'axios';
import {isEmpty} from "lodash";

const baseUrl = 'https://eyup-fakebook-default-rtdb.europe-west1.firebasedatabase.app';

const transformFirebaseData = (data) => data
  ? Object.keys(data).map((key) => ({ ...data[key], id: key }))
  : [];

export const getPostsApi = () => new Promise((resolve, reject) => {
  axios({
    url: `${baseUrl}/posts.json`,
    method: 'get',
  })
    .then(({ data }) => resolve(transformFirebaseData(data)))
    .catch((error) => reject(error))
});

export const postPostApi = (post, username) => axios({
  method: 'post',
  url: `${baseUrl}/posts.json`,
  data: { ...post, username, likes: [] }
});

export const deletePostApi = (id) => axios({
  method: 'delete',
  url: `${baseUrl}/posts/${id}.json`
});

export const likePostApi = (post, username) => new Promise((resolve, reject) => {
  const oldLikes = !isEmpty(post.likes) ? post.likes : [];
  const likesSet = new Set([...oldLikes, username]);
  const updatedLikes = Array.from(likesSet);
  axios({
    method: 'patch',
    url: `${baseUrl}/posts/${post.id}.json`,
    data: { ...post, likes: updatedLikes },
  })
    .then(resolve)
    .catch(reject)
});

export const dislikePostApi = (post, username) => new Promise((resolve, reject) => {
  const updatedLikes = post.likes.filter((user) => user !== username);
  axios({
    method: 'patch',
    url: `${baseUrl}/posts/${post.id}.json`,
    data: { ...post, likes: updatedLikes },
  })
    .then(resolve)
    .catch(reject)
});

