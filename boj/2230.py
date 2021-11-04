n, m = list(map(int, input().split()))
arr = sorted([int(input()) for _ in range(n)])

left, right = 0, 1
ans = 2 * 10**9 + 1

while left < n and right < n:
    if arr[right] - arr[left] >= m:
        ans = min(ans, arr[right] - arr[left])
        left += 1
    else:
        right += 1

print(ans)
