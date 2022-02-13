const quicksort = (arr, left, right) => {
  const partition = (arr, left, right, pivot) => {
    while (left <= right) {
      while (arr[left] < pivot) {
        left++
      }
      while (arr[right] > pivot) {
        right--
      }
      if (left <= right) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
      }
    }
    // console.log(arr.slice(), left, right)
    return left
  }
  if (left >= right) {
    return
  }
  const pivot = arr[Math.floor((left + right) / 2)]
  const idx = partition(arr, left, right, pivot)
  quicksort(arr, left, idx - 1)
  quicksort(arr, idx, right)
  return arr
}

const arr = [6, 4, 5, 2, 10]
quicksort(arr, 0, arr.length - 1)
