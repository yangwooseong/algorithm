from collections import deque
import sys
input = sys.stdin.readline


def bfs(arr, start, end):
    queue = deque([start])
    visited = {}
    for con in arr:
        visited[tuple(con)] = 0
    visited[tuple(start)] = 1

    while queue:
        q = queue.popleft()
        if q == end:
            print('happy')
            return
        x, y = q
        for con in arr:
            x_, y_ = con
            if abs(x-x_) + abs(y-y_) <= 1000 and not visited[tuple(con)]:
                queue.append(con)
                visited[tuple(con)] = 1
        # print(queue, visited, q)
    print('sad')


t = int(input())
for _ in range(t):
    n = int(input())
    start = list(map(int, input().split()))
    arr = [list(map(int, input().split())) for _ in range(n)]
    end = list(map(int, input().split()))
    arr.append(end)

    bfs(arr, start, end)
