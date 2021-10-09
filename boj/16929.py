import sys
input = sys.stdin.readline
sys.setrecursionlimit(100001)

a = []
n, m = list(map(int, input().split()))
for _ in range(n):
    a.append(input().rstrip())
dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
visited = [[0 for _ in range(m)] for _ in range(n)]
path = []


def dfs(x, y):
    for dir in dirs:
        nx, ny = x + dir[0], y + dir[1]
        if 0 <= nx < n and 0 <= ny < m and a[nx][ny] == a[x][y]:
            if len(path) >= 4 and path[0] == (nx, ny):
                print('Yes')
                exit()
            if visited[nx][ny]:
                continue
            visited[nx][ny] = 1
            path.append((nx, ny))
            dfs(nx, ny)
            visited[nx][ny] = 0
            path.pop()


for i in range(n):
    for j in range(m):
        visited[i][j] = 1
        path.append((i, j))
        dfs(i, j)
        visited[i][j] = 0
        path.pop()

print('No')
