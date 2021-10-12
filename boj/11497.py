n = int(input())


def get_pibonacchi_under_n(n):
    arr = [1, 1]
    x, y = 1, 1
    while True:
        x, y = x+y, x
        if x > n:
            break
        arr.append(x)
    return arr


for _ in range(n):
    t = int(input())
    arr = get_pibonacchi_under_n(t)
    ans = []
    for v in sorted(arr, reverse=True):
        if t >= v:
            t -= v
            ans.append(v)
        if t == 0:
            print(' '.join(list(map(str, ans[::-1]))))
            break
