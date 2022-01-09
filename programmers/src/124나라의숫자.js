function solution(n) {
  let answer = ''
  while (n) {
    if (n % 3 === 0) {
      answer = '4' + answer
      n = n / 3 - 1
    } else {
      answer = (n % 3).toString() + answer
      n = Math.floor(n / 3)
    }
  }
  var answer = ''
  return answer
}
