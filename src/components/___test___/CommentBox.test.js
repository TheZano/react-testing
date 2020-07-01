import { mount } from 'enzyme';
import { CommentBox } from '../CommentBox';
import React from 'react';
import { withStore } from '../../hocs/withStore';

let wrapped;

beforeEach(() => {
  const Component = withStore(CommentBox)
  wrapped = mount(<Component />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);

  expect(wrapped.find('button').length).toEqual(2);
});

it('has a text area users can type in', () => {
  const testText = 'lorem ipsum dolor';
  wrapped.find('textarea').simulate('change', {
    target: { value: testText }
  });
  expect(wrapped.find('textarea').prop('value')).toEqual(testText);
});

it('should empty text area after submitted', () => {
  const testText = 'lorem ipsum dolor';
  const textArea = wrapped.find('textarea')
  textArea.simulate('change', {
    target: { value: testText }
  });
  wrapped.find('form').simulate('submit')
  expect(textArea.prop('value')).toEqual("");
})
