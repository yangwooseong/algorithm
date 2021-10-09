import sys
input = sys.stdin.readline
n, s = list(map(int, input().split()))
arr = list(map(int, input().split()))
sum = 0
ans = 0
visited = [0 for _ in range(n)]


def dfs(idx, cnt):
    global sum, ans

    if cnt == n:
        return

    for i in range(idx, n):
        if visited[i]:
            continue

        sum += arr[i]
        visited[i] = 1
        if sum == s:
            ans += 1
        dfs(i+1, cnt+1)
        visited[i] = 0
        sum -= arr[i]


dfs(0, 0)
print(ans)
