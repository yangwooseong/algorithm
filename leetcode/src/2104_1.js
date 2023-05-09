/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function(nums) {
  const getMaxSumOfSubArray = (arr) => {
      const l = arr.length
      let sum = 0

      for (let i=0;i<l;i++) {
          const stack = [] // Array<idx>
          for (let j=i;j<l;j++) {
              if (stack && arr[stack.at(-1)] >= arr[j]) { continue }
              
              if (stack.length) {
                  const idx = stack.pop()
                  sum += (j-idx) * arr[idx]
              }
              stack.push(j)
          }
          if (stack.length) {
              const idx = stack.pop()
              sum += (l-idx) * arr[idx]
          }
      }

      return sum
  }

  return getMaxSumOfSubArray(nums) + getMaxSumOfSubArray(nums.map(v => v*(-1)))
};