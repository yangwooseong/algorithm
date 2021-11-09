import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [list(input()) for _ in range(n)]
dirs = [(-1, 1), (0, 1), (1, 1)]
visited = [[0]*m for _ in range(n)]


def dfs(x, y):
    global found, cnt
    if found:
        return False

    if y == m-1:
        found = True
        cnt += 1
        return True

    for dir in dirs:
        nx, ny = x + dir[0], y + dir[1]
        if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny] and arr[nx][ny] == '.':
            if not found:
                visited[nx][ny] = 1
                dfs(nx, ny)


cnt = 0
for i in range(n):
    found = False
    dfs(i, 0)
    # print(visited)

print(cnt)
