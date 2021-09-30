import sys
from typing import Deque
input = sys.stdin.readline

arr = list(int(x) for x in input().split())
n, m = arr[0], arr[1]

board = []
for _ in range(n):
    board.append(list(int(x) for x in list(input().rstrip())))


def bfs():
    q = Deque()
    q.append((0, 0))

    while q:
        v = q.popleft()
        for dir in [(1, 0), (0, -1), (-1, 0), (0, 1)]:
            i = v[0] + dir[0]
            j = v[1] + dir[1]
            if i < 0 or i >= n or j < 0 or j >= m:
                continue
            if board[i][j] == 1:
                board[i][j] = board[v[0]][v[1]] + 1
                q.append((i, j))


bfs()

print(board[-1][-1])
