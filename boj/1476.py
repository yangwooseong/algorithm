import sys
input = sys.stdin.readline

e, s, m = list(map(int, input().split()))
e_, s_, m_ = 1, 1, 1
year = 1

while (e, s, m) != (e_, s_, m_):
    year += 1
    e_ += 1
    e_ = 1 if e_ == 16 else e_
    s_ += 1
    s_ = 1 if s_ == 29 else s_
    m_ += 1
    m_ = 1 if m_ == 20 else m_

print(year)
