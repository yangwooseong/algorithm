arr = list(input())
bomb = input()
stack = []

for s in arr:
    stack.append(s)

    if stack[-1] == bomb[-1]:
        idx = 1
        # print(idx, stack, bomb)
        while len(stack) >= idx and len(bomb) >= idx and stack[-idx] == bomb[-idx]:
            idx += 1
        idx -= 1
        if idx == len(bomb):
            for _ in range(idx):
                stack.pop()

ans = ''.join(stack)
if ans:
    print(ans)
else:
    print('FRULA')
