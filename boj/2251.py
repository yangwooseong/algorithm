from collections import deque


def bfs():
    def pour(x, y):
        # print(x, y)
        if not visited[x][y]:
            visited[x][y] = True
            queue.append((x, y))

    answer = []
    queue = deque([(0, 0)])

    while queue:
        x, y = queue.popleft()
        z = total - x - y
        if x == 0 and not z in answer:
            answer.append(z)

        water = min(x, b-y)
        pour(x - water, y + water)

        water = min(x, c-z)
        pour(x - water, y)

        water = min(y, a-x)
        pour(x+water, y-water)

        water = min(y, c-z)
        pour(x, y-water)

        water = min(z, a-x)
        pour(x+water, y)

        water = min(z, b-y)
        pour(x, y+water)

    return answer


a, b, c = list(map(int, input().split()))
total = c
visited = [[False] * (b+1) for _ in range(a+1)]
print(' '.join(list(map(str, sorted(bfs())))))
