const valueOf = (arr, idx) => arr[idx][1]
const timestampOf = (arr, idx) => arr[idx][0]
const getIdx = (arr, timestamp) => {

        if (!arr) { return -1 }

        let left = 0
        let right = arr.length - 1
        let res = -1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (timestampOf(arr, mid) <= timestamp) {
                res = mid
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return res
}

class TimeMap {
    constructor() {
        this.dict = {} // { [key: string]: Array<[timestamp, value]>}
    }

    set (key, value, timestamp) {
        if (this.dict[key]) {
            this.dict[key].push([timestamp, value])
        } else {
            this.dict[key] = [[timestamp, value]]
        }
    }

    get (key, timestamp) {
        const arr = this.dict[key]
        const idx = getIdx(this.dict[key], timestamp)
        return idx === -1 ? "" : valueOf(arr, idx) 
    }
}
