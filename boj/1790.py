n, k = list(map(int, input().split()))

# if k < 10:
#     print(k)
#     exit()


# def get_idx(k):
#     n = 1
#     while 10**n-1 < k:
#         n += 1
#     return n


# def get_total_length(n):
#     i = 1
#     length = 0
#     if n < 10:
#         return n
#     while n > 10**i:
#         length += 9*(10**(i-1))*i
#         i += 1
#     length += (n-10**(i-1)+1) * i
#     return length


# if get_total_length(n) < k:
#     print(-1)
#     exit()


# m = get_idx(k)
# total = 10**(m-1) - 1
# k -= total
# k += 1
# p, r = k // m, k % m
# # print(p, r)
# num = 10**(m-1) + p - 1
# # print(num)
# print(str(num)[r])

totalnum = 0
numcount = 9
numlength = 1
tenten = 1

while k > numcount*numlength:
    totalnum += numcount
    k -= numcount*numlength
    numcount *= 10
    numlength += 1

totalnum += k * numlength

start = 10**(numlength-1)
current_num = start + (k-1) // numlength
if current_num > n:
    print(-1)
else:
    digit = (k-1) % numlength
    print(str(current_num)[digit])
