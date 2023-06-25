/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  arr.push(0)
  const n = arr.length
  const mod = 10 ** 9 + 7
  const stack = [-1]
  let ans = 0

  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack.at(-1)] > arr[i]) {
      const idx = stack.pop()
      ans += (idx - stack.at(-1)) * (i - idx) * arr[idx]
    }
    stack.push(i)
  }

  return ans % mod
};