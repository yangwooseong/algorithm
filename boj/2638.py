import sys
sys.setrecursionlimit(10000)

n, m = list(map(int, input().split()))
cheese = [list(map(int, input().split())) for _ in range(n)]
dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]


def all_melted(cheese):
    for i in range(n):
        for j in range(m):
            if cheese[i][j] == 1:
                return False
    return True


def dfs(cheese, x, y):
    for k in range(4):
        nx, ny = x + dirs[k][0], y + dirs[k][1]
        if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
            if cheese[nx][ny]:
                cheese[nx][ny] += 1
            else:
                visited[nx][ny] = 1
                dfs(cheese, nx, ny)


def get_cheese_melted(cheese):
    for i in range(n):
        for j in range(m):
            if cheese[i][j] >= 3:
                cheese[i][j] = 0
            elif cheese[i][j] > 0:
                cheese[i][j] = 1
    return cheese


cnt = 0
while not all_melted(cheese):
    visited = [[0 for _ in range(m)] for _ in range(n)]
    visited[0][0] = 1
    dfs(cheese, 0, 0)
    cheese = get_cheese_melted(cheese)
    cnt += 1

print(cnt)
