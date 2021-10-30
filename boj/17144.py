import copy

r, c, t = list(map(int, input().split()))
arr = [list(map(int, input().split())) for _ in range(r)]
ventilators = []
for i in range(r):
    for j in range(c):
        if arr[i][j] == -1:
            ventilators.append((i, j))
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]


def disperse(arr):
    next_arr = [[0] * c for _ in range(r)]
    for x in range(r):
        for y in range(c):
            if arr[x][y] == -1:
                next_arr[x][y] = -1
                continue
            elif arr[x][y] == 0:
                continue

            cnt = 0
            for d in range(4):
                nx, ny = x + dx[d], y + dy[d]
                if 0 <= nx < r and 0 <= ny < c and arr[nx][ny] != -1:
                    next_arr[nx][ny] += arr[x][y] // 5
                    cnt += 1
            next_arr[x][y] = next_arr[x][y] + \
                arr[x][y] - (arr[x][y] // 5) * cnt

    return next_arr


def ventilate(arr):
    upper_aircon, lower_aircon = ventilators[0], ventilators[1]
    for i in range(upper_aircon[0]-1, 0, -1):
        arr[i][0] = arr[i-1][0]
    for i in range(0, c-1):
        arr[0][i] = arr[0][i+1]
    for i in range(0, upper_aircon[0]):
        arr[i][c-1] = arr[i+1][c-1]
    for i in range(c-1, 1, -1):
        arr[upper_aircon[0]][i] = arr[upper_aircon[0]][i-1]
    arr[upper_aircon[0]][1] = 0

    for i in range(lower_aircon[0]+1, r-1):
        arr[i][0] = arr[i+1][0]
    for i in range(0, c-1):
        arr[r-1][i] = arr[r-1][i+1]
    for i in range(r-1, lower_aircon[0], -1):
        arr[i][c-1] = arr[i-1][c-1]
    for i in range(c-1, 1, -1):
        arr[lower_aircon[0]][i] = arr[lower_aircon[0]][i-1]
    arr[lower_aircon[0]][1] = 0

    return arr


for _ in range(t):
    arr = disperse(arr)
    # print(arr)
    arr = ventilate(arr)
    # print(arr)

ans = 0
for i in range(r):
    for j in range(c):
        if arr[i][j] > 0:
            ans += arr[i][j]
print(ans)
