import sys
input = sys.stdin.readline

n = int(input())
arr = [0] + list(map(int, input().split()))
dp = [1 for _ in range(n+1)]
dp_arr = [[arr[x]] for x in range(n+1)]
# dp_arr[1] = [arr[1]]

for i in range(1, n+1):
    for j in range(1, i):
        if arr[j] >= arr[i]:
            continue

        if dp[i] < dp[j] + 1:
            dp[i] = dp[j] + 1
            dp_arr[i] = dp_arr[j] + [arr[i]]
    # print(dp, dp_arr)

print(max(dp))
idx = dp[1:].index(max(dp))
# print(dp, idx+1, dp_arr)
print(' '.join(list(map(str, dp_arr[idx+1]))))
