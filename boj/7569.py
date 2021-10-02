import sys
from collections import deque
input = sys.stdin.readline

w, h, l = list(map(int, input().split()))
board = [[list(map(int, input().split())) for _ in range(h)] for _ in range(l)]
count = [[[0 for _ in range(w)] for _ in range(h)] for _ in range(l)]


def bfs():
    queue = deque()
    for tomato in tomatoes:
        queue.append(tomato)

    while queue:
        z, x, y = queue.popleft()
        for dir in dirs:
            nx, ny, nz = x + dir[0], y + dir[1], z + dir[2]
            if 0 <= nx < h and 0 <= ny < w and 0 <= nz < l:
                if board[nz][nx][ny] == 0:
                    queue.append((nz, nx, ny))
                    board[nz][nx][ny] = 1
                    count[nz][nx][ny] = count[z][x][y] + 1


tomatoes = []
for k in range(l):
    for i in range(h):
        for j in range(w):
            if board[k][i][j] == 1:
                tomatoes.append((k, i, j))

dirs = [(1, 0, 0), (-1, 0, 0), (0, 1, 0),
        (0, -1, 0), (0, 0, 1), (0, 0, -1)]

bfs()

possible = True
m = 0

for k in range(l):
    for i in range(h):
        for j in range(w):
            if board[k][i][j] == 0 and possible:
                print(-1)
                possible = False
            m = max(m, count[k][i][j])

if possible:
    print(m)
