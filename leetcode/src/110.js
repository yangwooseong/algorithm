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
 var isBalanced = function(root) {
  const helper = (node) => {
      if (!node) { return [true, 0] }
      const [isLeftBalanced, leftDepth] = helper(node.left)
      const [isRightBalanced, rightDepth] = helper(node.right)

      const isBalanced = isLeftBalanced && isRightBalanced && Math.abs(leftDepth - rightDepth) <= 1
      const depth = Math.max(leftDepth, rightDepth) + 1
      return [isBalanced, depth]
  }
  return helper(root)[0]
};