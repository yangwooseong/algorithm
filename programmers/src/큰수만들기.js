function solution(number, k) {
  let answer = ''
  const stack = [number[0]]
  if (number.length === 0 && k == 1) return 0
  for (let i = 1; i < number.length; i++) {
    while (stack.length && stack[stack.length - 1] < number[i] && k) {
      stack.pop()
      k--
    }
    stack.push(number[i])
  }
  while (k) {
    stack.pop()
    k--
  }
  console.log(stack)
  return stack.join('')
}

solution('1924', 1)
