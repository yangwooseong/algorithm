import sys
sys.setrecursionlimit(10**5)
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
step = [[-1] * m for _ in range(n)]


def dfs(x, y):
    if (x, y) == (n-1, m-1):
        return 1
    if step[x][y] != -1:
        return step[x][y]

    step[x][y] = 0
    for d in range(4):
        nx, ny = x + dx[d], y + dy[d]
        if 0 <= nx < n and 0 <= ny < m:
            if arr[nx][ny] < arr[x][y]:
                step[x][y] += dfs(nx, ny)
    # print(x, y, step)
    return step[x][y]


print(dfs(0, 0))

# ㅜㅜ 뭐냐 이거..
