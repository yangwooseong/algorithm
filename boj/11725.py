import sys
sys.setrecursionlimit(10**9)
n = int(input())

arr = [[] for _ in range(n+1)]

for _ in range(n-1):
    a, b = list(map(int, input().split()))
    arr[a].append(b)
    arr[b].append(a)

visited = [-1 for _ in range(n+1)]


def dfs(node):
    for n in arr[node]:
        if visited[n] == -1 and n != 1:
            visited[n] = node
            dfs(n)


dfs(1)
for i in range(2, n+1):
    print(visited[i])
