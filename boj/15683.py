import copy

n, m = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))
cctvs = []

for i in range(n):
    for j in range(m):
        if 1 <= arr[i][j] <= 5:
            cctvs.append((i, j, arr[i][j]))


def fill_area(dir, x, y, arr):
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    nx, ny = x + dx[dir], y + dy[dir]

    while 0 <= nx < n and 0 <= ny < m:
        if arr[nx][ny] == 0:
            arr[nx][ny] = -1
            nx, ny = nx + dx[dir], ny + dy[dir]
        elif arr[nx][ny] == 6:
            break
        else:
            nx, ny = nx + dx[dir], ny + dy[dir]


direction = [[], [[0], [1], [2], [3]], [[0, 1], [2, 3]], [[0, 2], [2, 1], [1, 3], [3, 0]],
             [[3, 0, 2], [1, 3, 0], [0, 2, 1], [2, 1, 3]], [[0, 1, 2, 3]]]


def dfs(arr, cnt):
    global ans

    tmp = copy.deepcopy(arr)
    if cnt == len(cctvs):
        sakak = 0
        # print(tmp)
        for i in range(n):
            sakak += tmp[i].count(0)
        ans = min(ans, sakak)
        return

    x, y, t = cctvs[cnt]
    for dirs in direction[t]:
        # print(cctvs, x, y)
        for i in dirs:
            fill_area(i, x, y, tmp)
        dfs(tmp, cnt+1)
        tmp = copy.deepcopy(arr)


ans = 64
dfs(arr, 0)
print(ans)
