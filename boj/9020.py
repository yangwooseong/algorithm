import sys
from collections import deque
input = sys.stdin.readline


def prime_under_man():
    arr = [2]
    for i in range(3, 10000, 2):
        j = 3
        find = True
        while j*j <= i:
            if i % j == 0:
                find = False
                break
            j += 2
        if find:
            arr.append(i)
    return arr


primes = prime_under_man()
for _ in range(int(input())):
    n = int(input())
    min = 10000
    arr = []
    filtered_primes = list(filter(lambda x: x < n, primes))
    for prime in filtered_primes:
        if prime > n - prime:
            continue
        if n - prime in filtered_primes and min > abs(prime - n + prime):
            arr = sorted([prime, n-prime])
            min = abs(prime - n + prime)
    print(' '.join(list(map(str, arr))))
