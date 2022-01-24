let minimumSize = (nums, maxOperations) => {
  let left = 1
  let right = Math.max(...nums)
  let mid
  let ops

  while (left < right) {
    mid = Math.floor((left + right) / 2)
    ops = nums.map((n) => Math.floor((n - 1) / mid)).reduce((a, b) => a + b)
    // console.log(left, mid, right, ops)
    if (ops > maxOperations) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  // console.log(left, mid, right)
  return left
}

const nums = [2, 4, 8, 2]
const maxOperations = 2
minimumSize(nums, maxOperations)
