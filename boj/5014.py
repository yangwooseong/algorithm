from collections import deque

f, s, g, u, d = list(map(int, input().split()))


def bfs(s):
    queue = deque([s])
    dirs = [u, -d]
    visited = [0 for _ in range(f+1)]
    visited[s] = 1
    cnt = 0

    while queue:
        next_queue = deque([])
        for q in queue:
            if q == g:
                return cnt
            for dir in dirs:
                nq = q + dir
                if 1 <= nq <= f and not visited[nq]:
                    visited[nq] = 1
                    next_queue.append(nq)
        cnt += 1
        queue = next_queue
        # print(queue, cnt)

    return 'use the stairs'


print(bfs(s))
