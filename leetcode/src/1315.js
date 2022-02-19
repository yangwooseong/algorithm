// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var sumEvenGrandparent = function (root) {
//   let ans = 0
//   let queue = [root]
//   while (queue.length) {
//     let nextQueue = []
//     for (let node of queue) {
//       if (node.val % 2 === 0) {
//         if (node.left) {
//           if (node.left.left) ans += node.left.left.val
//           if (node.left.right) ans += node.left.right.val
//           nextQueue.push(node.left)
//         }
//         if (node.right) {
//           if (node.right.left) ans += node.right.left.val
//           if (node.right.right) ans += node.right.right.val
//           nextQueue.push(node.right)
//         }
//       }
//     }
//     queue = nextQueue
//   }
//   return ans
// }

// recursive
var sumEvenGrandparent = function (root) {
  let ans = 0
  if (!root) return 0
  if (root.val % 2 === 0) {
    if (root.left && root.left.left) ans += root.left.left.val
    if (root.left && root.left.right) ans += root.left.right.val
    if (root.right && root.right.left) ans += root.right.left.val
    if (root.right && root.right.right) ans += root.right.right.val
  }
  return ans + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)
}
