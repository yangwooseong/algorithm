import sys
input = sys.stdin.readline

r, c, k = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(3)]


def transpose(arr):
    n, m = len(arr), len(arr[0])
    transposed_arr = [[0] * n for _ in range(m)]
    for i in range(n):
        for j in range(m):
            transposed_arr[j][i] = arr[i][j]
    return transposed_arr


def my_sort(row):
    num_arr = []  # (숫자, 등장횟수)
    for n in row:
        if n == 0:
            continue
        if [n, 0] not in num_arr:
            num_arr.append([n, 0])
    for n in row:
        if n == 0:
            continue
        for i in range(len(num_arr)):
            if num_arr[i][0] == n:
                num_arr[i][1] += 1
                break
    num_arr.sort(key=lambda x: (x[1], x[0]))
    re = []
    for ar in num_arr:
        for i in ar:
            re.append(i)

    return re[:100]


def fill(arr):
    longest = max(list(map(lambda x: len(x), arr)))
    for i in range(len(arr)):
        for _ in range(longest - len(arr[i])):
            arr[i].append(0)

    return arr


for t in range(101):
    if r-1 < len(arr) and c-1 < len(arr[0]) and arr[r-1][c-1] == k:
        print(t)
        exit()
    else:
        if len(arr) >= len(arr[0]):
            for i in range(len(arr)):
                arr[i] = my_sort(arr[i])
            arr = fill(arr)
        else:
            arr = transpose(arr)
            for i in range(len(arr)):
                arr[i] = my_sort(arr[i])
            arr = fill(arr)
            arr = transpose(arr)

    # print(arr)


print(-1)
