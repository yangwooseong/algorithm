n = int(input())
m = int(input())
inf = 10 ** 9
dist = [[inf]*n for i in range(n)]

for i in range(m):
    a, b, c = map(int, input().split())
    dist[a-1][b-1] = min(dist[a-1][b-1], c)

for k in range(n):
    for i in range(n):
        for j in range(n):
            if i == j:
                continue
            if k in [i, j]:
                continue
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

for d in dist:
    for i in d:
        if i == inf:
            print(0, end=' ')
        else:
            print(i, end=' ')
    print()
