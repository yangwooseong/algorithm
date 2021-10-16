import sys
input = sys.stdin.readline
sys.setrecursionlimit(10000001)

n = int(input())
arr = [[] for _ in range(n+1)]

for i in range(n):
    ar = list(map(int, input().rstrip().split()))
    for j in range(1, len(ar)-1):
        if j % 2 == 1:
            arr[ar[0]].append((ar[j], ar[j+1]))


def dfs(s, dist):
    for node, weight in arr[s]:
        if dist[node] == -1:
            dist[node] = dist[s] + weight
            dfs(node, dist)


visited = [-1 for _ in range(n+1)]
visited[1] = 0
dfs(1, visited)
root = 0
root = visited.index(max(visited))

visited2 = [-1 for _ in range(n+1)]
visited2[root] = 0
dfs(root, visited2)
# print(visited2)
print(max(visited2))
