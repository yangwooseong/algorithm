from collections import deque
import sys
input = sys.stdin.readline

n, m, k = list(map(int, input().split()))
board = []
for _ in range(n):
    board.append(list(map(int, input().rstrip())))

visited = [[[None]*(k+1) for _ in range(m)]
           for _ in range(n)]  # (distance, 남아있는 k)
for i in range(k+1):
    visited[0][0][i] = 1


def bfs():
    dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    queue = deque([(0, 0, k)])
    step = 0
    while queue:
        x, y, w = queue.popleft()
        if x == n-1 and y == m-1:
            return visited[x][y][w]
        step += 1

        for dir in dirs:
            nx, ny = x + dir[0], y + dir[1]
            if 0 <= nx < n and 0 <= ny < m:
                if not board[nx][ny] and visited[nx][ny][w] is None:
                    visited[nx][ny][w] = visited[x][y][w] + 1
                    queue.append((nx, ny, w))
                elif board[nx][ny] and w >= 1 and visited[nx][ny][w] is None:
                    visited[nx][ny][w-1] = visited[x][y][w] + 1
                    queue.append((nx, ny, w-1))
                # for v in visited:
                #     print(v)
                # print(queue)
        # if step == 7:
        #     break
    return -1


print(bfs())
