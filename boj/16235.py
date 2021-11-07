import sys
input = sys.stdin.readline
n, m, k = map(int, input().split())
for_yangboon = [list(map(int, input().split())) for _ in range(n)]
trees = [[[] for _ in range(n)] for _ in range(n)]

for _ in range(m):
    x, y, z = list(map(int, input().split()))
    trees[x-1][y-1].append(z)


yangboon = [[5]*n for _ in range(n)]
dirs = [(0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1), (-1, 0), (-1, 1)]

for _ in range(k):
    yangboon_of_dead_trees = [[0] * n for _ in range(n)]
    next_tree_arr = [[[] for _ in range(n)] for _ in range(n)]

    for i in range(n):
        for j in range(n):
            tree_arr = trees[i][j]
            for t in sorted(tree_arr):

                if t <= yangboon[i][j]:
                    yangboon[i][j] -= t
                    next_tree_arr[i][j].append(t+1)
                else:
                    yangboon_of_dead_trees[i][j] += t // 2

    # print(yangboon_of_dead_trees)
    # print(next_tree_arr)
    # print(yangboon)
    for i in range(n):
        for j in range(n):
            for t in next_tree_arr[i][j]:
                if t % 5 == 0:
                    # print(t, i, j)
                    for d in dirs:
                        ni = i + d[0]
                        nj = j + d[1]
                        if 0 <= ni < n and 0 <= nj < n:
                            next_tree_arr[ni][nj].append(1)

    for i in range(n):
        for j in range(n):
            yangboon[i][j] += for_yangboon[i][j] + yangboon_of_dead_trees[i][j]
    # print(yangboon)
    trees = next_tree_arr


l = 0
for i in range(n):
    for j in range(n):
        l += len(trees[i][j])

print(l)
