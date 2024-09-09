from main import app, db, Puppy
from sqlalchemy.orm import Session

with app.app_context():
    # Start a session
    session = Session(bind=db.engine)

    # Create
    my_puppy = Puppy('Frankie', 5)
    session.add(my_puppy)
    session.commit()

    my_puppy2 = Puppy('Rufus', 5)
    session.add(my_puppy2)
    session.commit()

    # Read
    all_puppies = session.execute(db.select(Puppy)).scalars().all()
    print(all_puppies)  # This will print a list of all Puppy objects in the database

    puppy_one = session.get(Puppy, 1)  # Retrieves the puppy with id=1
    print(puppy_one.name if puppy_one else "Puppy not found")  # Print the name of the puppy with id=1

    puppy_frankie = session.execute(db.select(Puppy).filter_by(name='Frankie')).scalars().all()
    print([p.name for p in puppy_frankie])  # This prints all entries that match the filter condition

    # Update
    first_puppy = session.get(Puppy, 1)
    if first_puppy:
        first_puppy.age = 10
        session.add(first_puppy)
        session.commit()

    # Delete
    second_puppy = session.get(Puppy, 2)
    if second_puppy:
        session.delete(second_puppy)
        session.commit()

    # delete all
    session.execute(db.delete(Puppy))
    session.commit()  # Commit the changes to the database

    # Close the session
    session.close()

    all_puppies = session.execute(db.select(Puppy)).scalars().all()
    print(all_puppies)  # This will print a list of all Puppy objects in the database