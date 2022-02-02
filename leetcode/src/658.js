/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0
  let right = arr.length - 1
  let mid
  let val = arr[0]
  let idx = 0

  while (left < right) {
    mid = Math.floor((left + right) / 2)
    let curDiff = Math.abs(arr[mid] - x)
    let resDiff = Math.abs(val - x)
    if (curDiff < resDiff || (curDiff == resDiff && arr[mid] < val)) {
      val = arr[mid]
      idx = mid
    }
    console.log(val, idx, left, mid, right)

    if (arr[mid] < x) {
      left = mid + 1
    } else if (arr[mid] > x) {
      right = mid - 1
    } else {
      idx = mid
      break
    }
  }

  left = idx
  right = idx
  for (let i = 0; i < k - 1; i++) {
    if (left === 0) {
      right += 1
    } else if (
      right === arr.length - 1 ||
      x - arr[left - 1] <= arr[right + 1] - x
    ) {
      left -= 1
    } else {
      right += 1
    }
  }
  return arr.slice(left, right + 1)
}
const arr = [2, 3, 5, 7]

console.log(findClosestElements(arr, 2, 4))
