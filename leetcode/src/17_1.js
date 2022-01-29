var letterCombinations = (digits) => {
  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const answer = []
  const dfs = (idx, current) => {
    if (current.length === digits.length) {
      console.log(current)
      answer.push(current.slice())
      return
    }
    for (let i = idx; i < digits.length; i++) {
      for (let cha of obj[digits[i]]) {
        dfs(i + 1, current + cha)
      }
    }
  }
  dfs(0, '')
  console.log(answer)
  return answer
}

const digits = '23'
letterCombinations(digits)
