import sys

input = sys.stdin.readline

# 택경이 코드


# def f(A):
#     ret = s = 0
#     # st = [(INF, 0)]
#     st = []
#     for a in A:
#         cnt = 1
#         while st and st[-1][0] <= a:
#             v, i = st.pop()
#             s -= v*i
#             cnt += i
#         st.append((a, cnt))
#         s += a*cnt
#         ret += s
#         print(st, s, ret)

#     return ret


# INF = 1 << 30
# A = [int(input()) for _ in range(int(input()))]

# print(f(A) + f([-a for a in A]))

nums = [int(input()) for _ in range(int(input()))]


def sum_max_values(li):
    stack = []  # Array<(value, count)>
    ret = 0
    s = 0
    for num in li:
        count = 1
        while stack and stack[-1][0] <= num:
            val, idx = stack.pop()
            s -= val*idx
            count += idx
        s += num*count
        stack.append((num, count))
        ret += s
    return ret


print(sum_max_values(nums) + sum_max_values([-num for num in nums]))
