/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeroes = 0
    let left = 0
    let right = 0

    while (right < nums.length) {
        if (!nums[right]) { zeroes += 1 }

        if (zeroes > k) {
            if (!nums[left]) { zeroes -= 1}
            left += 1
        }
        right += 1
    }

    return right - left
};