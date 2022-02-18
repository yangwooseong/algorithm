/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const ans = new Array(boxes.length).fill(0)
  for (let i = 0, cnt = 0, ops = 0; i < boxes.length; i++) {
    ans[i] += ops
    cnt = boxes[i] === '1' ? cnt + 1 : cnt
    ops += cnt
  }
  for (let i = boxes.length - 1, cnt = 0, ops = 0; i > -1; i--) {
    ans[i] += ops
    cnt = boxes[i] === '1' ? cnt + 1 : cnt
    ops += cnt
  }

  return ans
}
