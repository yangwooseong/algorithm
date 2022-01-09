function solution(arr) {
  const getPrimeUnderHundred = () => {
    const arr = [2]
    for (let p = 3; p < 100; p = p + 2) {
      let i = 3
      let prime = true
      while (i * i <= p) {
        if (p % i === 0) {
          prime = false
          break
        } else {
          i += 2
        }
      }
      prime && arr.push(p)
    }
    return arr
  }
  const primes = getPrimeUnderHundred()
  const LCM = (arr) => {
    const map = new Map()
    for (const prime of primes) {
      map.set(prime, 0)
    }
    for (let num of arr) {
      for (const prime of primes) {
        let count = 0
        while (num % prime === 0) {
          count += 1
          num /= prime
        }
        if (count) {
          map.set(prime, Math.max(count, map.get(prime)))
        }
        if (num === 1) break
      }
    }
    return map
  }

  let answer = 1
  for (const [key, value] of LCM(arr).entries()) {
    answer *= Math.pow(key, value)
  }

  return answer
}

const arr = [1, 2, 3]
console.log(solution(arr))

// 최대 공약수 구하기
const gcd = (a, b) => {
  return a % b === 0 ? b : gcd(b, a % b)
  // b가 크면 알아서 swap 이 된다
}

// 최대 공배수 구하기
const nlcm = (arr) => {
  return arr.reduce((a, b) => (a * b) / gcd(a, b))
}
