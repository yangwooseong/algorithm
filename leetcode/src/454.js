/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const dict = {}

  nums1.forEach(num1 => {
      nums2.forEach(num2 => {
          const sum = num1 + num2
          dict[sum] = dict[sum] ? dict[sum] + 1 : 1
      })
  })

  let ans = 0
  nums3.forEach(num3 => {
      nums4.forEach(num4 => {
          const key = - num3 - num4
           ans += dict[key] ?? 0
      })
  })
  
  return ans 
};