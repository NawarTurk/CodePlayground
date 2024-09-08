from flask import Flask, render_template, session, flash, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import (StringField, BooleanField, 
                     RadioField, SelectField, TextAreaField, 
                     SubmitField, DateTimeField)
from wtforms.validators import data_required  # a validator

app = Flask(__name__)

app.config['SECRET_KEY'] = 'secretkey'

class InfoForm(FlaskForm):
    breed = StringField('What breed are you', validators=[data_required()])  # added a label and validator
    neutered = BooleanField("Have you been neutered?")
    mood = RadioField('Please choose youe mood:', 
                      choices=[('mood_one', 'Happy'), ('mood_two', 'Excited')])  # a list of tupled pairs
    food = SelectField(u'Pick your favourite food:',
                       choices = [('chi', 'chicken'), ('bf', 'Beef'),
                                  ('fish', 'Fish')])  # the first element is for the backend, the second element is what the user sees
    feedback = TextAreaField()
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])  # we use methods when we have a form on the page
def index():

    form = InfoForm()

    if form.validate_on_submit():  # once they hit the submit button, we grab the data
        # it checks the validator
        session['breed'] = form.breed.data  # grab the session object as dic and greate a new key
        session['neutered'] = form.neutered.data
        session['mood'] = form.mood.data
        session['food'] = form.food.data
        session['feedback'] = form.feedback.data
        # 'session' is a Flask variable that stores data across requests from the same client, 
        # maintaining persistent user-specific information.

        flash('You just submitted a form')
        flash(session['breed'])

        # Grab the info, add it to the session, and redirect
        return redirect(url_for('thankyou'))  # only after submitting
    
    return render_template('index.html', form=form)  # original rendering of the home page

@app.route('/thankyou')  
def thankyou():
    return render_template('thankyou.html') 

if __name__ == '__main__':
    app.run(debug=True)
