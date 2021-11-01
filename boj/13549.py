from collections import deque

n, k = list(map(int, input().split()))
LENGTH = 10**5+1
visited = [0] * LENGTH
dist = [-1] * LENGTH


def bfs(n, k):
    queue = deque([n])
    visited[n] = 1
    dist[n] = 0

    while queue:
        q = queue.popleft()
        if q == k:
            return dist[q]
        nq = 2*q
        if nq < LENGTH and not visited[nq]:
            queue.append(nq)
            visited[nq] = 1
            dist[nq] = dist[q]
        for dir in [-1, 1]:
            nq = q + dir
            if 0 <= nq < LENGTH and not visited[nq]:
                queue.append(nq)
                visited[nq] = 1
                dist[nq] = dist[q] + 1


print(bfs(n, k))
