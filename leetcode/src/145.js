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
 * @return {number[]}
 */
// var postorderTraversal = function (root) {
//   let ret = []
//   recursiveAppend(root)

//   function recursiveAppend(cur) {
//     if (!cur) return
//     recursiveAppend(cur.left)
//     recursiveAppend(cur.right)
//     ret.push(cur.val)
//   }
// }

var postorderTraversal = function (root) {
  if (!root) return []
  let res = []
  let stack = []
  stack.push(root)
  while (stack.length !== 0) {
    cur = stack[stack.length - 1]
    if (cur.left) {
      stack.push(cur.left)
      cur.left = null
    } else if (cur.right) {
      stack.push(cur.right)
      cur.right = null
    } else {
      res.push(stack.pop().val)
    }
  }
  return res
}
