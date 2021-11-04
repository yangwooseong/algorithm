from collections import deque
import sys
input = sys.stdin.readline

n = int(input().rstrip())


def bfs(p):
    queue = deque([arr[p]])
    while queue:
        x, y, r, idx = queue.popleft()
        visited[idx] = 1

        for i in range(t):
            x_, y_, r_, _ = arr[i]
            if not visited[i] and (x-x_)**2 + (y-y_)**2 <= (r+r_)**2:
                queue.append(arr[i])
                visited[i] = 1
        # print(queue)


for _ in range(n):
    t = int(input().rstrip())
    arr = [list(map(int, input().rstrip().split())) + [i] for i in range(t)]
    visited = [0 for _ in range(t)]
    cnt = 0

    for i in range(t):
        if not visited[i]:
            cnt += 1
            bfs(i)
    print(cnt)
