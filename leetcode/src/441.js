/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
  const canArrange = (m) => m*(m+1)/2 > n

  let left = 1
  let right = 2**16
  let ans = right

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (canArrange(mid)) {
          ans = Math.min(ans, mid)
          right = mid - 1
      } else {
          left = mid + 1
      }
  }

  return ans - 1
};