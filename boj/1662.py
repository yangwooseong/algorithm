arr = list(input())
stack = []

iteration

length = 0
last_char = ''
for c in arr:
    if c.isdigit():
        length += 1
        last_char = c
    elif c == '(':
        stack.append((last_char, length - 1))
        length = 0
    else:
        m, last_length = stack.pop()
        length = int(m) * length + last_length

    # print(last_char, length, stack)
print(length)

# recursion


# def recursion(total_length, current_length, arr):
#     if not arr:
#         return total_length

#     top = arr.pop()
#     print(total_length, current_length, arr, top)
#     if top == ')':
#         return recursion(current_length, 0, arr)
#     elif top == '(':
#         m = int(arr.pop())
#         return recursion(m * current_length, 0, arr)
#     else:
#         return recursion(total_length + 1, current_length+1, arr)


# print(recursion(0, 0, arr))
