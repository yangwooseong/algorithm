n = int(input())
arr = list(map(int, input().split()))
m = int(input())


def remove_node(node):
    arr[node] = -2
    for i in range(len(arr)):
        if node == arr[i]:
            remove_node(i)


remove_node(m)
ans = 0
for i in range(len(arr)):
    if arr[i] != -2 and i not in arr:
        ans += 1

print(ans)
