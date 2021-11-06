N, e, w, s, n = list(map(int, input().split()))
total = 0
dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]
probs = [e, w, s, n]


def dfs(x, y, prob, visited):
    global total

    # print(x, y, prob, visited)

    if len(visited) == N+1:
        total += prob
        return

    for d in range(len(dirs)):
        nx, ny = x + dirs[d][0], y + dirs[d][1]
        if (nx, ny) not in visited:
            visited.append((nx, ny))
            dfs(nx, ny, prob*probs[d], visited)
            visited.pop()


dfs(N, N, 1, [(N, N)])
print(total * (0.01**N))
