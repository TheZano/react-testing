import { SAVE_COMMENT, FETCH_COMMENTS } from './types';
import axios from 'axios';
export const saveComment = (comment) => {
  return {
    payload: comment,
    type: SAVE_COMMENT
  };
};

export const fetchComments = () => async (dispatch) => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  const comments = data.map(comment => comment.body)
  dispatch({
    payload: comments,
    type: FETCH_COMMENTS
  });
};
