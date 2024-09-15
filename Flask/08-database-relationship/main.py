from models import db, Puppy, Owner, Toy, app 


with app.app_context():
    # db.drop_all()
    # db.create_all()

    # creating two puppies
    rufus = Puppy('Rufus')
    fido = Puppy('fido')

    # add puppies to db
    db.session.add_all([rufus, fido])
    db.session.commit()

    # check
    print(Puppy.query.all())

    rufus = Puppy.query.filter_by(name='Rufus').first()  # or .all()[0]

    # creat an owner
    jose = Owner('Jose', rufus.id)

    # give toys
    toy1 = Toy('Chew Toy', rufus.id)
    toy2 = Toy('Ball', rufus.id)

    db.session.add_all([jose, toy1, toy2])
    db.session.commit()

    # grab rufus again
    rufus = Puppy.query.filter_by(name='Rufus').first()
    print(rufus)
    rufus.report_toys()
