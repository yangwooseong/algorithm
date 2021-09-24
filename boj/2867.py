import sys

input = sys.stdin.readline


def f(A):
    ret = s = 0
    # st = [(INF, 0)]
    st = []
    for a in A:
        cnt = 1
        while st and st[-1][0] <= a:
            v, i = st.pop()
            s -= v*i
            cnt += i
        st.append((a, cnt))
        s += a*cnt
        ret += s
        print(st, s, ret)

    return ret


INF = 1 << 30
A = [int(input()) for _ in range(int(input()))]

print(f(A) + f([-a for a in A]))

# 택경이 코드
