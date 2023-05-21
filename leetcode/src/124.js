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
 var maxPathSum = function(root) {
  let ans = -Infinity

  const dfs = (node) => {
      if (!node) { return 0 }
      const leftVal = Math.max(0, dfs(node.left))
      const rightVal = Math.max(0, dfs(node.right))

      const res = Math.max(leftVal + node.val, rightVal + node.val)
      ans = Math.max(ans, res, leftVal + node.val + rightVal)
      return res
  }

  dfs(root)

  return ans
};