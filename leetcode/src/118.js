/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const answer = [[1]]

  for (let i = 1; i < numRows; i++) {
    const lastElement = answer[answer.length - 1].concat([1])
    const newElement = lastElement.slice()
    for (let i = 1; i < lastElement.length - 1; i++) {
      newElement[i] = lastElement[i] + lastElement[i - 1]
    }

    console.log(newElement, lastElement)
    answer.push(newElement)
  }
  return answer
}

generate(5)
