/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const binary = (arr, num) => {
    let start, end
    start = 0
    end = arr.length
    mid = parseInt((start + end) / 2, 10)

    while (arr[mid] !== num) {
      if (arr[mid] < num) {
        start = mid + 1
      } else {
        end = mid - 1
      }
      mid = parseInt((start + end) / 2, 10)
      // console.log(start, mid, end)
      if (start >= end) {
        return arr[start] < num ? start + 1 : start
      }
    }

    return arr[mid] === num ? mid : mid + 1
  }

  return binary(nums, target)
}

const nums = [1, 3, 5, 6, 8, 9, 10, 11]

console.log(searchInsert(nums, 4))
