import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
r1, c1, r2, c2 = list(map(int, input().split()))
dirs = [(-2, -1), (-2, 1), (0, -2), (0, 2), (2, -1), (2, 1)]
board = [[False] * n for _ in range(n)]
board[r1][c1] = 0


def bfs():
    q = deque([(r1, c1)])
    while q:
        x, y = q.popleft()
        for dir in dirs:
            nx, ny = x + dir[0], y + dir[1]
            if 0 <= nx < n and 0 <= ny < n and board[nx][ny] == False:
                board[nx][ny] = board[x][y] + 1
                q.append((nx, ny))


bfs()
print(-1 if board[r2][c2] == False else board[r2][c2])
