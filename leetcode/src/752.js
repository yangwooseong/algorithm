/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const dead = new Set(deadends)
  let queue = [['0000', 0]]
  const visited = new Set(['0000'])

  const getNextStates = (s) => {
      const res = []

      for (let i=0;i<s.length;i++) {
          res.push(s.slice(0, i) + ((parseInt(s[i]) + 1) % 10).toString() + s.slice(i+1))
          res.push(s.slice(0, i) + ((parseInt(s[i]) + 9) % 10).toString() + s.slice(i+1))
      }

      return res
  }

  while (queue.length) {
      const nextQueue = []

      for (const [cur, step] of queue) {
          if (cur === target) { return step }
          if (dead.has(cur)) { continue }
          for (const next of getNextStates(cur)) {
              if (visited.has(next)) { continue }
              visited.add(next)
              nextQueue.push([next, step + 1])
          }
      }
      queue = nextQueue
  }

  return -1
};