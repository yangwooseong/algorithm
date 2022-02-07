/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = []
  const ans = []
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop()
    }
    if (i - queue[0] === k) queue.shift()
    queue.push(i)
    ans.push(nums[queue[0]])
  }

  return ans.slice(k - 1)
}

const nums = [1, 3, 1, 2, 0, 5]
const k = 3
maxSlidingWindow(nums, k)
