import spacy
from collections import Counter

from spacy import tokens

nlp = spacy.load('en_core_web_sm')

doc = nlp(open('testing.txt').read())
# print(doc)

# List of all noun
nouns = [token.text for token in doc if token.is_stop != True and token.is_punct != True and token.pos_ == 'NOUN']
# print(nouns)

# Find the most common nouns
word_freq = Counter(nouns)
common_nouns = word_freq.most_common(10)
print(common_nouns)


