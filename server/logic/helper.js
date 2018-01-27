const findLeftEdge = (height) => {
  const leftEdge = [];
  let max = -1;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i];
      leftEdge.push(i);
    }
  }
  return leftEdge;
}

const findRightEdge = (height) => {
  const rightEdge = [];
  let max = -1;
  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] > max) {
      max = height[i];
      rightEdge.push(i);
    }
  }
  return rightEdge;
}

const calculateTrappedWater = (height, idx1, idx2) => {
  let waterCount = Math.min(height[idx1], height[idx2]) * (idx2 - idx1 - 1);
  for (let i = idx1 + 1; i < idx2; i++) {
    waterCount -= height[i];
  }
  return waterCount;
}

module.exports = {
  findLeftEdge: findLeftEdge,
  findRightEdge: findRightEdge,
  calculateTrappedWater: calculateTrappedWater
};