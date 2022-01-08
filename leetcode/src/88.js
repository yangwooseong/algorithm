/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    let j = 0
    while (j < nums1.length && nums1[j] <= nums2[i] && j < m + i) {
      j++
    }
    for (let k = nums1.length - 1; k > j; k--) {
      nums1[k] = nums1[k - 1]
    }
    nums1[j] = nums2[i]
    console.log(j)
    console.log(nums1)
  }
}

const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3
merge(nums1, m, nums2, n)
