from os import pardir
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n, m = list(map(int, input().split()))
parent = [i for i in range(n+1)]


def find_root(a):
    if a == parent[a]:
        return a
    p = find_root(parent[a])  # a의 루트 노드 찾기
    parent[a] = p  # 부모 테이블 갱신
    return find_root(parent[a])


def union(a, b):
    a = find_root(a)
    b = find_root(b)

    if a == b:
        return
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


for _ in range(m):
    o, a, b = map(int, input().split())  # operation, 원소, 원소
    if o == 0:  # o=0은 두 원소가 포함되어 있는 집합을 합치기
        union(a, b)
        # print(parent)
    elif o == 1:  # 두 원소가 동일한 집합인지 판단
        if find_root(a) == find_root(b):
            print('YES')
        else:
            print('NO')
    # print(parent)
