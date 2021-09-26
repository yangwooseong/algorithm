/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let freq = {}
  for (num of nums) {
    freq[num] = freq[num] + 1 || 1
  }
  let arr = [],
    ret = []
  for (let num in freq) {
    arr.push([num, freq[num]])
  }
  arr.sort((a, b) => b[1] - a[1])
  for (let i = 0; i < k; i++) {
    ret.push(parseInt(arr[i][0], 10))
  }
  return ret
}

const nums = [1, 1, 2, 3, 3, 3]
console.log(topKFrequent(nums, 2))
