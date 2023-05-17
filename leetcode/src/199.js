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
 var rightSideView = function(root) {
  const ans = []

  if (!root) { return ans }
  
  let queue = [root]

  while (queue.length) {
      ans.push(queue[queue.length-1].val)

      const nextQueue = []
      for (const node of queue) {
          if(node.left) { nextQueue.push(node.left) }
          if(node.right) { nextQueue.push(node.right) }
      }
      queue = nextQueue
  }

  return ans
};