const flatten = (arr) => {
  let ans = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) ans = ans.concat(flatten(arr[i]))
    else ans.push(arr[i])
  }
  return ans
}

console.log(flatten([[1, 2, [3], [4], [[[5]]]]]))
