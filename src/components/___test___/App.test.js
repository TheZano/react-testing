import ReactDOM from 'react-dom'
import React from 'react';
import { App } from '../App';
import {shallow, mount} from 'enzyme'
import { CommentBox } from '../CommentBox';
import { CommentList } from '../CommentList';

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />)

})

afterEach(() => {
  wrapper.unmount()
})

test('shows a comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1)
})

test('shows a comment list', () => {
  expect(wrapper.find(CommentList).length).toEqual(1)
})