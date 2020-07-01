import React from 'react';
import { CommentBox } from './CommentBox';
import { CommentList } from './CommentList';
import { withStore } from '../hocs/withStore';

export const App = withStore(() => {
  return (
    <div>
      I'm app component
      <CommentBox />
      <CommentList />
    </div>
  );
});
