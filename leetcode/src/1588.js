/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const prefixSum = [0, ...arr.slice()]
  for (let i = 1; i < arr.length + 1; i++) {
    prefixSum[i] += prefixSum[i - 1]
  }
  let ans = 0
  for (let i = 1; i < arr.length + 1; i++) {
    for (let j = 0; j <= i - 1; j++) {
      if ((i - j) % 2) {
        // console.log(i, j, prefixSum[i], prefixSum[j], prefixSum[i] - prefixSum[j])
        ans += prefixSum[i] - prefixSum[j]
      }
    }
  }
  return ans
}
