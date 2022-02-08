/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {}

const nums = [4, 3, 2, 3, 5, 2, 1]
const k = 4

// step 1. 문제 쪼개기
// k는 신경쓰지 말고, sum = sum(nums) / k 인 subset 만 찾아보기

// const backtrack = (idx, target, current) => {
//   if (target === 0) {
//     console.log(current)
//     return
//   }

//   for (let i = idx; i < nums.length; i++) {
//     if (nums[i] > target) {
//       continue
//     }

//     current.push(i)
//     backtrack(i + 1, target - nums[i], current)
//     current.pop()
//   }
// }

// backtrack(0, nums.reduce((a, b) => a + b) / k, [])

// step 2. 함수 확장하기
// backtrack 함수에서 subset 찾으면 visit을 true로 하고 제외시키고
// index += 1 해서 backtrack 함수 호출
// k 인자 추가
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
