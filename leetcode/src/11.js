/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let max = (right - left - 1) * Math.min(height[left], height[right])

  while (left < right) {
    if (height[left + 1] > height[right - 1]) {
      left += 1
    } else right -= 1
    max = Math.max(
      max,
      (right - left - 1) * Math.min(height[left], height[right]),
    )
    console.log(left, right, max)
  }
}
