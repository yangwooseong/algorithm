from collections import deque

n = int(input())
a = [list(map(int, list(input()))) for _ in range(n)]

area = 0


def dfs(x, y):
    stack = deque()
    stack.append((x, y))
    a[x][y] = 0
    global area
    area = 1

    while stack:
        x, y = stack.pop()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0 <= nx < n and 0 <= ny < n and a[nx][ny] == 1:
                stack.append((nx, ny))
                a[nx][ny] = 0
                area += 1


dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]
areas = []
count = 0

for i in range(n):
    for j in range(n):
        if a[i][j] == 1:
            dfs(i, j)
            areas.append(area)
            count += 1

print(count)
if areas == []:
    print(0)
else:
    for i in sorted(areas):
        print(i)
