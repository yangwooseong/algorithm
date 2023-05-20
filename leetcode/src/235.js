/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  const min = Math.min(p.val, q.val)
  const max = Math.max(p.val, q.val)

  let ans = null
  const dfs = (node) => {
      if (!node || ans) { return null }

      if (min < node.val && node.val < max) { 
          ans = node 
          return 
      }
      if (min === node.val || max === node.val) { 
          ans = node 
          return
      }

      if (node.val > max) { dfs(node.left) }
      if (node.val < min) { dfs(node.right) }
  }

  dfs(root)
  return ans
};