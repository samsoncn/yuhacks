import spacy
from collections import Counter

nlp = spacy.load('en_core_web_sm')
# contents = nlp(open('testing.txt').read())

def find_noun(doc):
# List of all noun
    contents = nlp(open(doc).read())
    nouns = [token.text for token in contents if token.is_stop != True and token.is_punct != True and token.pos_ == 'NOUN']
    # print(nouns)
    # Find the most common nouns
    word_freq = Counter(nouns)
    common_nouns = [key for key, _ in word_freq.most_common(10)]
    # print(common_nouns)
    return common_nouns

def find_verb(doc):
    contents = nlp(open(doc).read())
    # return nouns
    # def find_verbs():
    # # Find the most common verbs
    verbs = [token.text for token in contents if token.is_punct != True and token.pos_ == 'VERB']
    word_freq = Counter(verbs)
    common_verbs = [key for key, _ in word_freq.most_common(10)]
    return common_verbs

def find_stopword(doc):
    # def find_stopwords():
    # Find the most common stopwords
    contents = nlp(open(doc).read())
    stop_words = [token.text for token in contents if token.is_stop == True ]
    word_freq = Counter(stop_words)
    common_stopwords =  [key for key, _ in word_freq.most_common(10)]

    return common_stopwords


