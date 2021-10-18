n, m, r = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))
o = list(map(int, input().split()))


def op1(arr):
    arr = arr[::-1]
    return arr


def op2(arr):
    n = len(arr)
    for i in range(n):
        arr[i] = arr[i][::-1]
    return arr


def op3(arr):
    n, m = len(arr), len(arr[0])
    new_arr = [[] for _ in range(m)]
    for i in range(m):
        for j in range(n):
            new_arr[i].append(arr[n-j-1][i])
    return new_arr

    # tmp = [list(row)[::-1] for row in zip(*arr)]


def op4(arr):
    n, m = len(arr), len(arr[0])
    new_arr = [[] for _ in range(m)]
    for i in range(m):
        for j in range(n):
            new_arr[i].append(arr[j][m-i-1])
    return new_arr


def op5(arr):
    n, m = len(arr), len(arr[0])
    new_arr = [[0 for _ in range(m)] for _ in range(n)]
    half_n, half_m = n // 2, m // 2

    for i in range(half_n):
        for j in range(half_m):
            new_arr[i][j+half_m] = arr[i][j]
            new_arr[i+half_n][j+half_m] = arr[i][j+half_m]
            new_arr[i+half_n][j] = arr[i+half_n][j+half_m]
            new_arr[i][j] = arr[i+half_n][j]
    return new_arr


def op6(arr):
    n, m = len(arr), len(arr[0])
    new_arr = [[0 for _ in range(m)] for _ in range(n)]
    half_n, half_m = n // 2, m // 2

    for i in range(half_n):
        for j in range(half_m):
            new_arr[i][j+half_m] = arr[i+half_n][j+half_m]
            new_arr[i+half_n][j+half_m] = arr[i+half_n][j]
            new_arr[i+half_n][j] = arr[i][j]
            new_arr[i][j] = arr[i][j+half_m]
    return new_arr


ops = [op1, op2, op3, op4, op5, op6]
for i in range(r):
    arr = ops[o[i]-1](arr)

for i in range(len(arr)):
    for j in range(len(arr[0])):
        print(arr[i][j], end=' ')
    print()
