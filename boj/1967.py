# import sys
# input = sys.stdin.readline

# n = int(input().rstrip())
# arr = [[] for _ in range(n+1)]
# for _ in range(n-1):
#     a, b, c = list(map(int, input().rstrip().split()))
#     arr[a].append((b, c))


# def dfs(node):
#     global distance
#     if len(arr[node]) == 0:
#         return 0

#     left_node = arr[node][0] if len(arr[node]) >= 1 else None
#     right_node = arr[node][1] if len(arr[node]) >= 2 else None
#     # print('l, r', left_node, right_node)
#     left_ = left_node[1] if left_node else 0
#     right_ = right_node[1] if right_node else 0

#     left_distance, right_distance = 0, 0
#     if left_node:
#         left_distance = dfs(left_node[0]) + left_
#     if right_node:
#         right_distance = dfs(right_node[0]) + right_

#     distance = left_distance + right_distance
#     return max(left_distance, right_distance)


# ans = 0
# for i in range(n+1):
#     distance = 0
#     dfs(i)
#     ans = max(ans, distance)
# print(ans)

from collections import deque

n = int(input())
tree = {i: [] for i in range(n+1)}
for i in range(n-1):
    a, b, weight = map(int, input().split())
    tree[a].append((b, weight))
    tree[b].append((a, weight))


def bfs(s):
    queue = deque()
    queue.append((s, 0))
    visited = [0]*n
    visited[s-1] = 1

    result = [0, 0]
    while queue:
        now, cnt = queue.popleft()
        for i in tree[now]:
            next_number, value = i[0], i[1]
            if visited[next_number-1] == 0:
                visited[next_number-1] = 1
                queue.append((next_number, cnt+value))
                if result[1] < cnt+value:
                    result[0] = next_number
                    result[1] = cnt+value
            # print(queue, visited)
    return result


a = bfs(1)
# print(a)
b = bfs(a[0])
print(b[1])
