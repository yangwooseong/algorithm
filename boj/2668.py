# 내 멍청한 풀이..
import sys
input = sys.stdin.readline

n = int(input())
arr = [0] + [int(input()) for _ in range(n)]
res = []


def dfs(current, trace):
    # print(current, trace, arr[current])
    if len(trace) > 1 and arr[current] == trace[0]:
        return trace
    elif len(trace) > 1 and arr[current] in trace:
        return []

    return dfs(arr[current], trace + [arr[current]])


for i in range(n+1):
    if i and i == arr[i]:
        res.append(i)

ans = res[:]
for i in range(n+1):
    if i and i not in res and i not in ans:
        ans += dfs(i, [i])
ans.sort()
print(len(ans))
for i in ans:
    print(i)
# print(ans)

# 미친 풀이 ㄷㄷ;
# n = int(input())
# dict = {}
# for i in range(n):
#     dict[i+1] = int(input())
# print(dict)
# while True:
#     dict = {k: v for k, v in dict.items() if k in dict.values()}
#     print(dict, 'here')
#     if set(dict.keys()) == set(dict.values()):
#         break

# print(len(dict))
# for key in dict.keys():
#     print(key)
