from collections import deque
import sys
import itertools
import copy
input = sys.stdin.readline

n, m, d = map(int, input().split())
arr_input = [list(map(int, input().split())) for _ in range(n)]


def bfs(x, y):
    global d
    if arr[x][y] == 1:
        return (x, y)

    dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
    queue = deque([(x, y)])
    visited = [[0] * m for _ in range(n)]
    visited[x][y] = 1
    targets = []
    dist = 1

    while queue and dist < d:
        next_queue = deque()
        for q in queue:
            x, y = q
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
                    if arr[nx][ny] == 0:
                        next_queue.append((nx, ny))
                        visited[nx][ny] = 1
                    else:
                        targets.append((nx, ny))
        dist += 1
        queue = next_queue
        if targets:
            targets.sort(key=lambda x: x[1])
            return targets[0]
    return (-1, -1)


def attack(archors):
    killed_cors = set()
    for archor in archors:
        target = bfs(n-1, archor)
        if target != (-1, -1):
            killed_cors.add(target)

    for cor in killed_cors:
        arr[cor[0]][cor[1]] = 0

    return len(killed_cors)


def move():
    for i in range(n-1, 0, -1):
        arr[i] = arr[i-1]
    arr[0] = [0] * m


def is_finished():
    for i in range(n):
        for j in range(m):
            if arr[i][j] == 1:
                return False
    return True


ans = 0
for archors in itertools.combinations(range(m), 3):
    arr = copy.deepcopy(arr_input)
    killed_enemy = 0
    while not is_finished():
        killed_enemy += attack(list(archors))
        move()
    ans = max(killed_enemy, ans)

print(ans)
