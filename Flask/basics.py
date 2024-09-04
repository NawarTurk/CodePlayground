from flask import Flask

app = Flask(__name__)

@app.route('/')  # this is a decorator
def index(): # it is called a view function
    return "<h1>Hello, World!</h1>"

@app.route('/information')
def info():
    return "<h2>Coding is Fun!"

@app.route('/profile/<name>')  # dynamic routing
def profile(name):
    return f"<h1>This is a page for {name.upper()}</h1>"

if __name__ == '__main__':
    app.run(debug=True)   


# Note:
# __name__ is a special variable in Python that represents the name of the current module.
# When you run a script directly (not imported as a module in another script), __name__ is set to "__main__". 
# # it helps Flask understand where your application is located.
# __name__ is used to tell Flask whether your script is being run directly or being imported as a module in another script.

