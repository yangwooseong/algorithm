n, k = list(map(int, input().split()))
ans = 0

while bin(n).count('1') > k:
    p = bin(n)[::-1].index('1')
    n += 2**p
    ans += 2**p

    # print(n, bin(n).count('1'))
print(ans)
