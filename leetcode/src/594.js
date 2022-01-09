/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length - 1; i++) {
    let candidate = nums
      .slice(i)
      .filter((v) => v === nums[i] || v === nums[i] + 1)
    if (Math.max(...candidate) - Math.min(...candidate) === 1) {
      max = Math.max(max, candidate.length)
    }
    candidate = nums.slice(i).filter((v) => v === nums[i] || v === nums[i] - 1)
    if (Math.max(...candidate) - Math.min(...candidate) === 1) {
      max = Math.max(max, candidate.length)
    }
  }
  return max
}

findLHS([1, 1, 1, 1])

// better solution
// var findLHS = function(nums) {
//   let count = {};
//   let res = 0;

//   for (let i = 0; i < nums.length; i++) {
//       count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;
//       if (count[nums[i]+1]) res = Math.max(res,count[nums[i]] + count[nums[i]+1]);
//       if (count[nums[i]-1]) res = Math.max(res,count[nums[i]] + count[nums[i]-1]);
//   };

//   return res;
// };
