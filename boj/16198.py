n = int(input())
arr = list(map(int, input().split()))
visited = [0 for _ in range(n)]

sum = 0
ans = 0


def dfs(arr):
    global sum, ans
    # print(arr)
    if len(arr) == 2:
        ans = max(sum, ans)
        # print(sum)
        return

    for i in range(1, len(arr) - 1):
        sum += arr[i-1] * arr[i+1]
        dfs(arr[:i] + arr[i+1:])
        sum -= arr[i-1] * arr[i+1]


dfs(arr)
print(ans)
