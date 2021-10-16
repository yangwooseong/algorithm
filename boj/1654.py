n, k = list(map(int, input().split()))
arr = []

for _ in range(n):
    arr.append(int(input()))


def binary_search(start, end, target):
    middle = (start + end) // 2
    while middle != start:
        value = sum(list(map(lambda x: x // middle, arr)))
        # print(start, end, middle, value)
        if value < target:
            end, middle = middle, (start+middle) // 2
        elif value >= target:
            start, middle = middle, (middle+end) // 2
    return middle


ans = binary_search(0, 2**31, k)
print(ans)
