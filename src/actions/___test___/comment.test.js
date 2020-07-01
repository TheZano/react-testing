import { saveComment } from '../comment';
import { SAVE_COMMENT } from '../types';

it('should return properly', () => {
  expect(saveComment('lol lol lol')).toEqual({ type: SAVE_COMMENT, payload: 'lol lol lol' });
});
