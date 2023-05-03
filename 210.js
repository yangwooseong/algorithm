/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
  const dict = {}
  const ans = []

  for (let i=0;i<numCourses;i++) {
      dict[i] = []
  }

  for (const pre of prerequisites) {
      dict[pre[0]].push(pre[1])
  }

  const cycle = {} 
  const visit = {}
  const dfs = (node) => {
      if (cycle[node]) { return false }
      if (visit[node]) { return true }

      cycle[node] = true
      if (dict[node]?.length) {
          for (const n of dict[node]) {
              if (!dfs(n)) { return false }
          }
      }
      cycle[node] = false

      dict[node] = []
      ans.push(node)
      visit[node] = true
      return true
  }
  // console.log("LOG: ", dict)
  for (const node of Object.keys(dict)) {
      if (!dfs(node)) { return [] }
  }

  return ans
};