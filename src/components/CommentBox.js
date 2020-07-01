import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/comment';

export const CommentBox = connect(null, actions)(({ saveComment, fetchComments }) => {
  const [ value, setValue ] = useState('');

  const handleChangeText = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(value);
    setValue('');
  };

  const handleFetch = (e) => {
    fetchComments();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>add a comment</h4>
        <textarea onChange={handleChangeText} value={value} />
        <div>
          <button>submit comment</button>
        </div>
      </form>
      <button id='fetch' onClick={handleFetch}>fetch</button>
    </div>
  );
});
