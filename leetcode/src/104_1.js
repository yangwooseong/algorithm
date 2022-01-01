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
  let max = 0
  function dfs(root, depth) {
    if (!root) {
      max = Math.max(depth, max)
      return
    }
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
  }
  dfs(root, 0)

  return max
}
