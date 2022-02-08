/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0

  const neighbor = {}
  // wordList.push(beginWord)
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.slice(0, i) + '*' + word.slice(i + 1)
      if (neighbor[pattern]) {
        neighbor[pattern].push(word)
      } else {
        neighbor[pattern] = [word]
      }
    }
  }
  // console.log(neighbor)
  const visit = new Set([beginWord])
  let queue = [beginWord]
  let ans = 1
  while (queue.length) {
    let nextQueue = []
    for (let word of queue) {
      if (word === endWord) return ans
      for (let i = 0; i < word.length; i++) {
        let pattern = word.slice(0, i) + '*' + word.slice(i + 1)
        // console.log(pattern)
        for (let neighborWord of neighbor[pattern]) {
          if (!visit.has(neighborWord)) {
            visit.add(neighborWord)
            nextQueue.push(neighborWord)
          }
        }
      }
    }
    // console.log(nextQueue.slice())
    queue = nextQueue
    ans += 1
  }
  return 0
}

let beginWord = 'hit'
let endWord = 'cog'
let wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
// console.log(ladderLength(beginWord, endWord, wordList))
