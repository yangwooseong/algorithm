const isSameTree = (p, q) => {
  if (!p && !q) return true

  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }

  return false
}
let isSubtree = function (root, subRoot) {
  if (!subRoot) return true
  if (!root) return false

  if (isSameTree(root, subRoot)) return true
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}
