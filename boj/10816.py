n = int(input())
arr = sorted(list(map(int, input().split())))

m = int(input())
arr2 = list(map(int, input().split()))


def binary_search(start, end, target):
    if start > end:
        return 0
    middle = (start + end) // 2
    if arr[middle] < target:
        return binary_search(middle+1, end, target)
    elif arr[middle] > target:
        return binary_search(start, middle-1, target)
    if arr[middle] == target:
        return 1


for num in arr2:
    print(binary_search(0, n-1, num), end=' ')
