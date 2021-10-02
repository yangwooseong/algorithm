/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let obj = {}
  nums.forEach((val, idx) => {
    obj[val] = obj[val] == undefined ? [idx] : [...obj[val], idx]
  })
  for(key in obj) {
    if(target - key in obj && obj[target-key] !== obj[key]) {
      return [obj[key], obj[target-key]]
    }
    else if(target-key in obj && obj[target-key].length > 1) {
      return obj[target-key]
    }
  }
};

const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum(nums, target))