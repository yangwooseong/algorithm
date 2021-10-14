import sys
n = int(input())
k = int(input())
arr = sorted(list(map(int, input().split())))
dist = []

if k >= n:
    print(0)
    exit()

for i in range(n-1):
    dist.append(arr[i+1] - arr[i])
dist.sort()

for i in range(k-1):
    dist.pop()
print(sum(dist))

