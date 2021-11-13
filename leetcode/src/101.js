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

// var isSymmetric = function (root) {
//   let left_arr = []
//   let right_arr = []

//   function traverse_left(node, arr) {
//     arr.push(node ? node.val : null)
//     if (node === null) return
//     traverse_left(node.left, arr)
//     traverse_right(node.right, arr)
//   }

//   function traverse_right(node, arr) {
//     arr.push(node ? node.val : null)
//     if (node === null) return
//     traverse_right(node.right, arr)
//     traverse_left(node.left, arr)
//   }

//   traverse_left(root.left, left_arr)
//   traverse_right(root.right, right_arr)

//   return JSON.stringify(left_arr) === JSON.stringify(right_arr)
// }

// 어메이징 풀이
// var isSymmetric = function (root) {
//   return helper(root, root)
// }

// const helper = function (p, q) {
//   if (p == null && q == null) return true
//   if (p == null || q == null) return false
//   return p.val == q.val && helper(p.left, q.right) && helper(p.right, q.left)
// }
