/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let level = 1
  let max = root.val
  let ans = 1
  let queue = [root]
  while (queue.length) {
    const sum = queue.map((tree) => tree.val).reduce((a, b) => a + b)
    if (sum > max) {
      ans = level
      max = sum
    }
    const nextQueue = []
    for (const node of queue) {
      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)
    }
    queue = nextQueue
    level += 1
  }
  return ans
}
