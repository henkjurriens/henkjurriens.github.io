import re
import sys

from bs4 import BeautifulSoup


if len(sys.argv) < 2:
    print "missing filename"
    sys.exit()


print sys.argv[1]

f = open(sys.argv[1] + '.html', 'r')
#html_doc = "<html>  <body><h1>henk</h1><h1 translate>message</h1><h2 translate>message</h2></body></html>"
html_doc = f.read()

soup = BeautifulSoup(html_doc)


filename = sys.argv[1] + ".en"

f = open(filename, 'w')
for keyword in soup.select('[translate]') :
    f.write(keyword.string + '=\n')
