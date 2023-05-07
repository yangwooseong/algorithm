/**
 * @param {number[]} nums
 * @return {number}
 */
 var zeroFilledSubarray = function(nums) {
  let ans = 0
  let consequent = 0

  for (let i=0;i<nums.length;i++) {
      if (!nums[i]) { consequent += 1 }

      if (nums[i] && consequent) {
          ans += (consequent + 1) * consequent / 2
          consequent = 0
      }
  }
  ans += (consequent + 1) * consequent / 2

  return ans
};