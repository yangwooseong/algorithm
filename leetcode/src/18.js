/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  const sum = (i, j, k, l) => nums[i] + nums[j] + nums[k] + nums[l]
  const ans = []

  nums.sort((a, b) => a > b ? 1 : -1)
  for (let i=0;i<nums.length;i++) {
      if (nums[i] === nums[i-1]) { continue }

      for (let j=i+1;j<nums.length;j++) {
          if (j > i+1 && nums[j] === nums[j-1]) { 
              continue 
          }

          let k = j+1
          let l = nums.length - 1
          while (k < l) {
              if (k > j+1 && nums[k] === nums[k-1]) { 
                  k += 1
                  continue
              }
              // console.log("LOG", i, j, k, l)
              if (sum(i,j,k,l) === target) { 
                  ans.push([nums[i], nums[j], nums[k], nums[l]])
                  k += 1
              } else if (sum(i,j,k,l) > target) {
                  l -= 1
              } else {
                  k += 1
              }
          }
      }
  }

  return ans
};