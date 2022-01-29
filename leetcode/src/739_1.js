let dailyTemperatures = function (temperatures) {
  const answer = new Array(temperatures.length).fill(0)
  const stack = []

  for (let i = 0; i < temperatures.length; i++) {
    while (stack && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop()
      answer[idx] = i - idx
    }
    stack.push(i)
  }
  console.log(answer)
  return answer
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
dailyTemperatures(temperatures)
