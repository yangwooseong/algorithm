/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let res = []
  let prev_elements = []
  function dfs(elements) {
    if (elements.length === 0) {
      res.push(prev_elements.slice())
    }

    for (let i = 0; i < elements.length; i++) {
      next_elements = elements.slice()
      next_elements.splice(i, 1)
      prev_elements.push(elements[i])

      dfs(next_elements)
      prev_elements.pop()
    }
  }
  dfs(nums)
  return res
}

nums = [1, 2, 3]
console.log(permute(nums))
