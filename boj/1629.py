import sys
sys.setrecursionlimit(1000000)
a, b, c = list(map(int, input().split()))


def power(a, b):
    if b == 1:
        return a % c
    else:
        temp = power(a, b // 2)
        if b % 2 == 0:
            return temp * temp % c
        else:
            return temp * temp * a % c


print(power(a, b))
