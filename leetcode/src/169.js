var majorityElement = function (nums) {
  let obj = {}
  for (let i of nums) {
    obj[i] = obj[i] === undefined ? 1 : obj[i] + 1
    if (obj[i] > parseInt(nums.length / 2, 10)) return i
  }
}
