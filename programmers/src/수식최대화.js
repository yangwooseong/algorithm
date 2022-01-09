// permutation 함수는 연습용으로 썼지만 실제로는 하드코딩하는게 좋음

function solution(expression) {
  const permutation = (current, string, result) => {
    if (current.length === 3) {
      result.push(current.slice())
      return
    }

    for (let i = 0; i < string.length; i++) {
      if (!current.includes(string[i])) {
        current.push(string[i])
        permutation(current, string, result)
        current.pop()
      }
    }

    return result
  }

  const permutations = permutation([], '-+*', [])
  const results = []

  for (const perm of permutations) {
    const tempArr = expression.split(/(\D)/)
    // console.log(perm)
    for (const op of perm) {
      while (tempArr.includes(op)) {
        const idx = tempArr.indexOf(op)
        let computedNum
        if (op === '-') {
          computedNum =
            parseInt(tempArr[idx - 1]) - parseInt(tempArr[idx + 1]) - 0
        } else if (op === '+') {
          computedNum =
            parseInt(tempArr[idx - 1]) + parseInt(tempArr[idx + 1]) - 0
        } else if (op === '*') {
          computedNum =
            parseInt(tempArr[idx - 1]) * parseInt(tempArr[idx + 1]) - 0
        }
        tempArr.splice(idx - 1, 3, computedNum)
        // console.log(tempArr)
      }
    }
    results.push(tempArr[0])
  }
  const answer = Math.max(...results.map((v) => Math.abs(v)))
  // console.log(answer)
  return answer
}

const expression = '50*6-3*2'
solution(expression)
