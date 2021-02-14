from findkey import find_noun, find_verb, find_stopword



def assemble(*args):
    str = ' '.join(args)
    return str

# Noun Phrase
def NP(T, N):
    return assemble(T, N)

# Verb Phrase
def VP(Verb, NP):
    return assemble(Verb, NP)

def sentence(NP, VP):
    return assemble(NP, VP)

def loop(x):
    # for i in range(find_stopword('testing.txt')):
    #     T = ran.choise(i)
    T = find_stopword('testing.txt')
    N = find_noun('testing.txt')
    Verb = find_verb('testing.txt')

    import random as ran

    for i in range(x):
        N1, N2 = ran.choice(N), ran.choice(N)
        T1, T2 = ran.choice(T), ran.choice(T)
        Verb1 = ran.choice(Verb)

        NP1 = NP(T, N1)
        NP2 = NP(T, N2)
        VP1 = VP(Verb1, NP2)
        print(sentence(NP1, VP1))

# N1 = find_stopword('testing.txt')
# print(N1)
# T1 = 'the'
# NP(T1, N1)
# loop(1)

T= ['the']
N= ['man']
a = assemble(T, N)
print(a)
