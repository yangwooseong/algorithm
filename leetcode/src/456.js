/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var find132pattern = function(nums) {
  const stack = []
  let min = nums[0]

  for (const num of nums) {
      while (stack.length && num >= stack[stack.length - 1][0]) {
          stack.pop()
      }

      if (stack.length && stack[stack.length-1][1] < num) { return true }

      stack.push([num, min])
      min = Math.min(num, min)
  }

  return false
};


// [3, 2, 2, 3, 2.5]

// [3], Infinity
// [3, 2, 2], 2
// [3, 3], 2


// [3], Infinity
// [3, 2], 2
// [3], 2
// 1 -> true