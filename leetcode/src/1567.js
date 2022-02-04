let getMaxLen = (nums) => {
  let positive = 0
  let negative = 0
  let ans = 0

  for (let n of nums) {
    if (n === 0) {
      positive = 0
      negative = 0
    } else if (n > 0) {
      positive += 1
      negative = negative === 0 ? 0 : negative + 1
    } else {
      const temp = positive
      positive = negative === 0 ? 0 : negative + 1
      negative = temp + 1
    }
    ans = Math.max(ans, positive)
    console.log(positive, ans)
  }
  return ans
}

const nums = [0, 1, -2, -3, -4]
getMaxLen(nums)
