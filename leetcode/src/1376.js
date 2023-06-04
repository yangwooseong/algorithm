/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  if (n === 1) { return informTime[0] }
  const graph = manager.reduce((acc, cur, idx) => {
      if (cur === -1) { return acc }
      if (!acc[cur]) { acc[cur] = [] }
      acc[cur].push(idx)
      return acc
  }, {})

  let ans = 0
  const dfs = (node, cur) => {
      ans = Math.max(ans, cur)
      if (!graph[node]) { return }
      for (const child of graph[node]) {
          dfs(child, cur + informTime[child])
      }
  }

  dfs(headID, informTime[headID])

  return ans
};