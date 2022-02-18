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
var deepestLeavesSum = function (root) {
  let queue = [root]
  while (queue.length) {
    let ans = 0
    const nextQueue = []
    for (let node of queue) {
      ans += node
      if (node.left) nextQueue.append(node.left)
      if (node.right) nextQueue.append(node.right)
    }
    queue = nextQueue
  }
  return ans
}
