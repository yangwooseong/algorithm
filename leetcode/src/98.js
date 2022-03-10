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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const helper = (root, upper, lower) => {
    if (!root) return true

    return (
      root.val < upper &&
      root.val > lower &&
      helper(root.left, root.val, lower) &&
      helper(root.right, upper, root.val)
    )
  }

  return helper(root, Infinity, -Infinity)
}
