n = int(input())
arr = list(map(int, input().split()))

ans = [0 for _ in range(n)]

for i in range(n):
    cnt = 0
    for j in range(n):
        if ans[j] == 0:
            cnt += 1
            if cnt - 1 == arr[i]:
                ans[j] = i+1

for i in ans:
    print(i, end=' ')
