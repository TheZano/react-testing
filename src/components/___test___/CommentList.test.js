import React from 'react';
import { mount } from 'enzyme';
import { CommentList } from '../CommentList';
import { Card } from '../Card';
import { withStore } from '../../hocs/withStore';

it('render list properly', () => {
  const CommentListWithRedux = withStore(CommentList, { comments: [ 'lorem', 'ipsum', 'dolor' ] });
  const wrapped = mount(<CommentListWithRedux />);
  expect(wrapped.find(Card).length).toBeGreaterThanOrEqual(3);
  wrapped.unmount();
});
