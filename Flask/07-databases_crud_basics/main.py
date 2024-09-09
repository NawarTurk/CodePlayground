import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# 1. Create an SQLite database purely via Python
basedir = os.path.abspath(os.path.dirname(__file__))
# Print the base directory to verify path (uncomment to use)
# print(basedir)

# Explanation of path components:
# __file__ is a special variable that gets set to the name of the file; in this case, it is set to 'main.py'.
# os.path.dirname(__file__) retrieves the directory name of the current file.
# os.path.abspath(...) converts the relative path to an absolute path.
# This ensures that the path format is correct regardless of the operating system used.

app = Flask(__name__)

# Configure the application to store the SQLite database in the specified directory
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking to improve performance unless needed for debugging or tracking purposes

db = SQLAlchemy(app)  # Instantiate SQLAlchemy with the Flask app to create the database connection

# 2. Creating a model 

class Puppy(db.Model):
    # When passing the app through SQLAlchemy, db will have a model class to represent tables in the database
    # Default table name is typically the lowercase version of the class name; to override:
    __tablename__ = 'puppies'  # If not set, SQLAlchemy defaults to using the class name with an added 's'

    # Define columns in the table:
    id = db.Column(db.Integer, primary_key=True)  # A unique identifier for each row
    name = db.Column(db.Text)  # Column for the puppy's name
    age = db.Column(db.Integer)  # Column for the puppy's age

    def __init__(self, name, age):  # Constructor doesn't require id as it's automatically generated
        self.name = name
        self.age = age
    
    def __repr__(self):  # String representation of the object, helpful for debugging
        return f"Puppy {self.name} is {self.age} year(s) old"

