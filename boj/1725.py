import sys

input = sys.stdin.readline

stack = [0]
max_area = 0
height = [0]

for i in range(int(input())):
    height.append(int(input()))

height += [0]

for i in range(1, len(height)):
    while stack and height[stack[-1]] > height[i]:
        h = height[stack[-1]]
        stack.pop()
        width = i - stack[-1] - 1
        max_area = max(max_area, width*h)

    stack.append(i)
print(max_area)
