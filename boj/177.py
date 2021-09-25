import sys
input = sys.stdin.readline


def largest_rec(height):
    stack = []
    max_area = 0
    for i in range(len(height)):
        while stack and height[stack[-1]] > height[i]:
            h = height[stack[-1]]
            stack.pop()
            width = i - stack[-1] - 1
            max_area = max(max_area, h*width)
            print(width, stack[-1], h)
        stack.append(i)
        # print(stack, max_area, i)

    return max_area


height = [0] + [int(input()) for _ in range(int(input()))] + [0]
# print(height)
print(largest_rec(height))
