// let maxSubArray = function (nums) {
//   let arr = new Array(nums.length).fill(0)
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) arr[0] = nums[0]
//     else {
//       arr[i] = Math.max(arr[i - 1] + nums[i], nums[i])
//     }
//   }
//   return Math.max(...arr)
// }

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// maxSubArray(nums)

let maxSubArray = function (nums) {
  let curSum = 0
  let answer = nums[0]
  for (const n of nums) {
    if (curSum < 0) {
      curSum = 0
    }
    curSum += n
    answer = Math.max(answer, curSum)
  }
  return answer
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(nums)
