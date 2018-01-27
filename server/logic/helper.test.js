const helper = require('./helper');

test('find left edges', () => {
  expect(helper.findLeftEdge([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([0, 2, 7]);
});

test('find right edges', () => {
  expect(helper.findRightEdge([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([9, 7]);
});

test('calculate water between two edges', () => {
  expect(helper.calculateTrappedWater([5, 1, 5], 0, 2)).toEqual(4);
});