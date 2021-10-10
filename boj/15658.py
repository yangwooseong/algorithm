n = int(input())
nums = list(map(int, input().split()))
ops = list(map(int, input().split()))

M, m = -10**9, 10**9


def dfs(idx, result):
    global M, m

    if idx == n-1:
        M = max(result, M)
        m = min(result, m)
        return

    if ops[0] > 0:
        ops[0] -= 1
        dfs(idx+1, result+nums[idx+1])
        ops[0] += 1
    if ops[1] > 0:
        ops[1] -= 1
        dfs(idx+1, result-nums[idx+1])
        ops[1] += 1
    if ops[2] > 0:
        ops[2] -= 1
        dfs(idx+1, result*nums[idx+1])
        ops[2] += 1
    if ops[3] > 0:
        ops[3] -= 1
        dfs(idx+1, int(result/nums[idx+1]))
        ops[3] += 1


dfs(0, nums[0])
print(M)
print(m)
