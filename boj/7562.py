import sys
import collections
input = sys.stdin.readline

n = int(input())
l, start, end = [], [], []
dirs = [(2, 1), (2, -1), (1, 2), (-1, 2),
        (-2, 1), (-2, -1), (-1, -2), (1, -2)]

for _ in range(n):
    l.append(int(input()))
    start.append(list(map(int, input().split())))
    end.append(list(map(int, input().split())))


def bfs(s, e, l):
    visited = [[0 for _ in range(l)] for _ in range(l)]

    queue = collections.deque()
    queue.append(s)
    visited[s[0]][s[1]] = 1
    depth = 0

    while queue:
        if e in queue:
            print(depth)
            return
        q_next = collections.deque()
        for q in queue:
            x, y = q[0], q[1]
            for dir in dirs:
                nx, ny = x + dir[0], y + dir[1]
                if 0 <= nx < l and 0 <= ny < l:
                    if visited[nx][ny]:
                        continue
                    visited[nx][ny] = 1
                    q_next.append([nx, ny])
        queue = q_next
        depth += 1


for i in range(n):
    bfs(start[i], end[i], l[i])
