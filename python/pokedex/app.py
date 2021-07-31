import requests
from flask import Flask, request, render_template, redirect, url_for, flash, session
from api.requests_api import RequestsApi
from models.Vote import Vote
import random

# aun se siguen agregando mas funcionalidades
# practica para consumo de api con flask

app=Flask(__name__)
app.secret_key = "b7181fc7-8952-4af7-b7ca-f22514425330"

# sesión muy sencillo de ejemplo
def session_validate():
    if 'login' in session:
        return True
    else:
        return False

@app.route('/')
def index():
    res = RequestsApi.get_all_api()
    return render_template('index.html', votes = res)

@app.route('/new')
def new():
    return render_template('create.html')

@app.route('/save', methods=['POST'])
def save():
    if request.method == 'POST':
        try:
            imglist = ['1d0', 'cvr', 'ar9', 'djk', '1nk', '9bf']
            img = random.choice(imglist)

            value_input = request.form['value_input']

            vote = Vote(value=int(value_input), image_id=img)
            res = RequestsApi.save_api(vote)
            return redirect(url_for('index'))
        except:
            return "not saved"

@app.route('/view/<id>')
def view(id):
    res= RequestsApi.get_one_api(id)
    return render_template('view.html', vote=res)

@app.route('/delete/<id>')
def delete(id):
    res= RequestsApi.delete_api(id)
    return redirect(url_for('index'))

if __name__== '__main__':
    app.run(debug=True)