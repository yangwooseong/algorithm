
# for m in range(1, n+1):
#     for i in range(1, 1 << m):
#         sum = None
#         for k in range(n):
#             if i & (1 << k):
#                 sum = sum + arr[k] if sum else arr[k]
#         if sum not in sum_list:
#             sum_list.append(sum)

#     sum_list.sort()
#     # print(sum_list)
#     for i in range(1, sum_list[-1]):
#         if i not in sum_list:
#             print(i)
#             break
#         if m == n and i == sum_list[-1] - 1:
#             print(sum_list[-1] + 1)

n = int(input())
arr = sorted(list(map(int, input().split())))
sum_set = set()
visited = [0 for _ in range(n)]
sum = 0


def get_partial_sum(idx, cnt):
    global sum

    if cnt == n:
        return

    for i in range(idx, n):
        if not visited[i]:
            visited[i] = 1
            sum += arr[i]
            sum_set.add(sum)
            get_partial_sum(i+1, cnt+1)
            visited[i] = 0
            sum -= arr[i]


get_partial_sum(0, 0)
for i in range(1, 2*10**6):
    if i not in sum_set:
        print(i)
        break
