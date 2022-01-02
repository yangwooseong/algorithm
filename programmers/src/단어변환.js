function solution(begin, target, words) {
  const isHammingDistanceOne = (word1, word2) => {
    let distance = 0
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) distance += 1
    }

    return distance === 1
  }
  const bfs = (current, visited) => {
    let queue = [current]
    let answer = 0

    while (queue.length !== 0) {
      const nextQueue = []

      for (let q of queue) {
        if (q === target) {
          return answer
        }
        for (let word of words) {
          if (!visited[word] && isHammingDistanceOne(q, word)) {
            visited[word] = true
            nextQueue.push(word)
          }
        }
      }
      answer += 1
      queue = nextQueue.slice()
    }

    return 0
  }

  const visited = {}
  words.map((word) => (visited[word] = false))
  return bfs(begin, visited)
}

const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']

console.log(solution('hit', 'cog', words))
