print("Hi")

def find(a, b):
    for i, val in enumerate(a):
        if val == b:
            return i
    return -1