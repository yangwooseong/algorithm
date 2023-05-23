/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(_board) {
  const board = _board.reverse().flatMap((v, i) => i % 2 === 0 ? v : v.reverse())
  const n = board.length
  const END = n - 1

  const pos = (cur) => {
      if (cur > END) {
          return END
      } else if (board[cur] === -1) {
          return cur 
      } else {
          return board[cur] - 1
      }
  }

  const visited = new Set([0])
  let step = 0
  let queue = [0]

  while (queue.length) {
      step += 1
      const nextQueue = []
      for (const cur of queue) {
          for (let i=1;i<7;i++) {
              const next = pos(cur + i)
              if (visited.has(next)) { continue }
              if (next === END) { return step }

              nextQueue.push(next)
              visited.add(next)
          }
      }
      queue = nextQueue
  }

  return -1
};