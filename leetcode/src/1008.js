/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var bstFromPreorder = function(preorder) {
  if (!preorder.length) { return null }
  if (preorder.length === 1) { return new TreeNode(preorder[0]) }
  const stack = []
  // console.log("LOG: ", preorder.slice())

  for (let i=0;i<preorder.length;i++) {
      if (stack.length && stack[0] < preorder[i]) {
          return new TreeNode(preorder[0], bstFromPreorder(preorder.slice(1, i)), bstFromPreorder(preorder.slice(i)))
      }

      stack.push(preorder[i])
  }

  return new TreeNode(preorder[0], bstFromPreorder(preorder.slice(1)), null)
};