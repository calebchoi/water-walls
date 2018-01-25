const findMaxTrappedWater = (height) => {
  let maxPair;
  let max = 0;

  const leftEdge = findLeftEdge(height);
  const rightEdge = findRightEdge(height);

  for (let i = 0; i < leftEdge.length - 1; i++) {
    let water = calculateTrappedWater(height, leftEdge[i], leftEdge[i+1]);
    if (water > max) {
      maxPair = [leftEdge[i], leftEdge[i+1]];
      max = water;
    }
  }

  for (let i = rightEdge.length - 1; i > 0; i--) {
    let water = calculateTrappedWater(height, leftEdge[i], leftEdge[i-1]);
    if (water > max) {
      maxPair = [leftEdge[i], leftEdge[i-1]];
      max = water;
    }
  }

  const leftEnd = leftEdge[leftEdge.length - 1];
  const rightEnd = rightEdge[rightEdge.length - 1];
  if (leftEnd !== rightEnd) {
    let water = calculateTrappedWater(height, leftEnd, rightEnd);
    if (water > max) {
      maxPair = [leftEnd, rightEnd];
      max = water;
    }
  }

  return [maxPair[0] + 1, maxPair[1] + 1, max];
}

const findLeftEdge = (height) => {
  const leftEdge = [];
  let max = 0;
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
  let max = 0;
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
