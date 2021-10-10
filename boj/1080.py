n, m = list(map(int, input().split()))

a, b = [], []
for _ in range(n):
    a.append(list(map(int, list(input()))))
for _ in range(n):
    b.append(list(map(int, list(input()))))

ans = 0
for i in range(n):
    for j in range(m):
        if 0 <= i < n-2 and 0 <= j < m-2 and a[i][j] != b[i][j]:
            for x in range(3):
                for y in range(3):
                    a[i+x][j+y] = 1 if a[i+x][j+y] == 0 else 0
            ans += 1
for i in range(n):
    for j in range(m):
        if a[i][j] != b[i][j]:
            print(-1)
            exit()
print(ans)
