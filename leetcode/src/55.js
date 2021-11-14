/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let visited = Array(nums.length).fill(0)
  visited[0] = 1
  for (let i = 0; i < nums.length; i++) {
    if (!visited[i]) continue
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j < nums.length) visited[i + j] = 1
    }
    console.log(visited)
  }
  return visited[nums.length - 1] ? true : false
}
