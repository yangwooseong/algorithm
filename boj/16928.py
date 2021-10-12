from collections import deque

n, m = list(map(int, input().split()))
ladders, snakes = {}, {}

for _ in range(n):
    start, end = list(map(int, input().split()))
    ladders[start] = end

for _ in range(m):
    start, end = list(map(int, input().split()))
    snakes[start] = end

visited = [False for _ in range(101)]
visited[1] = 0


def bfs():
    queue = deque([1])

    while queue:
        q = queue.popleft()
        if q == 100:
            print(visited[q])
            break
        for i in range(1, 7):
            next_q = q + i
            if next_q > 100 or visited[next_q] != False:
                continue
            if next_q in ladders:
                next_q = ladders[next_q]
            elif next_q in snakes:
                next_q = snakes[next_q]

            if visited[next_q] == False:
                visited[next_q] = visited[q] + 1
                queue.append(next_q)
        # print(queue, visited)


bfs()
