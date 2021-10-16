from collections import deque

n = int(input())
arr = []
for _ in range(n):
    arr.append(list(input()))
visited = [[False]*n for _ in range(n)]

dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]

def bfs(i, j, saekyak=False):
    queue = deque([(i, j)])
    while queue:
        x, y = queue.popleft()
        for dir in dirs:
            nx, ny = x + dir[0], y + dir[1]
            if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny]:
                if saekyak:
                    if arr[x][y] in ['R', 'G'] and arr[nx][ny] in ['R', 'G']:
                        visited[nx][ny] = True
                        queue.append((nx, ny))
                    elif arr[x][y] == arr[nx][ny] == 'B':
                        visited[nx][ny] = True
                        queue.append((nx, ny))
                else:
                    if arr[x][y] == arr[nx][ny]:
                        visited[nx][ny] = True
                        queue.append((nx, ny))


cnt = 0
for i in range(n):
    for j in range(n):
        if not visited[i][j]:
            visited[i][j] = True
            bfs(i, j, saekyak=False)
            cnt += 1
print(cnt, end=' ')

visited = [[False]*n for _ in range(n)]
cnt = 0
for i in range(n):
    for j in range(n):
        if not visited[i][j]:
            visited[i][j] = True
            bfs(i, j, saekyak=True)
            cnt += 1

print(cnt)

