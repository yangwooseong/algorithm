import sys
from collections import deque
input = sys.stdin.readline

n, m = list(map(int, input().split()))
board = []
MAX = 2001
for _ in range(n):
    board.append(list(map(int, list(input().rstrip()))))

dirs = [(1, 0), (0, 1), (-1, 0),  (0, -1)]


def bfs():
    queue = deque([(0, 0, 1)])
    visited = [[[0]*2 for _ in range(m)] for _ in range(n)]
    visited[0][0][1] = 1

    while queue:
        x, y, chance = queue.popleft()
        if x == n-1 and y == m-1:
            return visited[x][y][chance]
            # 방문하는 순서대로 나오는 거라서 chance 0,1 유무는 상관없음

        for dir in dirs:
            nx, ny = x + dir[0], y + dir[1]
            if 0 <= nx < n and 0 <= ny < m:
                if board[nx][ny] and chance:
                    visited[nx][ny][0] = visited[x][y][1] + 1
                    queue.append((nx, ny, 0))
                elif not board[nx][ny] and not visited[nx][ny][chance]:
                    visited[nx][ny][chance] = visited[x][y][chance] + 1
                    queue.append((nx, ny, chance))
        # print(visited, queue)

    return -1


print(bfs())
