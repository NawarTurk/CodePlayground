from flask import Flask, render_template

# pip install Flask-WTF
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField


app = Flask(__name__)

app.config['SECRET_KEY'] = 'secretstring'
# Set SECRET_KEY to a secure string to sign session cookies and protect against CSRF attacks.
# SECRET_KEY is used to encrypt session cookies and safeguard form submissions.

class InfoForm(FlaskForm):  # creat our own form and inherefto from flaskform
    breed = StringField('What Breed are you?')  # attributes
    submit = SubmitField('Submit')


@app.route('/', methods=['GET', 'POST'])  
def index():
    breed = False
    form = InfoForm()

    if form.validate_on_submit():
        breed = form.breed.data
        form.breed.data = ''
    return render_template('index.html', form=form, breed=breed)


if __name__ == '__main__':
    app.run(debug=True)