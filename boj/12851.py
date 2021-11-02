from collections import deque

n, k = list(map(int, input().split()))


def bfs():
    queue = deque([n])
    visited[n][0] = 0
    visited[n][1] = 1

    while queue:
        x = queue.popleft()
        for nx in [x+1, x-1, x*2]:
            if 0 <= nx < 10**5 + 1:
                if visited[nx][0] == -1:
                    visited[nx][0] = visited[x][0] + 1
                    visited[nx][1] += visited[x][1]
                    queue.append(nx)
                elif visited[nx][0] == visited[x][0] + 1:
                    visited[nx][1] += visited[x][1]


visited = [[-1, 0] for _ in range(10**5+1)]
bfs()
print(visited[k][0])
print(visited[k][1])
