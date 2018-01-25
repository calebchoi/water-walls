const logic = require('./findMaxTrappedWater');

test('find left edges', () => {
  expect(logic.findLeftEdge([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([0, 2, 7]);
});

test('find right edges', () => {
  expect(logic.findRightEdge([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([9, 7]);
});

test('calculate water between two edges', () => {
  expect(logic.calculateTrappedWater([5, 1, 5], 0, 2)).toEqual(4);
});

test('find maximum trapped water', () => {
  expect(logic.findMaxTrappedWater([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([3, 8, 11]);
});

test('find maximum trapped water when left edge !== right edge', () => {
  expect(logic.findMaxTrappedWater([5, 3, 2, 1, 5])).toEqual([1, 5, 9]);
});

test('max should be 0 when no water is trapped', () => {
  expect(logic.findMaxTrappedWater([1, 2, 3, 4])).toEqual([1, 2, 0]);
});
