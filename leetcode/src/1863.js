/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let ans = 0

  const backtracking = (idx, cur) => {
    if (cur.length) {
      ans += cur.reduce((a, b) => a ^ b)
      // console.log(cur, cur.reduce((a,b) => a^b))
    }
    if (idx === nums.length) {
      return
    }
    for (let i = idx; i < nums.length; i++) {
      cur.push(nums[i])
      backtracking(i + 1, cur)
      cur.pop()
    }
  }

  backtracking(0, [])
  return ans
}
