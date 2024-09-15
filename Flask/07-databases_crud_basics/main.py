import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate # pip install Flask-Migrate

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

Migrate(app, db) # connect flask app with the db in order to add on migration capabilities


# 2. Creating a model 
class Puppy(db.Model):
    # When passing the app through SQLAlchemy, db will have a model class to represent tables in the database
    # Default table name is typically the lowercase version of the class name; to override:
    __tablename__ = 'puppies'  # If not set, SQLAlchemy defaults to using the class name with an added 's'

    # Define columns in the table:
    id = db.Column(db.Integer, primary_key=True)  # A unique identifier for each row
    name = db.Column(db.Text)  # Column for the puppy's name
    age = db.Column(db.Integer)  # Column for the puppy's age
    breed = db.column(db.Text)

    def __init__(self, name, age, breed):  # Constructor doesn't require id as it's automatically generated
        self.name = name
        self.age = age
        self.breed = breed
    
    def __repr__(self):  # String representation of the object, helpful for debugging
        return f"Puppy {self.name} is {self.age} year(s) old"

# Set the FLASK_APP environment variable to 'main.py'.
# This tells Flask which file to use as the entry point of the application.
# $env:FLASK_APP="main.py"

# Verify that the FLASK_APP environment variable is set correctly.
# This command prints the value of FLASK_APP to ensure it points to your main application file.
# echo $env:FLASK_APP

# Initialize the migration environment.
# This command sets up the migrations directory, where all migration scripts will be stored.
# It only needs to be run once at the beginning to prepare the project for handling migrations.
# flask db init

# Generate a migration script automatically.
# This should be done whenever you make changes to your database models (e.g., adding a new table or field).
# flask db migrate -m "initial migration"

# Apply the migration to the database.
# This command updates the database schema to match the current state of your models as described in the migration scripts.
# Run this after generating a new migration script to make the actual schema changes to the database.
# flask db upgrade

