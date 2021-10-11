from collections import deque

a, b = list(map(int, input().split()))
visited = {b: 1}


def bfs():
    queue = deque([b])
    while queue:
        q = queue.popleft()
        if q == a:
            return visited[q]

        if q % 2 == 0:
            if q//2 not in visited:
                queue.append(q//2)
                visited[q//2] = visited[q] + 1
        if len(str(q)) > 1 and q % 10 == 1:
            if q//10 not in visited:
                queue.append(q//10)
                visited[q//10] = visited[q] + 1

    return -1


print(bfs())
