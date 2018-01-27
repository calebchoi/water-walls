const findWaterCount = require('./findWaterCount');

test('find water count on top of each block', () => {
  expect(findWaterCount([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([0, 2, 0, 5, 1, 3, 2, 0, 1, 0]);
});

test('find water count when no water collected', () => {
  expect(findWaterCount([0, 1, 2, 3, 4])).toEqual([0, 0, 0, 0, 0]);
});