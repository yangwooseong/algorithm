let singleNumber = function (nums) {
  const map = new Map()
  const answer = []
  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i])
      ? map.set(nums[i], map.get(nums[i]) * -1)
      : map.set(nums[i], -1)
  }
  // console.log(map)
  for (const [k, v] of map.entries()) {
    if (v === -1) {
      answer.push(k)
    }
  }
  return answer
}

const nums = [0, 1]
console.log(singleNumber(nums))
