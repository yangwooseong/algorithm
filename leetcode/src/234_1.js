var maxDepth = function (root) {
  const dfs = (node, depth) => {
    if (!node) return depth - 1

    return Math.max(dfs(node.left, depth + 1), dfs(node.right, depth + 1))
  }

  return dfs(node, 1)
}
