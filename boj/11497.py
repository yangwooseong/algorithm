from collections import deque

n = int(input())

for _ in range(n):
    r = int(input())
    queue = deque()
    arr = sorted(list(map(int, input().split())), reverse=True)
    arr.sort()
    ans = 0
    for i in range(2, r):
        ans = max(ans, abs(arr[i] - arr[i-2]))
    print(ans)