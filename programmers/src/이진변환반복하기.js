function solution(s) {
  let num = 0
  let zero = 0
  const bin = (n) => {
    let a = ''
    while (n) {
      a = n % 2 === 0 ? '0' + a : '1' + a
      n = Math.floor(n / 2)
    }
    return a
  }

  while (s !== '1') {
    const zeroLength = s.split('').filter((v) => v === '0').length
    zero += zeroLength
    s = bin(s.length - zeroLength)
    num += 1
  }
  return [num, zero]
}

console.log(solution('1111111'))
