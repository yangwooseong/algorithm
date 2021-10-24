a, p = list(map(int, input().split()))
arr = [a]

while True:
    n = 0
    tmp = arr[-1]
    while tmp > 0:
        n += (tmp % 10)**p
        tmp //= 10
    if n in arr:
        idx = arr.index(n)
        break
    else:
        arr.append(n)

print(idx)
