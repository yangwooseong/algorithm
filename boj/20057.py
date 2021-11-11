import sys
input = sys.stdin.readline
n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
dirs = {0: [0, -1], 1: [1, 0], 2: [0, 1], 3: [-1, 0]}
x, y = (n-1) // 2, (n-1) // 2
d = 0

total = 0

for l in range(1, n):
    m = 3 if l == n-1 else 2
    for i in range(m):
        for j in range(l):
            x, y = x + dirs[d][0], y + dirs[d][1]
            print(x, y)
        d = (d+1) % 4
