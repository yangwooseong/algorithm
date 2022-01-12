function solution(s) {
  return s
    .split(' ')
    .map((v) => {
      if (v === '') return v
      const first = v[0].toUpperCase()
      const rest = v.slice(1) ? v.slice(1).toLowerCase() : ''
      console.log(rest)
      return first + rest
    })
    .join(' ')
}

console.log(solution('  abc 333  asldfj 3 asdfj zxcv'))
