from collections import deque

n, m = list(map(int, input().split()))
board = []
for _ in range(n):
    board.append(list(input()))

pos = []
tmp = []
for i in range(n):
    for j in range(m):
        if board[i][j] == 'o':
            tmp.append([i, j])
pos.append(tmp)
# print(pos)


def bfs():
    queue = deque(pos)
    dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    cnt = 0

    while cnt < 10:
        next_queue = deque()
        while queue:
            coin1, coin2 = queue.popleft()
            x1, y1 = coin1
            x2, y2 = coin2
            for dir in dirs:
                nx1, ny1 = x1 + dir[0], y1 + dir[1]
                nx2, ny2 = x2 + dir[0], y2 + dir[1]
                if 0 <= nx1 < n and 0 <= ny1 < m and\
                        0 <= nx2 < n and 0 <= ny2 < m:
                    if board[nx1][ny1] == '#':
                        nx1, ny1 = x1, y1
                    if board[nx2][ny2] == '#':
                        nx2, ny2 = x2, y2
                    next_queue.append(
                        sorted([[nx1, ny1], [nx2, ny2]], key=lambda x: x[0]))
                elif 0 <= nx1 < n and 0 <= ny1 < m:
                    return cnt + 1
                elif 0 <= nx2 < n and 0 <= ny2 < m:
                    return cnt + 1
                else:
                    continue
        queue = next_queue
        cnt += 1

    return -1 if cnt >= 10 else cnt


print(bfs())
