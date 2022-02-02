/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsetsWithDup = function (nums) {
//   nums.sort((a, b) => a - b)
//   const answer = []

//   const dfs = (idx, current) => {
//     // console.log(current.slice(), idx)
//     if (idx === nums.length) {
//       answer.push(current.slice())
//       return
//     }

//     current.push(nums[idx])
//     dfs(idx + 1, current)
//     current.pop()

//     while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) {
//       idx += 1
//     }
//     dfs(idx + 1, current)
//   }

//   dfs(0, [])
//   // console.log(answer)
// }

let subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b)
  let ans = []
  const dfs = (idx, current) => {
    ans.push(current.slice())
    for (let i = idx; i < nums.length; i++) {
      if (i > idx && nums[i] === nums[i - 1]) continue
      current.push(nums[i])
      dfs(i + 1, current)
      current.pop()
    }
  }
  dfs(0, [])
  console.log(ans)
  return ans
}

const nums = [1, 2, 2]
subsetsWithDup(nums)
