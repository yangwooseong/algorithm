function solution(s) {
  const arr = []
  let answer = []
  let start
  let end
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '{') start = i
    else if (s[i] === '}') {
      arr.push(new Set(s.slice(start + 1, i).split(',')))
    }
  }
  arr.sort((a, b) => a.size - b.size)

  console.log(arr)
  for (const n of arr[arr.length - 1]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].has(n)) {
        answer[i] = parseInt(n)
        break
      }
    }
  }
  console.log(answer)
  return answer
}

const s = '{{4,2,3},{3},{2,3,4,1},{2,3}}'
solution(s)
