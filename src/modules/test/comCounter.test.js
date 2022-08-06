import comments from './comments';

const movieComments = [
  {
    username: 'Jhon',
    comment: 'Wowww...',
  },
  {
    username: 'Maria',
    comment: 'Cool',
  },
  {
    username: 'Peter',
    comment: 'Nice movie',
  },
];

describe('Test Number of movies and comments', () => {
  test('Test Number of comments', () => {
    expect(comments(movieComments)).toBe(3);
  });
});