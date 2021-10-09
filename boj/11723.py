import sys
input = sys.stdin.readline

n = int(input())
s = set()
for _ in range(n):
    ops = input().split()
    if len(ops) == 1:
        op = ops[0]
        if op == 'all':
            s = set(list(range(1, 21)))
        elif op == 'empty':
            s = set()
    elif len(ops) == 2:
        op, num = ops
        num = int(num)
        if op == 'add':
            s.add(num)
        elif op == 'check':
            print(1 if num in s else 0)
        elif op == 'remove' and num in s:
            s.remove(num)
        elif op == 'toggle':
            if num in s:
                s.remove(num)
            else:
                s.add(num)
    # print(s)
