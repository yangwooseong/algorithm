n = int(input())
m = int(input())
arr = input()

# p_n = 'I' + 'OI' * n
# cnt = 0
# # print(p_n)
# for i in range(0, m-len(p_n)):
#     if arr[i:i+len(p_n)] == p_n:
#         cnt += 1
#         # print(i, cnt)
# print(cnt)

i = 1
pattern = 0
cnt = 0
while i < m-1:
    if arr[i-1] == 'I' and arr[i] == 'O' and arr[i+1] == 'I':
        pattern += 1
        if pattern == n:
            pattern -= 1
            cnt += 1
        i += 1
    else:
        pattern = 0
    i += 1
print(cnt)
