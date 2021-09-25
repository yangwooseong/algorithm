import sys
import math
input = sys.stdin.readline

idx = 1
while True:
    chars = input().strip()
    if '-' in chars:
        break

    stack = []
    ans = 0
    for char in chars:
        if char == '{':
            stack.append(char)
        else:
            if stack:
                stack.pop()
            else:
                stack.append('{')
                ans += 1
    ans += math.ceil(len(stack)/2)
    print(f'{idx}. {ans}')

    idx += 1
