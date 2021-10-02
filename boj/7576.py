import sys
from collections import deque
input = sys.stdin.readline

w, h = list(map(int, input().split()))
board = [list(map(int, input().split())) for _ in range(h)]
count = [[0 for _ in range(w)] for _ in range(h)]


def bfs():
    queue = deque()
    for tomato in tomatoes:
        queue.append(tomato)

    while queue:
        x, y = queue.popleft()
        for dir in dirs:
            nx, ny = x + dir[0], y + dir[1]
            if 0 <= nx < h and 0 <= ny < w:
                if board[nx][ny] == 0:
                    queue.append((nx, ny))
                    board[nx][ny] = 1
                    count[nx][ny] = count[x][y] + 1


tomatoes = []
barriers = []
for i in range(h):
    for j in range(w):
        if board[i][j] == 1:
            tomatoes.append((i, j))
        elif board[i][j] == -1:
            barriers.append((i, j))
dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]

bfs()

possible = True

for i in range(h):
    for j in range(w):
        if board[i][j] == 0 and possible:
            print(-1)
            possible = False

if possible:
    MAX = 0
    for r in count:
        MAX = max(MAX, max(r))
    print(MAX)
