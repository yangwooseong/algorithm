function nAndM(n, m, trace) {
  if (trace.length === m) {
    console.log(trace.join(' '))
    return
  }
  for (let i = 1; i < n + 1; i++) {
    if (!trace.includes(i)) {
      trace.push(i)
      nAndM(n, m, trace)
      trace.pop()
    }
  }
}

nAndM(4, 4, [])
