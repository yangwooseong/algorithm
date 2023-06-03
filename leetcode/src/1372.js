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
var longestZigZag = function(root) {
  let ans = 0
  const helper = (node, direction) => {
      if (!node) { return -1 }

      const res = direction === 'right' ?  helper(node.right, 'left') + 1 : helper(node.left, 'right') + 1
      const other = direction === 'right' ? helper(node.left, 'right') + 1 : helper(node.right, 'left') + 1
      ans = Math.max(res, other, ans)
      return res
  }

  helper(root, 'right')
  return ans
};