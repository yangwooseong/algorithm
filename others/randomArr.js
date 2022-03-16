const generateRandomArr = (n) => {
  const res = new Array(2 * n + 1)
    .fill(0)
    .map((_) => Math.floor(100 * (Math.random() - 0.5)))
  return res
}

const memoize = (fn, context) => {
  const res = {}
  return (...args) => {
    console.log(this)
    let key = JSON.stringify(args)
    if (!res[key]) {
      res[key] = fn(...args)
    }
    return res[key]
  }
}

const clumsysquare = (num1, num2) => {
  for (let i = 1; i <= 10 ** 8; i++) {}
  return num1 * num2
}

const add = (a) => (b) => {
  if (b) return add(a + b)
  return a
}

const cal = {
  total: 0,
  add(m) {
    this.total += m
    return this
  },
}

function x() {
  for (var i = 1; i <= 5; i++) {
    ;(function (j) {
      setTimeout(() => console.log(j), j * 1000)
    })(i)
  }
}

x()

const res = cal.add(5)
console.log(res.total)

console.log(add(2)(5)())

const smartsquare = memoize(clumsysquare)

console.time('t1')
console.log(smartsquare(9555, 2345))
console.timeEnd('t1')

console.time('t2')
console.log(smartsquare(9555, 2345))
console.timeEnd('t2')
