arr = [list(map(int, list(input()))) for _ in range(9)]
empty = []

for i in range(9):
    for j in range(9):
        if arr[i][j] == 0:
            empty.append((i, j))


def promising(x, y, arr):
    promising_nums = [i for i in range(1, 10)]
    for k in arr[x]:
        if k in promising_nums:
            promising_nums.remove(k)

    for i in range(9):
        if arr[i][y] in promising_nums:
            promising_nums.remove(arr[i][y])

    x, y = x // 3, y // 3
    for i in range(3*x, 3*(x+1)):
        for j in range(3*y, 3*(y+1)):
            if arr[i][j] in promising_nums:
                promising_nums.remove(arr[i][j])

    return sorted(promising_nums)


def dfs(cnt, arr):
    if cnt == len(empty):
        for ar in arr:
            for num in ar:
                print(num, end='')
            print()
        exit()

    x, y = empty[cnt]
    # print(promising(x, y, arr), x, y)
    # print(arr)

    for num in promising(x, y, arr):
        arr[x][y] = num
        dfs(cnt+1, arr)
        arr[x][y] = 0


dfs(0, arr)
