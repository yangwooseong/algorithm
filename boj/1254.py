ar = input()
l = 0
start = len(ar) - 1
for j in range(len(ar)-1, -1, -1):
    tmp = ar[j:]
    if tmp == tmp[::-1] and len(ar) - j > l:
        start = j
        l = len(ar) - j
print(l + 2*(len(ar)-l))
