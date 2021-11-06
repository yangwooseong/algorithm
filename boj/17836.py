from collections import deque
import sys
input = sys.stdin.readline
n, m, t = list(map(int, input().split()))
arr = [list(map(int, input().split())) for _ in range(n)]


def bfs():
    if arr[0][0] == 2:
        queue = deque([(0, 0, 1)])
    else:
        queue = deque([(0, 0, 0)])

    visited = [[0] * m for _ in range(n)]
    visited_for_sword = [[0] * m for _ in range(n)]
    visited[0][0] = 1
    dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
    cnt = 0

    while queue:
        next_queue = deque()
        for q in queue:
            x, y, sword = q
            if (x, y) == (n-1, m-1):
                return cnt
            for d in range(4):
                nx, ny = x + dx[d], y + dy[d]
                if 0 <= nx < n and 0 <= ny < m:
                    if not sword and not visited[nx][ny] and arr[nx][ny] != 1:
                        if arr[nx][ny] == 2:
                            next_queue.append((nx, ny, 1))
                            visited_for_sword[nx][ny] = 1
                        elif arr[nx][ny] == 0:
                            next_queue.append((nx, ny, 0))
                        visited[nx][ny] = 1
                    elif sword and not visited_for_sword[nx][ny]:
                        next_queue.append((nx, ny, 1))
                        visited_for_sword[nx][ny] = 1

        # print(next_queue, cnt)
        if next_queue:
            queue = next_queue
            cnt += 1
        else:
            return 'Fail'

        if cnt > t:
            return 'Fail'
    return 'Fail'


print(bfs())
