n = int(input())
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))

ans = 10**9
for i in range(1, 1 << n):
    mul = 1
    sum = 0
    for j in range(n):
        k = 1 << j
        if k & i:
            mul *= arr[j][0]
            sum += arr[j][1]
    # print(i, mul, sum)
    ans = min(ans, abs(mul-sum))
print(ans)
