const helper = require('./helper');

const findMaxTrappedWater = (height) => {
  let maxPair;
  let max = -1;

  const leftEdge = helper.findLeftEdge(height);
  const rightEdge = helper.findRightEdge(height);

  for (let i = 0; i < leftEdge.length - 1; i++) {
    let water = helper.calculateTrappedWater(height, leftEdge[i], leftEdge[i+1]);
    if (water > max) {
      maxPair = [leftEdge[i], leftEdge[i+1]];
      max = water;
    }
  }

  for (let i = rightEdge.length - 1; i > 0; i--) {
    let water = helper.calculateTrappedWater(height, leftEdge[i], leftEdge[i-1]);
    if (water > max) {
      maxPair = [leftEdge[i], leftEdge[i-1]];
      max = water;
    }
  }

  const leftEnd = leftEdge[leftEdge.length - 1];
  const rightEnd = rightEdge[rightEdge.length - 1];
  if (leftEnd !== rightEnd) {
    let water = helper.calculateTrappedWater(height, leftEnd, rightEnd);
    if (water > max) {
      maxPair = [leftEnd, rightEnd];
      max = water;
    }
  }

  return [maxPair[0] + 1, maxPair[1] + 1, max];
}

module.exports = findMaxTrappedWater;
