from findkey import find_noun, find_verb, find_stopword

def assemble(*args):
    # str = ' '.join(args)
    str= ' '.join(''.join(elems) for elems in args)
    return str

# Noun Phrase
def NP(T, N):
    return assemble(T, N)

def N(N):
    return assemble(N)

# Verb Phrase
def VP(Verb, NP):
    return assemble(Verb, NP)

def sentence(NP, VP):
    return assemble(NP, VP)
    
def stopword(T):
    return T

def simple_q(WH, IS, N):
    q = assemble(WH, IS, N) + "?"
    return q

def general_q(WH, ez_verbs, NP, VP):
    return assemble(WH, ez_verbs, NP, VP) + "?"

def loop(x):
    import random as ran
    # T = len(find_stopword('testing.txt'))
    # for i in range(find_stopword('testing.txt')):
    #     T = ran.choice(i)
    T = find_stopword('testing.txt')
    N = find_noun('testing.txt')
    Verb = find_verb('testing.txt')
    WH = ['what', 'when', 'who', 'how', 'where']
    ez_verbs = ['is', 'are', 'do', 'does', 'will be', 'to be', 'can be', 'could be']
    

    for i in range(x):
        N1, N2 = ran.choice(N), ran.choice(N)
        T1, T2 = ran.choice(T), ran.choice(T)
        Verb1 = ran.choice(Verb)
        WH1 = ran.choice(WH)
        ez1 = ran.choice(ez_verbs)

        NP1 = NP(T1, N1)
        NP2 = NP(T2, N2)
        VP1 = VP(Verb1, NP2)
        s1 = open('sentence.txt', 'a')
        q1 = open('question.txt', 'a')

        contents = sentence(NP1, VP1) + "\n"
        s1.write(contents)
        contents += simple_q(WH1, ez1, N2) + "\n"
        q1.write(contents)
        contents += general_q(WH1, ez1, N1, VP1)
        q1.write(contents)
        s1.close()
        q1.close()

# N1 = find_stopword('testing.txt')
# print(N1)
# T1 = 'the'
# NP(T1, N1)
loop(3)


# T= ['the']
# N= ['man']
# a = assemble(T, N)
# print(a)

# demo1 = loop(2)
# print(demo1)

