import sys
input = sys.stdin.readline

n = int(input())
# bitmask 를 이용한 풀이
state = 0
for _ in range(n):
    i = input().rstrip()
    if i == 'all':
        state = (1 << 21) - 1
        continue
    elif i == 'empty':
        state = 0
        continue
    op, num = i.split()
    num = int(num)
    num_bit = 1 << (num-1)
    if op == 'add' and state != num_bit:
        state += num_bit
    elif op == 'check':
        print(1 if state & num_bit else 0)
    elif op == 'remove' and state & num_bit:
        state -= num_bit
    elif op == 'toggle':
        if state & num_bit:
            state -= num_bit
        else:
            state += num_bit
