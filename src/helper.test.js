const { shuffle } = require('./helpers/helperFuncs');

describe('General Test', () => {
  test('should return shuffled array', () => {
    expect(shuffle([1, 2])).not.toBe([1, 2]);
  });
});
