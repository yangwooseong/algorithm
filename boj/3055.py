import copy
from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [list(input().rstrip()) for _ in range(n)]
start, end = 0, 0
for i in range(n):
    for j in range(m):
        if arr[i][j] == 'S':
            start = (i, j)
        elif arr[i][j] == 'D':
            end = (i, j)

dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]


def flood(arr):
    tmp = copy.deepcopy(arr)
    for i in range(n):
        for j in range(m):
            if arr[i][j] != '*':
                continue
            for d in range(4):
                ni, nj = i + dx[d], j + dy[d]
                if 0 <= ni < n and 0 <= nj < m and arr[ni][nj] == '.':
                    tmp[ni][nj] = '*'
    return tmp


def bfs(arr):
    queue = deque([start])
    visited = [[0] * m for _ in range(n)]
    sx, sy = start
    visited[sx][sy] = 1
    time = 0

    while queue:
        next_queue = deque()
        for x, y in queue:
            for d in range(4):
                nx, ny = x + dx[d], y + dy[d]
                if (nx, ny) == end:
                    print(time+1)
                    return
                if 0 <= nx < n and 0 <= ny < m and arr[nx][ny] == '.' and not visited[nx][ny]:
                    promising = True
                    for i in range(4):
                        nnx, nny = nx + dx[i], ny + dy[i]
                        if 0 <= nnx < n and 0 <= nny < m and arr[nnx][nny] == '*':
                            promising = False
                            break
                    if not promising:
                        continue
                    visited[nx][ny] = 1
                    next_queue.append((nx, ny))
        if queue:
            time += 1
        queue = next_queue
        # print(queue)
        arr = flood(arr)
        # print(arr)

    print('KAKTUS')
    return


bfs(arr)
