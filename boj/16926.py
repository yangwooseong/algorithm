n, m, r = list(map(int, input().split()))
arr = []

for _ in range(n):
    arr.append(list(map(int, input().split())))

l = min(n, m) // 2
# stretched_arr = [[] for _ in range(l)]

# for i in range(l):
#     for j in range(i, m-i):
#         stretched_arr[i].append(arr[i][j])
#     for j in range(i+1, n-i):
#         stretched_arr[i].append(arr[j][m-i-1])
#     for j in range(m-i-2, i, -1):
#         stretched_arr[i].append(arr[n-i-1][j])
#     for j in range(n-i-1, i, -1):
#         stretched_arr[i].append(arr[j][i])

# for i in range(len(stretched_arr)):
#     stretched_arr[i] = stretched_arr[i][r:] + stretched_arr[i][:r]

# ans = [[0 for _ in range(m)] for _ in range(n)]

for _ in range(r):
    for i in range(l):
        sx, sy = i, i
        current_value = arr[sx][sy]

        for j in range(i+1, n-i):
            prev_value = arr[j][sy]
            arr[j][sy] = current_value
            current_value = prev_value

        for j in range(i+1, m-i):
            prev_value = arr[n-i-1][j]
            arr[n-i-1][j] = current_value
            current_value = prev_value

        for j in range(i+1, n-i):
            prev_value = arr[n-j-1][m-i-1]
            arr[n-j-1][m-i-1] = current_value
            current_value = prev_value

        for j in range(i+1, m-i):
            prev_value = arr[i][m-j-1]
            arr[i][m-j-1] = current_value
            current_value = prev_value

for i in range(n):
    for j in range(m):
        print(arr[i][j], end=' ')
    print()
