function solution(msg) {
  const answer = []
  const dic = {}
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < alphabets.length + 1; i++) {
    dic[alphabets[i]] = i + 1
  }

  let i = 0
  let count = 27
  while (i < msg.length) {
    let longestLength = 1
    while (
      Object.keys(dic).includes(msg.substr(i, longestLength)) &&
      i + longestLength + 1 <= msg.length
    ) {
      longestLength += 1
    }
    answer.push(dic[msg.substr(i, longestLength)])
    dic[msg.substr(i, longestLength + 1)] = count
    count += 1
    i += longestLength
  }

  // console.log(answer)
  return answer
}

solution('ABABABABABABABAB')
