/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = []
  let m = 1
  nums.forEach((val, idx) => {
    result.push(m)
    m = m*val
  })
  let n = 1
  for(let i=nums.length-1;i>=0;i--) {
    result[i] = result[i] * n
    n = n*nums[i]
  }
  return result
};

const nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))
