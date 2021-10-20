n = int(input())
m = int(input())
arr = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = list(map(int, input().split()))
    arr[a].append(b)
    arr[b].append(a)

friends = []


def dfs(friend, cnt):
    if cnt == 2:
        return

    for i in arr[friend]:
        if i not in friends:
            friends.append(i)
        dfs(i, cnt + 1)


dfs(1, 0)
ans = len(friends)
if 1 in friends:
    ans -= 1
print(ans)
