const getKth = (lo, hi, k) => {
  const dp = { 1: 0 }
  const recursion = (n) => {
    if (dp[n] !== undefined) {
      return dp[n]
    } else if (n % 2) {
      dp[n] = recursion(3 * n + 1) + 1
    } else {
      dp[n] = recursion(n / 2) + 1
    }
    return dp[n]
  }
  const arr = []
  for (let i = lo; i < hi + 1; i++) {
    arr.push(i)
  }
  arr.sort((a, b) => recursion(a) - recursion(b))
  // console.log(arr)
  return arr[k - 1]
}
