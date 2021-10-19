t = int(input())
for _ in range(t):
    n, m = list(map(int, input().split()))
    arr = list(map(int, input().split()))
    arr_idx = [i for i in range(n)]
    cnt = 0

    while m in arr_idx:
        first = arr.pop(0)
        first_idx = arr_idx.pop(0)
        cnt += 1

        for i in range(len(arr)):
            if arr[i] > first:
                arr.append(first)
                arr_idx.append(first_idx)
                cnt -= 1
                break
        # print(arr)
    print(cnt)
