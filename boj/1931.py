n = int(input())
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))

arr.sort(key=lambda x: (x[1], x[0]))
end = arr[0][1]
ans = 0

for i in range(n):
    if i == 0:
        ans += 1
    elif arr[i][0] >= end:
        ans += 1
        end = arr[i][1]

print(ans)
