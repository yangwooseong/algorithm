/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  nums.sort((a, b) => a > b ? 1 : -1) 
  // sort function 지정 안하면 문자열로 생각한다..
  for(let i=0;i<nums.length;i++) {
    if(i > 0 && nums[i] === nums[i-1]) continue
    let j=i+1, k=nums.length-1
    while(j < k) {
      if(i < j-1 && nums[j-1] === nums[j]) {
        j = j + 1 
        continue
      }
      if (0 === nums[i] + nums[j] + nums[k]) {
        result.push([nums[i], nums[j], nums[k]])
        j = j + 1
      }
      else if (0 < nums[i] + nums[j] + nums[k]) {
        k = k - 1
      }
      else if (0 > nums[i] + nums[j] + nums[k]) {
        j = j + 1
      }
    }
  }

  return result
};

const nums = [-1, 0, -4, 1, 2, 2, 2, 2, -1, -4]
console.log(threeSum(nums))
