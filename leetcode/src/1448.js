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
var goodNodes = function (root) {
  const dfs = (node, currentMax) => {
    if (node.val > currentMax) ans += 1
    if (node.left) dfs(node.left, Math.max(node.val, currentMax))
    if (node.right) dfs(node.right, Math.max(node.val, currentMax))
  }
  dfs(root, root.val)
  return ans
}
