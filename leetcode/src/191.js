/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let ans = 0
   for (let i=0;i<32;i++) {
      ans += n & 1
      n = n >> 1
   }
  return ans
}