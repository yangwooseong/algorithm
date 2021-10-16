n = int(input())
arr = sorted(list(map(int, input().split())))

m = int(input())
arr2 = list(map(int, input().split()))


def binary_search(start, end, target):
    middle = (start + end) // 2
    while True:
        if arr[middle] < target:
            start = middle
            middle = (middle + end) // 2
        elif arr[middle] > target:
            end = middle
            middle = (start + middle) // 2
        # print(start, middle, end)
        if arr[middle] == target:
            return 1
        elif middle == start:
            return 0


for num in arr2:
    print(binary_search(0, len(arr), num))
