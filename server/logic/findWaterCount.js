const helper = require('./helper');

const findWaterCount = (height) => {
  const waterCount = new Array(height.length);
  const leftEdge = helper.findLeftEdge(height);
  const rightEdge = helper.findRightEdge(height);

  for (let i = 0; i < leftEdge.length - 1; i++) {
    waterCount[leftEdge[i]] = 0;
    for (let j = leftEdge[i] + 1; j < leftEdge[i+1]; j++) {
      waterCount[j] = Math.min(height[leftEdge[i]], height[leftEdge[i+1]]) - height[j];
    }
  }
  waterCount[leftEdge[leftEdge.length-1]] = 0;

  for (let i = rightEdge.length - 1; i > 0; i--) {
    waterCount[rightEdge[i]] = 0;
    for (let j = rightEdge[i] + 1; j < rightEdge[i-1]; j++) {
      waterCount[j] = Math.min(height[rightEdge[i]], height[rightEdge[i-1]]) - height[j];
    }
  }
  waterCount[rightEdge[0]] = 0;

  const leftEnd = leftEdge[leftEdge.length - 1];
  const rightEnd = rightEdge[rightEdge.length - 1];
  if (leftEnd !== rightEnd) {
    for (let i = leftEnd + 1; i < rightEnd; i++) {
      waterCount[i] = Math.min(height[leftEnd], height[rightEnd]) - height[i];
    }
  }

  return waterCount;
}

module.exports = findWaterCount;
