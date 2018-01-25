# water-walls

## Set-up

### Input
```
const height = [5, 3, 7, 2, 6, 4, 6, 9, 1, 2];
```

### Output
```
const result = [3, 8, 10]
// 10 blocks of water trapped between blocks 3 and 8 
```

### Constraints
None

### Main Function
```
const findMaxTrappedWater = (height) => {
  // implementation
}
```

### Strategy
- Find the edges of bucket and store them into array by looping through height
- A height is considered an edge if it is bigger than all of the previous heights observed
- Find left edges by looping through height from first index
- Find right edges by looping through height from last index
- Calculate water stored in between each adjacent edges
- Find adjacent edges that hold the most water

### Big-O
- Time: O(n)
- Space: O(n)

### Transformative Steps
- Find left edges
```
// starting from first index, push onto leftEdge if height[i] > maxHeight
const leftEdge = [0, 2, 7];
```
- Find right edges
```
// starting from last index, push onto rightEdge if height[i] > maxHeight
const rightEdge = [9, 7];
```
- Calculate water stored between each adjacent edges and last indices of leftEdge and rightEdge if not the same value
```
[0, 2] -> 2
[2, 7] -> 10
[7, 9] -> 1
```
- Result
```
const result = [3, 8, 10];
// note that we add 1 to the indices, assuming block count starts at 1
```

## Implementation Prep

### Pseudocode
```
// findMaxTrappedWater

// initialize leftEdge and rightEdge to empty arrays
// initialize maxPairs and set max to 0
// findLeftEdge
// findRightEdge
// for each edge in leftEdge minus last edge
  // water = calculateTrappedWater
  // if water > max
    // set maxPair to [edge, next_edge]
    // set max to water

// for each edge in rightEdge minus first edge
  / water = calculateTrappedWater
  // if water > max
    // set maxPair to [edge, next_edge]
    // set max to water

// if values of last index of leftEdge and rightEdge are not equal
  / water = calculateTrappedWater
  // if water > max
    // set maxPair to [leftEdge[lastIdx], rightEdge[lastIdx]]
    // set max to water
// return [maxPair[0] + 1, maxPair[1] + 1, max]

<-------------------------------------------------------->
// findLeftEdge

// set max to 0
// for each height from first index
  // if height > max
    // push onto leftEdge
// return leftEdge

<-------------------------------------------------------->
// findRightEdge

// set max to 0
// for each height from last index
  // if height > max
    // push onto rightEdge
// return rightEdge

<-------------------------------------------------------->
// caculateTrappedWater

// waterCount = min of two edges * width between the edges
// for each height between edges
  // subtract the height from waterCount
// return waterCount

```


