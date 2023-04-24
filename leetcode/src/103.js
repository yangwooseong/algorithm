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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) { return [] }

    const ans = []
    let queue = [root]
    let depth = 2

    while (queue.length) {
        ans.push(queue.map(node => node.val))
        const nextQueue = []
        queue.reverse()
        // console.log("LOG: ", queue, depth)
        for (const node of queue) {
            if (depth % 2 === 0) {
                if (node.right) { nextQueue.push(node.right) }
                if (node.left) { nextQueue.push(node.left) }
            } else {
                if (node.left) { nextQueue.push(node.left) }
                if (node.right) { nextQueue.push(node.right) }
            }
        }

        depth += 1
        queue = nextQueue.slice()
    }

    return ans
};