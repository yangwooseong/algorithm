import sys
input = sys.stdin.readline

n = int(input())
arr = list(input().rstrip())

alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
dict = {}
for i in range(n):
    dict[alphabet[i]] = int(input())

stack = []
for char in arr:
    if char in alphabet:
        stack.append(dict[char])
    else:
        b = stack.pop()
        if char == '*':
            stack[-1] *= b
        elif char == '+':
            stack[-1] += b
        elif char == '/':
            stack[-1] /= b
        elif char == '-':
            stack[-1] -= b
print('%.2f' % stack[-1])
