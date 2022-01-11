let mergeTrees = function (roo1, roo2) {
  if (!roo1) return roo2
  if (!roo2) return roo1
  roo1.val += roo2.val

  roo1.left = mergeTrees(roo1.left, roo2.left)
  roo1.right = mergeTrees(roo1.right, roo2.right)

  return roo1
}
