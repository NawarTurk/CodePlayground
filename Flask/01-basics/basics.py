from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')  # this is a decorator
def index(): # it is called a view function
    # return "<h1>go to /namemodifier/name to see the result!</h1>"
    name = 'Nawar'
    letters = list(name)
    dic = {'fav': 'python'}
    user_logged_in = True

    return render_template('basic.html', name=name, letters=letters, dic=dic, user_logged_in=user_logged_in)  
           # Flask will automatically look in the same-level directory for a folder named templates and then look inside it 
           # Jinja templating syntax

@app.route('/information')
def info():
    return "<h2>Coding is Fun!"

@app.route('/namemodifier/<name>')  # dynamic routing
def nameModifier(name):
    # return f"<h1>This is a page for {name.upper()}</h1>"
    modified_name = ''

    if name[-1].lower() == 'y':
        modified_name = name[:-1] + 'iful'
    else:
        modified_name = name + 'y'
    
    return f'<h1>Your modified name is: {modified_name}'


if __name__ == '__main__':
    app.run(debug=True)  
    # run Flak app in debug more
    # provides more detailed error messages
    # automatically reloads the server when code chages are made 
    # do not use when deployed to production


# Note:
# __name__ is a special variable in Python that represents the name of the current module.
# When you run a script directly (not imported as a module in another script), __name__ is set to "__main__". 
# # it helps Flask understand where your application is located.
# __name__ is used to tell Flask whether your script is being run directly or being imported as a module in another script.

