import React from 'react';
import { Card } from './Card';
import { useSelector } from 'react-redux';

export const CommentList = () => {
  const comments = useSelector((state) => state.comments);
  return <div>{comments.map((comment, index) => <Card text={comment} key={index} />)}</div>;
};
