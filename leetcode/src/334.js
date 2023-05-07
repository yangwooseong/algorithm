/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
  let first = Infinity
  let second = Infinity

  for (let i=0;i<nums.length;i++) {
      if (nums[i] < first) {
          first = nums[i]
      } else if (first < nums[i] && nums[i] < second) {
          second = nums[i]
      } else if (nums[i] > second){
          return true 
      }
  }
  return false
};

// [2, 1, 5, 0, 4, 6]

// [2, 1, 1, 0, 0, 0]
// [6, 6, 6, 6, 6, 6]