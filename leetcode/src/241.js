let diffWaysToCompute = (expression, step) => {
  const ans = []
  for (let i = 0; i < expression.length; i++) {
    const cur = expression[i]
    if (['-', '+', '*'].includes(cur)) {
      // console.log(expression.slice(0, i), expression.slice(i + 1))
      const left = diffWaysToCompute(expression.slice(0, i), step + 1)
      const right = diffWaysToCompute(expression.slice(i + 1), step + 1)
      for (const j of left) {
        for (const k of right) {
          if (cur === '-') ans.push(parseInt(j, 10) - parseInt(k, 10))
          else if (cur === '+') ans.push(parseInt(j, 10) + parseInt(k, 10))
          else ans.push(parseInt(j, 10) * parseInt(k, 10))
        }
      }
    }
  }
  // for loop 에서 한번도 안걸리면 숫자만 있는 거 === base case
  return ans.length === 0 ? [expression] : ans
}
const expression = '6+6-1'
diffWaysToCompute(expression, 0)
