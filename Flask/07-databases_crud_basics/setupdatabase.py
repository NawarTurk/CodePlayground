from main import app, db, Puppy

# Execute within application context to access app configurations and perform database operations
with app.app_context():
    db.create_all()  # Create all tables based on the model definitions

    # Create new instances of the Puppy class
    sam = Puppy(name='Sammy', age=3)
    frank = Puppy(name='Frankie', age=4)

    # Print IDs (should be None before committing to the database)
    print(f"Sam's ID before commit: {sam.id}")
    print(f"Frank's ID before commit: {frank.id}")

    # Add instances to the session and commit them to the database
    db.session.add(sam)
    db.session.add(frank)
    db.session.commit()  # Commit the transaction

    # Print IDs (should now reflect their database ID post-commit)
    print(f"Sam's ID after commit: {sam.id}")
    print(f"Frank's ID after commit: {frank.id}")
