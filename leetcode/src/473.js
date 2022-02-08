/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
// special case of problem 698 when k = 4
var makesquare = function (matchsticks) {
  var canPartitionKSubsets = function (nums, k) {
    nums.sort((a, b) => b - a)
    const visit = new Array(nums.length).fill(false)
    const TARGET = nums.reduce((a, b) => a + b) / k
    let ans = false
    const backtrack = (idx, k, target, visit) => {
      if (k === 0) ans = true
      if (ans) return
      if (target === 0) {
        // console.log(visit.slice())
        backtrack(0, k - 1, TARGET, visit)
        return
      }

      for (let i = idx; i < nums.length; i++) {
        if (visit[i] || nums[i] > target) {
          continue
        }

        visit[i] = true
        backtrack(i + 1, k, target - nums[i], visit)
        visit[i] = false
      }
    }

    backtrack(0, k, TARGET, visit)
    return ans
  }
  return canPartitionKSubsets(matchsticks, 4)
}
