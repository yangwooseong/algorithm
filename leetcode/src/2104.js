/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  const len = nums.length
  const getSumOfSubArrayMax = (arr) => {
    let sum = 0
    const maxStack = [] // Array<(maxValue, count)>
    for (let i = 0; i < len; i++) {
      maxStack.push([arr[i], 1])
      for (let j = i + 1; j < len; j++) {
        if (maxStack.length && maxStack[0][0] < arr[j]) {
          const [maxValue, count] = maxStack.pop()
          sum += maxValue * count
          maxStack.push([arr[j], 1])
        } else if (maxStack.length) {
          maxStack[0][1] += 1
        }
      }
      const [maxValue, count] = maxStack.pop()
      sum += maxValue * count
    }
    return sum
  }

  return getSumOfSubArrayMax(nums) + getSumOfSubArrayMax(nums.map((v) => -v))
}

const nums = [1, 3, 3]
subArrayRanges(nums)
