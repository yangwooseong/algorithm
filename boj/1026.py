n = int(input())
ab = [[] for _ in range(n)]
a = sorted(list(map(int, input().split())))
b = sorted(list(map(int, input().split())), reverse=True)

ans = 0
for i in range(n):
    ans += a[i]*b[i]
print(ans)
