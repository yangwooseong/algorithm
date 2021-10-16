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
var diameterOfBinaryTree = function (root) {
  function dfs(node) {
    if (!node) return -1

    const left = dfs(node.left)
    const right = dfs(node.right)
    distance = Math.max(distance, left + right + 2)
    return Math.max(left, right) + 1
  }
  distance = 0
  dfs(root)
  return distance
}
