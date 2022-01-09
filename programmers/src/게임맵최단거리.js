function solution(map) {
  let answer

  const n = map.length
  const m = map[0].length
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  const distance = new Array(n).fill([]).map((v) => new Array(m).fill(Infinity))
  distance[0][0] = 1
  let queue = [[0, 0]]

  while (queue.length) {
    let nextQueue = []
    for (const q of queue) {
      const [x, y] = q
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k]
        const ny = y + dy[k]
        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          distance[nx][ny] === Infinity &&
          map[nx][ny] === 1
        ) {
          distance[nx][ny] = distance[x][y] + 1
          nextQueue.push([nx, ny])
        }
      }
    }
    queue = nextQueue.slice()
    // console.log(queue)
  }

  // console.log(distance)
  return distance[n - 1][m - 1] === Infinity ? -1 : distance[n - 1][m - 1]
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]
solution(maps)
