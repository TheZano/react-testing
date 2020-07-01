import comments from '../comments';
import { saveComment } from '../../actions/comment';

it('should return new state properly', () => {
  expect(comments([], saveComment('lol haha'))).toEqual([ 'lol haha' ]);
});

it('handle unknown types', () => {
  expect(comments([], { type: 'HILIH KINTIL', payload: 'lorem ipsum dolor' })).toEqual([]);
});
