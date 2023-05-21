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
 * @return {string}
 */
 var tree2str = function(root) {
  let ans = ''
  const preorder = (node) => {
      ans += node.val

      if (node.left) {
          ans += '('
          preorder(node.left)
          ans += ')'
      }
      if (!node.left && node.right) {
          ans += '()'
      }
      if (node.right) {
          ans += '('
          preorder(node.right)
          ans += ')'
      }
  }

  preorder(root)
  return ans
};