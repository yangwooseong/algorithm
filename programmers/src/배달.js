function solution(n, road, k) {
  const graph = new Array(n).fill([]).map((v) => new Array(n).fill(Infinity))
  for (const arr of road) {
    const [i, j, d] = arr
    const current = graph[i - 1][j - 1]
    graph[i - 1][j - 1] = Math.min(current, d)
    graph[j - 1][i - 1] = Math.min(current, d)
  }

  const dikjstra = (graph) => {
    const getClosestNode = () => {
      let closestNode = -1
      let closetDistance = Infinity
      for (let i = 0; i < n; i++) {
        if (!visited[i] && distance[i] < closetDistance) {
          closetDistance = distance[i]
          closestNode = i
        }
      }
      visited[closestNode] = true
      return closestNode
    }

    const updateDistance = (node) => {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          distance[i] = Math.min(graph[node][i] + distance[node], distance[i])
        }
      }
    }

    const distance = new Array(n).fill(Infinity)
    const visited = new Array(n).fill(false)
    for (let i = 0; i < n; i++) {
      distance[i] = graph[0][i]
    }
    distance[0] = 0

    for (let i = 0; i < n; i++) {
      // console.log(distance)
      closestNode = getClosestNode()
      updateDistance(closestNode)
      // console.log(closestNode, JSON.parse(JSON.stringify(graph)))
    }
    return distance.filter((v) => v <= k).length
  }

  return dikjstra(graph)
}

const n = 5
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
]
const k = 3
solution(n, road, k)
