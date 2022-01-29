let simplifyPath = (path) => {
  path += '/'
  let cur = ''
  const stack = []

  for (let c of path) {
    if (c === '/') {
      if (cur === '..') {
        if (stack) stack.pop()
      } else if (cur && cur != '.') {
        stack.push(cur)
      }
      cur = ''
    } else {
      cur += c
    }
    console.log(stack, cur)
  }

  return '/' + stack.join('/')
}

const path = '/a/./b/../../c/'
simplifyPath(path)
