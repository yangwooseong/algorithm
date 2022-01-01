function nAndM(n, m, start, trace) {
  if (trace.length === m) {
    console.log(trace.join(' '))
    return
  }
  for (let i = start; i < n + 1; i++) {
    trace.push(i)
    nAndM(n, m, i + 1, trace)
    trace.pop()
  }
}

nAndM(4, 2, 1, [])
