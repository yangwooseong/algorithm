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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const nodesAtDepth = (root, depth) => {
  console.assert(depth > 0, 'depth can not be negative or equal to 0')

  let queue = [root]

  while (depth > 1) {
      const nextQueue = []
      for (const node of queue) {
          if(node.left) { nextQueue.push(node.left) }
          if(node.right) { nextQueue.push(node.right) }
      }
      queue = nextQueue
      depth -= 1
  }

  return queue
}

var addOneRow = function(root, val, depth) {
  if (depth === 1) {
      return new TreeNode(val, root)
  } 

  for (const node of nodesAtDepth(root, depth-1)) {
      node.left = new TreeNode(val, node.left, null)
      node.right = new TreeNode(val, null, node.right)
  }
  return root
};