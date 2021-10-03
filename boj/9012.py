import sys
import collections
input = sys.stdin.readline

for _ in range(int(input())):
    parenthesis = list(input().rstrip())
    stack = collections.deque()
    for p in parenthesis:
        if p == '(':
            stack.append(p)
        else:
            if stack and stack[-1] == '(':
                stack.pop()
            else:
                stack.append(p)
    print(['NO', 'YES'][len(stack) == 0])
