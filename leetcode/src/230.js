var kthSmallest = function (root, k) {
  let answer
  const inorder = (node) => {
    if (!node) return
    inorder(node.left)
    k -= 1
    if (!k) {
      answer = node.val
    }
    inorder(node.right)
  }

  return preorder(root)
}
