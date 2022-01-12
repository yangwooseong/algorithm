function solution(n, words) {
  let answer = []
  const set = new Set()
  for (let i = 0; i < words.length; i++) {
    console.log(words[i - 1])
    if (i && !words[i].startsWith(words[i - 1][words[i - 1].length - 1])) {
      answer = [(i + 1) % n ? (i + 1) % n : n, Math.ceil((i + 1) / n)]
      break
    }
    if (set.has(words[i])) {
      answer = [(i + 1) % n ? (i + 1) % n : n, Math.ceil((i + 1) / n)]
      break
    }
    set.add(words[i])
  }
  if (answer.length === 0) answer = [0, 0]
  console.log(answer)
  return answer
}

const n = 4
const words = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']
solution(n, words)
