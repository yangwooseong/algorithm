n = int(input())

m = 0
while True:
    if 2**m >= n:
        break
    m += 1


print(2**m, m - bin(n)[2:][::-1].index('1'))
