let partitionLabels = function (s) {
  let lastIndex = 0
  let size = 0
  const answer = []
  for (let i = 0; i < s.length; i++) {
    size += 1
    if (s.lastIndexOf(s[i]) > lastIndex) {
      lastIndex = Math.max(s.lastIndexOf(s[i]), lastIndex)
    }
    if (i == lastIndex) {
      answer.push(size)
      size = 0
    }
  }
  return answer
}

const s = 'eccbbbbdec'
partitionLabels(s)
