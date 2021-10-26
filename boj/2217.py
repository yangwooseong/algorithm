n = int(input())
ropes = []
for _ in range(n):
    ropes.append(int(input()))
ropes.sort(reverse=True)

ans = 0
for i in range(n):
    ans = max(ans, (i+1)*ropes[i])
print(ans)
