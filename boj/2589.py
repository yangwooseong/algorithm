from collections import deque


n, m = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(input()))


def bfs(x, y):
    visited = [[0] * m for _ in range(n)]
    queue = deque([(x, y)])
    visited[x][y] = 1
    dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    distance = 0

    while queue:
        next_queue = deque([])
        for q in queue:
            x, y = q
            for dir in dirs:
                nx, ny = x + dir[0], y + dir[1]
                if 0 <= nx < n and 0 <= ny < m and\
                        not visited[nx][ny] and arr[nx][ny] == 'L':
                    visited[nx][ny] = 1
                    next_queue.append((nx, ny))

        queue = next_queue
        if queue:
            distance += 1
        # print(queue, distance)

    return distance


ans = 0
for i in range(n):
    for j in range(m):
        if arr[i][j] == 'L':
            ans = max(ans, bfs(i, j))

print(ans)
