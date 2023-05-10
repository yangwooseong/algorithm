/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(_heights) {
  let max = 0
  const stack = [] // Array<[idx, value]>
  const heights = [..._heights, 0]

  for (let i=0;i<heights.length;i++) {
      let last = null
      while (stack.length && stack[stack.length-1][1] > heights[i]) {
          last = stack.pop()

          max = Math.max(max, (i - last[0]) * last[1])
      }

      if (last) {
          stack.push([last[0], heights[i]])
      } else {
          stack.push([i, heights[i]])
      }
  }
  
  return max
};
