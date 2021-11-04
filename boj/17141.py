import sys
from collections import deque

input = sys.stdin.readline
n, m = list(map(int, input().rstrip().split()))
arr = [list(map(int, input().rstrip().split())) for _ in range(n)]
a = 0


def get_available():
    global a
    available = []
    for i in range(n):
        for j in range(n):
            if arr[i][j] == 2:
                available.append((i, j))

    a = len(available)
    return available


def is_available(visited):
    for i in range(n):
        for j in range(n):
            if not visited[i][j] and arr[i][j] == 0:
                return False
    return True


def get_shortest_time(virus):
    visited = [[0] * n for _ in range(n)]
    dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
    for v in virus:
        x, y = v
        visited[x][y] = 1

    queue = deque(virus)
    time = 0
    while queue:
        next_queue = deque()
        for v in queue:
            x, y = v
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny] and arr[nx][ny] != 1:
                    visited[nx][ny] = 1
                    next_queue.append((nx, ny))
        queue = next_queue
        if queue:
            time += 1

        # print(time, queue)

    return time if is_available(visited) else 2500


def get_combination(idx, comb, available):
    global ans
    if len(comb) == m:
        ans = min(ans, get_shortest_time(comb))
        return

    for i in range(idx, len(available)):
        comb.append(available[i])
        get_combination(i+1, comb, available)
        comb.pop()


available = get_available()
ans = 2500
get_combination(0, [], available)
print(ans if ans != 2500 else -1)
