import sys
input = sys.stdin.readline

n = int(input())
pay = [0] + list(int(x) for x in input().split()) + [0]
stack = [0]
M = 0
# print(pay)

for i in range(1, len(pay)):
    while stack and pay[stack[-1]] > pay[i]:
        height = pay[stack[-1]]
        stack.pop()
        width = i - stack[-1] - 1

        M = max(M, height*width)
    stack.append(i)
    # print(stack, i)

print(M)
