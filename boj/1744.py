n = int(input())

arr_plus, arr_minus, arr_zero = [], [], []

for _ in range(n):
    m = int(input())
    if m > 0:
        arr_plus.append(m)
    elif m < 0:
        arr_minus.append(m)
    else:
        arr_zero.append(m)


arr_plus.sort(reverse=True)
arr_minus = sorted(arr_minus) + arr_zero

ans = 0

for arr in [arr_plus, arr_minus]:
    computed = False
    for i in range(len(arr)):
        if computed:
            computed = False
            continue

        if i != len(arr)-1 and arr[i] * arr[i+1] >= 0 and \
                not (arr[i] == 1 or arr[i+1] == 1):
            ans += arr[i] * arr[i+1]
            computed = True
        else:
            ans += arr[i]
print(ans)
