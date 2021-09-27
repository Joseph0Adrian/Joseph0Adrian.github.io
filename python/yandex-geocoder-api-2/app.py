import requests
import json
from flask import Flask
from flask import jsonify
from flask import request
from flask import render_template
from flask import redirect
from flask import url_for
from api.requests_api import RequestsApi

app=Flask(__name__)
app.secret_key = "823764c6-f937-43cb-a80d-1d8118746554"

@app.route('/new')
def new():
    return render_template('search.html')

@app.route('/search', methods=['POST'])
def search():
    if request.method == 'POST':
        try:
            value_input = request.form['value_input']
            res = RequestsApi.get_coordinate_by_address(value_input)
            point = res['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['Point']['pos']
            name = res['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['name']
            return render_template('view.html', name=name, point=point)
        except:
            return "not saved"                

if __name__ == '__main__':
    app.run(debug=True)