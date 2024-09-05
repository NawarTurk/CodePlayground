from flask import Flask, render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup_form')
def signup_form():
    return render_template('signup.html')

@app.route('/thank_you')
def thank_you():
    first = request.args.get('first')
    last = request.args.get('last')
    return render_template('thankyou.html', first=first, last=last)
# request.form.get() retrieves form data submitted via POST requests.
# 'first' and 'last' capture the values entered in the form fields with names 'first' and 'last'.
# This happens when a user submits the form, and the server processes the input immediately upon submission.
# There is no session created automatically with the form submission; the data is sent in the request.

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
# This function handles 404 errors (Page Not Found).
# When a user tries to access a non-existent page, Flask will render the '404.html' template.
# The second argument (404) explicitly sets the response status code to 404.

if __name__ == '__main__':
    app.run(debug=True)