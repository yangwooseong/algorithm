import sys
input = sys.stdin.readline

tag = False
stack = []
input = input().rstrip()
for i, c in enumerate(input):
    stack.append(c)
    if c == '>':
        print(''.join(stack), end='')
        stack = []
    elif i == len(input) - 1 and stack:
        while stack:
            print(stack.pop(), end='')
        print(' ', end='')
    elif c == '<':
        tmp = stack[:-1]
        while tmp:
            print(tmp.pop(), end='')
        stack = ['<']
    elif c == ' ' and not '<' in stack:
        tmp = stack[:-1]
        stack = []
        while tmp:
            print(tmp.pop(), end='')
        print(' ', end='')
