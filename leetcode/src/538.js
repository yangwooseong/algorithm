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
 * @return {TreeNode}
 */
 var convertBST = function(root) {
  const stack = []
  let cur = root
  let curSum = 0

  while (cur || stack.length) {
      while (cur) {
          stack.push(cur)
          cur = cur.right
      }

      cur = stack.pop()
      cur.val += curSum
      curSum = cur.val
      cur = cur.left
  }

  return root
};