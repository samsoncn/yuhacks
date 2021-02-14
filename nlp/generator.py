from findkey import find_noun, find_verb, find_stopword



def assemble(*args):
    # str = ' '.join(args)
    str= ' '.join(''.join(elems) for elems in args)
    return str

# Noun Phrase
def NP(T, N):
    return assemble(T, N)

# Verb Phrase
def VP(Verb, NP):
    return assemble(Verb, NP)

def sentence(NP, VP):
    return assemble(NP, VP)
    
def stopword(T):
    return T

def loop(x):
    import random as ran
    # T = len(find_stopword('testing.txt'))
    # for i in range(find_stopword('testing.txt')):
    #     T = ran.choice(i)
    T = find_stopword('testing.txt')
    N = find_noun('testing.txt')
    Verb = find_verb('testing.txt')

    

    for i in range(x):
        N1, N2 = ran.choice(N), ran.choice(N)
        T1, T2 = ran.choice(T), ran.choice(T)
        Verb1 = ran.choice(Verb)

        NP1 = NP(T1, N1)
        NP2 = NP(T2, N2)
        VP1 = VP(Verb1, NP2)
        print(sentence(NP1, VP1))

# N1 = find_stopword('testing.txt')
# print(N1)
# T1 = 'the'
# NP(T1, N1)
loop(20)

# T= ['the']
# N= ['man']
# a = assemble(T, N)
# print(a)
