function solution(orders, course) {
  let answer = []
  const dict = {}

  const addCombinationToDict = (current, idx, order) => {
    if (course.includes(current.length)) {
      const string = current.slice().sort().join('')
      // 여기서 slice를 빼면 current 를 바꿔버리기 때문에 slice를 꼭 넣어야 한다.
      dict[string] = dict[string] === undefined ? 1 : dict[string] + 1

      if (current.length === course[course.length - 1]) return
    }

    for (let i = idx; i < order.length; i++) {
      current.push(order[i])
      addCombinationToDict(current, i + 1, order)
      current.pop()
    }
  }

  for (const order of orders) {
    addCombinationToDict([], 0, order)
  }

  const arr = []
  for (const [key, value] of Object.entries(dict)) {
    if (value === 1) continue
    arr.push([key, value])
  }

  arr.sort((a, b) =>
    a[0].length !== b[0].length ? a[0].length - b[0].length : b[1] - a[1],
  )

  for (const num of course) {
    const candidiates = arr.filter((item) => item[0].length === num)
    if (!candidiates.length) continue
    const max = candidiates[0][1]
    candidiates
      .filter((item) => item[1] === max)
      .map((item) => answer.push(item[0]))
  }

  answer.sort()
  console.log(answer)
  return answer
}

const orders = ['XYZ', 'XWY', 'WXA']
const course = [2, 3, 4]
solution(orders, course)
