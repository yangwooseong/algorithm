t = int(input())

for _ in range(t):
    n = int(input())
    arr = []
    for i in range(n):
        arr.append(list(map(int, input().split())))

    arr.sort(key=lambda x: x[0])
    min = arr[0][1]
    ans = 0
    for i in range(n):
        if arr[i][1] <= min:
            ans += 1
            min = arr[i][1]
            if min == 1:
                break
    print(ans)
