n = int(input())


def is_prime(p):
    if p == 1:
        return False
    if p == 2:
        return True
    elif p % 2 == 0:
        return False

    k = 3
    while k*k <= p:
        if p % k == 0:
            return False
        k += 2
    return True


if n < 10:
    for i in range(n, 10):
        if is_prime(i):
            print(i)
            exit()

start = n if n % 2 == 1 else n+1
for i in range(start, 10**9, 2):
    if is_prime(i) and str(i) == str(i)[::-1]:
        print(i)
        break
