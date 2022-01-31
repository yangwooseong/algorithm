let canFinish = (numCourses, prerequisites) => {
  const g = {}
  const visited = new Set()
  for (let i = 0; i < numCourses; i++) {
    g[i] = []
  }
  for (const p of prerequisites) {
    const [a, b] = p
    g[a].push(b)
  }

  const dfs = (cur) => {
    // console.log(cur, visited, JSON.stringify(g))
    if (visited.has(cur)) return false
    if (!g[cur].length) return true
    visited.add(cur)
    for (let node of g[cur]) {
      if (!dfs(node)) return false
    }
    visited.delete(cur)
    g[cur] = []
    return true
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false
  }
  return true
}

const numCourses = 4
const prerequisites = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [1, 3],
  [2, 3],
]

console.log(canFinish(numCourses, prerequisites))
