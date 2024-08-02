
# Print Formatting in Python
person = "nawar"
print("My name is {}".format(person))

print(f"My name is {person}")

d = {'a': 123, 'b': 456}

print(f"My number is {d['a']}")

myList = [1, 2, 3]

print(f"My number is {myList[2]}")

# Example of printing formatted library data
library = [('Author', 'Topic', 'Pages'), ('a', 't', 'p'), ('a', 'c', 33), ('ddd', 'long title', 777)]

for book in library:
    print(f"Author is {book[0]}")

for author, topic, pages in library:
    print(f'{author:{14}} {topic:{12}} {pages:.>5}')

from datetime import datetime

today = datetime(year=2019, month=2, day=28)
print(f'{today:%B %d, %Y}')

"""
**Working with Text Files**
"""

# Opening and reading a text file
# %writefile test.txt
# Hello, this is a quick test file.
# This is the second line of the file.

# Check current working directory (pwd) - Note: This might not work in some environments
# pwd  

# Open a text file
myfile = open('test.txt')

# Reading the file
content = myfile.read()
print(content)

# Reset the cursor to the beginning of the file to read again
myfile.seek(0)
content = myfile.read()
print(content)

# Close the file after reading
myfile.close()

# Reading file line by line
myfile = open('test.txt')
lines = myfile.readlines()
print(lines)

# Close the file
myfile.close()

# Writing to a file (overwriting)
myfile = open('test.txt', 'w+')
myfile.write('My Brand new text!')
myfile.seek(0)
print(myfile.read())
myfile.close()

# Appending to a file
myfile = open('test.txt', 'a+')
myfile.write('\nMy second new line')
myfile.write('\nMy third new line')
myfile.seek(0)
print(myfile.read())
myfile.close()

# Using a context manager to auto-close the file
with open('test.txt', 'r') as myfile:
    myvar = myfile.readlines()
print(myvar)

"""
Working with PDF Files
"""

# Install PyPDF2 library
# !pip install PyPDF2

import PyPDF2

# Reading text from a PDF file
with open('declaration.pdf', 'rb') as myfile:
    pdf_reader = PyPDF2.PdfReader(myfile)

    # Create a list to store text from each page
    pdf_text = []

    # Iterate over each page in the PDF
    for page in pdf_reader.pages:
        pdf_text.append(page.extract_text())

# Printing the text of each page
for page in pdf_text:
    print(page)
    print('\n')

# Copying a page from one PDF and appending it to another PDF
with open('declaration.pdf', 'rb') as f:
    pdf_reader = PyPDF2.PdfReader(f)
    first_page = pdf_reader.pages[0]

    pdf_writer = PyPDF2.PdfWriter()
    pdf_writer.add_page(first_page)

    with open('new_pdf.pdf', 'wb') as pdf_output:
        pdf_writer.write(pdf_output)

# Verify the copied content
with open('new_pdf.pdf', 'rb') as new_pdf:
    pdf_reader = PyPDF2.PdfReader(new_pdf)
    print(pdf_reader.pages[0].extract_text())

# Extracting text from all pages in a PDF
with open('declaration.pdf', 'rb') as f:
    pdf_reader = PyPDF2.PdfReader(f)
    pdf_text = []

    for page in pdf_reader.pages:
        pdf_text.append(page.extract_text())

for page in pdf_text:
    print(page)
    print('\n')