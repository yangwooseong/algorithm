n, k = list(map(int, input().split()))
arr = [0, 0] + list(range(2, n+1))


while True:
    for i in arr:
        if i != 0:
            prime = i
            break

    num_to_delete = prime

    while num_to_delete <= n:
        if arr[num_to_delete] != 0:
            # print(num_to_delete, prime)
            arr[num_to_delete] = 0
            k -= 1
            if k == 0:
                print(num_to_delete)
                exit()
        num_to_delete += prime
