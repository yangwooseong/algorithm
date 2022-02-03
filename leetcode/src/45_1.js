// let jump = (nums) => {
//   let ans = 0
//   let goal = nums.length - 1
//   while (goal !== 0) {
//     for (let i = 0; i < goal; i++) {
//       if (i + nums[i] >= goal) {
//         goal = i
//         ans += 1
//         console.log(goal, i)
//         break
//       }
//     }
//   }
//   return ans
// }

let jump = (nums) => {
  let ans = 0
  let l = 0
  let r = 0
  let farthest

  while (r < nums.length - 1) {
    farthest = 0
    for (let i = l; i < r + 1; i++) {
      farthest = Math.max(farthest, i + nums[i])
    }
    l = r + 1
    r = farthest
    ans += 1
  }
  return ans
}

// const nums = [2, 3, 1, 1, 4]
// jump(nums)
