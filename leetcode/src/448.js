/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let cur = 1
  const answer = new Set(new Array(nums.length).fill(1).map((v, i) => v + i))
  for (const num of nums) {
    answer.delete(num)
  }
  // console.log(answer)
  return Array.from(answer)
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1]
findDisappearedNumbers(nums)

// 미쳤다..
var findDisappearedNumbers = function (nums) {
  let res = []
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i])
    let idx = num - 1
    nums[idx] = Math.abs(nums[idx]) * -1
    console.log(idx)
  }
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1)
  }
  return res
  // Time Complexity: O(N)
  // Space Complexity: O(1)
}

findDisappearedNumbers(nums)
