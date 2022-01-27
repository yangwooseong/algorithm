let replaceElements = (arr) => {
  const ans = new Array(arr.length).fill(-1)
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) continue
    ans[i] = Math.max(ans[i + 1], arr[i + 1])
  }
  return ans
}

const arr = [17, 18, 5, 4, 6, 1]
replaceElements(arr)
