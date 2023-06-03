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
var widthOfBinaryTree = function(root) {
  let queue = [[root, 1]]
  let ans = 0
  while (queue.length) {
      ans = Math.max(ans, queue[queue.length-1][1] - queue[0][1] + 1)
      const nextQueue = []
      const firstNode = queue[0]

      for (let [node, index] of queue) {
          index -= firstNode[1]
          if (node.left) { nextQueue.push([node.left, index * 2]) }
          if (node.right) { nextQueue.push([node.right, index * 2 + 1]) }
      }
      // console.log(queue)
      queue = nextQueue
  }

  return ans
};