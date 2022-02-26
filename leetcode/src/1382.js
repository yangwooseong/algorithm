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
var balanceBST = function (root) {
  const sortedArr = []
  const inOrder = (node) => {
    if (!node) return
    inOrder(node.left)
    sortedArr.push(node.val)
    inOrder(node.right)
  }
  inOrder(root)

  const getBSTFromSortedArr = (nums) => {
    if (!nums.length) return null
    const mid = Math.floor(nums.length / 2)
    const tree = new TreeNode(
      nums[mid],
      getBSTFromSortedArr(nums.slice(0, mid)),
      getBSTFromSortedArr(nums.slice(mid + 1)),
    )
    return tree
  }
  return getBSTFromSortedArr(sortedArr)
}
