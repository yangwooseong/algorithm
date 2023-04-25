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
 var isSymmetric = function(root) {
  const isSame = (left, right) => {
      if (!left && !right) { return true }
      if ((left && !right) || (!left && right)) { return false }
      if (left.val !== right.val) { return false }

      return isSame(left.left, right.right) && isSame(left.right, right.left)
  }
  if (!root ) { return true }
  return isSame(root.left, root.right)
};