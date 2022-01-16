let maxProduct = function (nums) {
  let answer = Math.max(...nums)
  let curMin = 1
  let curMax = 1

  for (const n of nums) {
    if (n === 0) {
      curMax = 1
      curMin = 1
    } else {
      const temp = curMax
      curMax = Math.max(curMax * n, curMin * n, n)
      curMin = Math.min(temp * n, curMin * n, n)
      answer = Math.max(curMax, answer)
    }
    console.log(curMax, curMin, answer)
  }
  return answer
}

const nums = [-2, 3, -4]
maxProduct(nums)
