const findMaxTrappedWater = require('./findMaxTrappedWater');

test('find maximum trapped water', () => {
  expect(findMaxTrappedWater([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([3, 8, 11]);
});

test('find maximum trapped water when left edge !== right edge', () => {
  expect(findMaxTrappedWater([5, 3, 2, 1, 5])).toEqual([1, 5, 9]);
});

test('max should be 0 when no water is trapped', () => {
  expect(findMaxTrappedWater([1, 2, 3, 4])).toEqual([1, 2, 0]);
});
