/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    const isLeftSide = (idx) => {
        return idx === 0 || (arr[idx-1] < arr[idx] && arr[idx] < arr[idx+1])
    }

    const isRightSide = (idx) => {
        return idx === arr.length - 1 || (arr[idx-1] > arr[idx] && arr[idx] > arr[idx+1])
    }

    const isPeak = (idx) => {
        return arr[idx-1] < arr[idx] && arr[idx] > arr[idx+1]
    }

    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (isLeftSide(mid)) {
            left = mid + 1
        } else if (isRightSide(mid)) {
            right = mid - 1
        } else if (isPeak(mid)) {
            return mid
        }
    }
};