/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(_heights) {
  let max = 0
  const stack = [] // Array<[idx, value]>
  const heights = [..._heights, 0]

  for (let i=0;i<heights.length;i++) {
      let start = i
      while (stack.length && stack[stack.length-1][1] > heights[i]) {
          const [idx, height] = stack.pop()

          max = Math.max(max, (i - idx) * height)
          start = idx
      }

      stack.push([start, heights[i]])
  }
  
  return max
};
