/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  let ans = []
  const list1 = []
  const list2 = []
  const inOrder = (root, list) => {
    if (!root) return
    inOrder(root.left, list)
    list.push(root.val)
    inOrder(root.right, list)
  }

  inOrder(root1, list1)
  inOrder(root2, list2)
  let p1 = 0
  let p2 = 0
  while (p1 < list1.length && p2 < list2.length) {
    if (list1[p1] < list2[p2]) {
      ans.push(list1[p1])
      p1 += 1
    } else {
      ans.push(list2[p2])
      p2 += 1
    }
  }
  ans = ans.concat(list1.slice(p1)).concat(list2.slice(p2))
  return ans
}
