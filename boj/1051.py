n, m = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, list(input()))))

ans = 1
for i in range(n):
    for j in range(m):
        M = min(n-i-1, m-j-1)  # 가능한 최대 길이
        while M > 0:
            if 0 <= i+M < n and 0 <= j+M < m:
                if arr[i][j] == arr[i+M][j] and arr[i][j] == arr[i][j+M]\
                        and arr[i][j] == arr[i+M][j+M]:
                    ans = max(ans, (M+1)*(M+1))
                    # print(i, j, M, ans)
                    break
            M -= 1

print(ans)
