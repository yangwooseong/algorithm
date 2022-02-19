var bstToGst = function (root) {
  go(root, 0)
  return root
}

function go(node, sum) {
  if (node.right) node.val += go(node.right, sum)
  else node.val += sum
  // console.log(node, sum)
  if (node.left) return go(node.left, node.val)
  return node.val
}
