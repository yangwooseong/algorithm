function solution(str1, str2) {
  const getJackard = (arr1, arr2) => {
    const set = new Set([...arr1, ...arr2])
    let union = 0
    let intersection = 0
    console.log(set)
    set.forEach((item) => {
      const has1 = arr1.filter((x) => x === item).length
      const has2 = arr2.filter((x) => x === item).length
      union += Math.max(has1, has2)
      intersection += Math.min(has1, has2)
    })

    return union === 0 ? 65536 : Math.floor((intersection / union) * 65536)
  }

  const parse = (text) => {
    const result = []
    for (let i = 0; i < text.length - 1; i++) {
      const current = text.substr(i, 2)
      if (current.match(/[A-Za-z]{2}/)) {
        result.push(current.toLocaleLowerCase())
      }
    }
    return result
  }

  const arr1 = parse(str1)
  const arr2 = parse(str2)
  console.log(arr1, arr2)

  const answer = getJackard(arr1, arr2)
  console.log(answer)
  return answer
}

const str1 = 'France'
const str2 = 'french'

solution(str1, str2)
