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
 var sumNumbers = function(root) {
  let ans = 0
  const dfs = (node, cur) => {
      if (!node) { return }

      cur *= 10
      cur += node.val

      if (!node.left && !node.right) { 
          ans += cur
          return
      }

      dfs(node.left, cur)
      dfs(node.right, cur)
  }

  dfs(root, 0)

  return ans
};