/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
 var smallestDivisor = function(nums, threshold) {
  const isPass = (d) => nums.reduce((acc, cur) => acc + Math.ceil(cur/d), 0) <= threshold

  let left = 1
  let right = nums.reduce((acc, cur) => Math.max(acc, cur))
  let ans = right

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      // console.log("LOG: ", left, right, mid, isPass(mid))

      if (isPass(mid)) {
          ans = Math.min(ans, mid)
          right = mid - 1
      } else {
          left = mid + 1
      }
  }

  return ans
};