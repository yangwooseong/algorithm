let getSum = (a, b) => {
  const getSum = (s, c) => {
    console.log(s, c)
    if (c === 0) return s
    else return getSum(s ^ c, (s & c) << 1)
  }
  return getSum(a, b)
}

getSum(2, 3)
