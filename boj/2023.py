n = int(input())


def is_prime(p):
    if p == 1:
        return False
    elif p == 2 or p == 3:
        return True
    k = 2
    while k*k <= p:
        if p % k == 0:
            return False
        k += 1
    return True


k = 10**(n-1) + 1 if n != 1 else 2
dp = [[] for _ in range(8)]
dp[0] = [2, 3, 5, 7]

for i in range(1, n):
    for k in dp[i-1]:
        for j in [1, 3, 5, 7, 9]:
            if is_prime(k*10+j):
                dp[i].append(k*10+j)

    # print(dp)

for i in dp[n-1]:
    print(i)
