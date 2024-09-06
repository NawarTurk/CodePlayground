from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/report')
def report():
    username = request.args.get('username')
    conditions_met = []
    conditions_missed = []

    counter = -0
    
    if contain_capital(username):
        conditions_met.append('It contains a capital letter')
        counter += 1
    else:
        conditions_missed.append('It does not  contain a capital letter')

    if contain_lower(username):
        conditions_met.append('It contains a lower  letter')
        counter += 1
    else:
        conditions_missed.append('It does not contain a lower  letter')
     
    if num_end(username):
        conditions_met.append('The last digit is a numer')
        counter += 1 
    else:
        conditions_missed.append('The last digit is not a numer')
   
    return render_template('report.html', username=username, conditions_met=conditions_met, conditions_missed=conditions_missed, counter=counter)


def contain_capital(username):
    return any(char.isupper() for char in username)

def contain_lower(username):
    return any(char.islower() for char in username)

def num_end(username):
    return username[-1].isdigit()

if __name__ == '__main__':
    app.run(debug=True)