/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length
  const visited = new Array(n).fill(false)
  const ans = []

  const dfs = (idx, cur) => {
    if (idx === n - 1) ans.push(cur.slice())
    for (let m of graph[idx]) {
      if (!visited[m]) {
        cur.push(m)
        dfs(m, cur)
        cur.pop()
      }
    }
  }

  dfs(0, [0])
  return ans
}

const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []]
allPathsSourceTarget(graph)
