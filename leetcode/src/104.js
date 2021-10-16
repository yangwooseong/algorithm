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
var maxDepth = function (root) {
  let queue = [root]
  let depth = 0

  while (queue.length !== 0) {
    depth += 1
    for (let i = 0; i < queue.length; i++) {
      q = queue.shift()
      if (q.left) {
        queue.push(q.left)
      }
      if (q.right) {
        queue.push(q.right)
      }
    }
    console.log(queue.slice())
  }

  return depth
}
