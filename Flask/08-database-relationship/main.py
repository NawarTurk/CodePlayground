import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)

# Set the SQLALCHEMY_DATABASE_URI to point to the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Note: The correct key is 'SQLALCHEMY_TRACK_MODIFICATIONS'

db = SQLAlchemy(app)
Migrate(app, db)

class Puppy(db.Model):
    __tablename__ = 'puppies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)

    # One to Many relationship: One puppy can have many toys
    toys = db.relationship('Toy', backref='puppy', lazy='dynamic')

    # One to One relationship: One puppy has one owner
    owner = db.relationship('Owner', backref='puppy', uselist=False)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        if self.owner:
            return f"Puppy name is {self.name} and owner is {self.owner.name}"
        else:
            return f"Puppy name is {self.name} and no owner yet"
        
    def report_toys(self):
        print("Here are my toys:")
        for toy in self.toys:
            print(toy.item_name)

class Toy(db.Model):
    __tablename__ = 'toys'
    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.Text)  # Corrected 'db.Columns' to 'db.Column'
    puppy_id = db.Column(db.Integer, db.ForeignKey('puppies.id'))
    # The 'backref="puppy"' in the relationships defines a reverse link from the Toy and Owner models back to the Puppy model.
    # This 'backref' attribute creates a convenient attribute on each Toy and Owner object named 'puppy' that allows us to directly access the Puppy instance associated with each.
    # We use the singular form 'puppy' (lowercase) for the backref name to denote that each Toy or Owner is linked to exactly one Puppy instance, 
    # reflecting Python's convention of using lowercase for instance attributes, distinguishing it from the class name 'Puppy', which is capitalized.


    def __init__(self, item_name, puppy_id):
        self.item_name = item_name
        self.puppy_id = puppy_id

class Owner(db.Model):
    __tablename__ = 'owners'  # Specify a different table name if needed
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    puppy_id = db.Column(db.Integer, db.ForeignKey('puppies.id'))

    def __init__(self, name, puppy_id):
        self.name = name
        self.puppy_id = puppy_id

# Add this part to create and access the database, if you are running this as a script
if __name__ == '__main__':
    db.create_all()  # Creates all tables
    app.run(debug=True)  # Starts the Flask application
