def is_prime(p):
    k = 3
    while k * k <= p:
        if p % k == 0:
            return False
        k += 2
    return True


def goldbach(n):
    for p in range(3, n, 2):
        if is_prime(p) and is_prime(n-p):
            print('%d = %d + %d' % (n, p, n-p))
            return


while True:
    n = int(input())
    if n == 0:
        break
    else:
        goldbach(n)
