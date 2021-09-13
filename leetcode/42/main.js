/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0, right = height.length - 1
  let leftMax = 0, rightMax = 0
  let volume = 0

  while(left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    volume = volume + leftMax - height[left]
    volume = volume + rightMax - height[right]
    if(leftMax < rightMax) {
      left = left + 1
    }
    else {
      right = right - 1
    }
    console.log(left, right, leftMax, rightMax, volume)
  }
  return volume
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height))