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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  if (!root) { return 0 }
  let ans = 0
  let queue = [[root, [root.val]]] // Array<[node, pathSum[]]>

  while (queue.length) {
      const nextQueue = []
      for (const [node, pathSums] of queue) {
          if (node.left) {
              nextQueue.push([node.left, [...pathSums.map(sum => sum + node.left.val), node.left.val]])
          }
          if (node.right) {
              nextQueue.push([node.right, [...pathSums.map(sum => sum + node.right.val), node.right.val]])
          }
      }

      ans += queue.flatMap(v => v[1]).filter(sum => sum === targetSum).length
      queue = nextQueue
  }

  return ans
};